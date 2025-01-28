import { BarChart3, Briefcase, Cloud, Shield } from "lucide-react";
import { cn } from "~/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { FC, JSX } from "react";

interface List1Props {
  data: {
    icon: JSX.Element;
    category: string;
    description: string;
    year: number;
    offer: string;
    segment: string;
  }[];
}

const List1: FC<List1Props> = ({ data }) => {
  return (
    <section className="py-8 px-[1.5rem] lg:px-[5rem]">
      <div className="container px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Category
              </TableHead>
              <TableHead>
                <span className="hidden font-bold text-primary md:block">
                  Description
                </span>
                <span className="block font-bold text-primary md:hidden">
                  Project
                </span>
              </TableHead>
              <TableHead className="hidden text-right font-bold text-primary md:table-cell">
                Year
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Offer
              </TableHead>
              <TableHead className="hidden font-bold text-primary md:table-cell">
                Segment
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item, index) => (
              <TableRow
                key={index}
                className="hover:bg-popover hover:text-popover-foreground focus:bg-popover focus:text-popover-foreground"
              >
                <TableCell className="">
                  <div className="flex items-center gap-2 align-top">
                    {item.icon}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.category}
                </TableCell>
                <TableCell className="pl-0 align-top md:pl-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-1 md:hidden">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-medium">
                          {item.category}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          - {item.segment}
                        </span>
                        <span
                          className={cn(
                            "ml-1 block h-1.5 w-4 rounded-full md:hidden",
                            item.offer === "Free" && "bg-yellow-400",
                            item.offer === "Professional" && "bg-green-400",
                            item.offer === "Enterprise" && "bg-blue-400"
                          )}
                        ></span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-primary">
                      {item.description}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="hidden text-right md:table-cell">
                  {item.year}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "block h-6 w-1.5 rounded-full",
                        item.offer === "Free" && "bg-yellow-400",
                        item.offer === "Professional" && "bg-green-400",
                        item.offer === "Enterprise" && "bg-blue-400"
                      )}
                    ></span>
                    {item.offer}
                  </div>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item.segment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default List1;
