import { fetchApiGet, getSavedToken } from "lib/api";
import { useEffect, useState } from "react";
import useSWR from "swr";
import useSWRImmutable from "swr/immutable";

export function useGetProducts() {
  const { data, error } = useSWRImmutable("products", fetchApiGet);
  return data?.hits;
}

export function useGetPagination() {
  const [offset, setOffset] = useState(0);
  const [q, setQ] = useState("");
  const { data, error } = useSWR(
    q ? `search?q=${q}&offset=${offset}&limit=4` : null,
    fetchApiGet,
    {
      revalidateOnFocus: false,
    }
  );

  let numberOfPages: number = data?.pagination.total / 4;
  let pages: any = [];
  while (numberOfPages > 0) {
    pages.push(numberOfPages);
    numberOfPages--;
  }

  return {
    data,
    pages: pages.reverse(),
    offset,
    setQ,
    setOffset,
  };
}

export function useLogged() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    // Perform localStorage action
    const token = getSavedToken();
    if (token) {
      setLogged(true);
    }
  }, []);

  return { logged, setLogged };
}
