// This file is auto generated by TypescriptableLaravel.
declare namespace App.Models {
  export type SushiTest = {
    id: number
  }
  export type User = {
    id: number
    name: string
    email: string
    email_verified_at: Date
    created_at?: Date
    updated_at?: Date
    roles?: any[]
    permissions?: any[]
    roles_count?: number
    permissions_count?: number
    password: any
  }
}

declare namespace App {
  export type PaginateLink = {
    url: string;
    label: string;
    active: boolean;
  };
  export type Paginate<T = any> = {
    data: T[];
    current_page: number;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: App.PaginateLink[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
  export type ApiPaginate<T = any> = {
    data: T[];
    links: {
      first?: string;
      last?: string;
      prev?: string;
      next?: string;
    };
    meta: {
      current_page: number;
      from: number;
      last_page: number;
      links: App.PaginateLink[];
      path: string;
      per_page: number;
      to: number;
      total: number;
    };
  };
}