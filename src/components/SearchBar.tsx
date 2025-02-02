import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FormEvent, useState, KeyboardEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { IssueFilter } from "../models/Issue";

/* Taken from MaterialUI examples */

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const updateUrl = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;

    console.log("Q: " + query);
    const searchObject = parseSearchTextToObject(query);
    setSearchParams(searchObject as any); // react hooks love rejecting my custom types
  };

  /**
   * use this function to check whether the searchText includes
   * any specifiers which should be applied to a property besides description.
   *
   * currently supports status:x and assignee:x with one-word searches only
   *
   * @param searchText contents of searchbar
   */
  const parseSearchTextToObject = (searchText: string): IssueFilter => {
    // TODO: This function is not type-safe and should have an associated
    // model which supports all valid filters which are attributes on the Issue but are
    // entirely optional

    const valid_filters = ["assignee:", "status:"];
    let queryObject: any = {};

    // simplest case - includes no filters
    if (!searchText.includes(":")) return {};

    // checks for every possible filter - could instead just parse for ':' and do some string work
    valid_filters.forEach((filter) => {
      if (searchText.includes(filter)) {
        const startIdx = searchText.indexOf(filter);
        let endIdx = searchText.length;

        // look for the first whitespace after the filter
        const searchStart = startIdx + filter.length - 1; // skip the filter itself
        for (var i = searchStart; i < searchText.length; i++) {
          if (searchText[i] === " ") {
            endIdx = i;
            break;
          }
        }

        const filterQuery = searchText.slice(startIdx, endIdx);
        const [filterKey, filterVal] = filterQuery.split(":");
        searchText = searchText.replace(filterQuery, "");
        queryObject[filterKey] = filterVal;
      }
    });

    // remaining non-filter searchText is implicitly description
    // queryObject.description = searchText;
    return queryObject;
  };

  // now add a function which translates the object into a url search param like ?status=open
  // not sure how to do this without casting to 'any', but at this point the filter is already
  // guaranteed to be IssueFilter type
  const parseIssueFilterToQuery = (filter: IssueFilter): string =>
    "?" +
    Object.keys(filter)
      .map((key) => key + "=" + (filter as any)[key])
      .join("&");

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => updateUrl(e)}
      />
    </Search>
  );
}
