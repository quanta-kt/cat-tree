import { useMemo } from "react";
import cats from "./cats.json";

export interface Cat {
  id: string;
  name: string;
  description: string;
  children: string[];
}

export interface Child {
  id: string;
  name: string;
}

export interface CatWithChildrenInfo extends Cat {
  childrenInfo: Child[];
}

export function useCatsList(): CatWithChildrenInfo[] {
  // TODO: fetch from network request instead.
  return useMemo(() => {
    return cats.map((cat) => ({
      ...cat,

      childrenInfo: cats
        .filter((it) => cat.children.includes(it.id))
        .map((child) => ({
          id: child.id,
          name: child.name,
        })),
    }));
  }, []);
}
