import { Metadata } from "next";

export interface ISiteConfig extends Metadata {
    name: string;
    baseUrl: string;
}