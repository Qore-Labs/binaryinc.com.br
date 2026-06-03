import { Metadata } from "next";
import { UrlObject } from "url";

export interface ISocialMedia {
    name: string;
    url: string;
}

export interface ISiteConfig extends Metadata {
    name: string;
    baseUrl: string;
    socialMedia?: ISocialMedia[];
}

export interface IMenuItems {
    name: string;
    href: UrlObject["pathname"];
}