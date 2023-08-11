// import { useReducer } from "react";
import { useSearchParams } from "react-router-dom";
// type Mode = "preview" | "edit";

export default function useMode() {
  // TODO: re-implement this hook so that it reads and writes the mode query parameter from the URL

  const [searchParams, setSearchParams] = useSearchParams();

  const acquiredSearchParams = searchParams.get("mode");
  const searchParamsState = acquiredSearchParams ?? "mode=preview";

  const setSearchParamsState = () => {
    setSearchParams("mode=edit");
  };

  return [searchParamsState, setSearchParamsState];
}
