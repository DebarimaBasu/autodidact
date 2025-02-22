import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Home } from "lucide-react";
  import React from "react";
  
  interface CustomBreadCrumbProps {
    breadCrumbPage: string;
    breadCrumpItems?: { link: string; label: string }[];
  }
  
  export const CustomBreadCrumb = ({
    breadCrumbPage,
    breadCrumpItems,
  }: CustomBreadCrumbProps) => {
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="flex items-center justify-center hover:text-emerald-500 text-red-50"
            >
              <Home className="w-3 h-3 mr-2 text-red-100" />
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
  
          {breadCrumpItems &&
            breadCrumpItems.map((item, i) => (
              <React.Fragment key={i}>
                <BreadcrumbSeparator className="text-red-50"/>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    href={item.link}
                    className="hover:text-emerald-500 text-red-50"
                  >
                    {item.label}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </React.Fragment>
            ))}
          <BreadcrumbSeparator className="text-red-50"/>
          <BreadcrumbItem >
            <BreadcrumbPage className="text-red-100 font-semibold">{breadCrumbPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  };