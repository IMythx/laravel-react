import { useLocation, useNavigate } from "react-router-dom";
import DragSvg from "./assets/dragSvg";
import { svgs } from "./data/svgs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";
import { ChevronDown } from "lucide-react";
import { usePuck } from "@measured/puck";
import getCurrentPagePathInEditor from "./lib/getCurrentPagePAthInEditor";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const OverridesPlugin = ({
  activeLayout = 0,
  setActiveLayout,
}: {
  activeLayout?: number;
  setActiveLayout?: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [activePage, setActivePage] = useState<string>(
    pathname?.split("")?.[0] || "/",
  );

  const { dispatch } = usePuck();

  const [isOpen, setIsOpen] = useState(false);

  return {
    overrides: {
      components: ({ children }: { children: React.ReactNode }) => {
        return (
          <div>
            {children}
            {pathname !== "/add-layout" && (
              <div className="mt-4 w-full">
                <Collapsible
                  key={"collapsible"}
                  className="w-full"
                  open={isOpen}
                  onOpenChange={setIsOpen}
                >
                  <CollapsibleTrigger
                    key="trigger"
                    className="w-full bg-white py-4 text-start flex items-center justify-between px-2 text-[var(--puck-color-black)] font-bold"
                  >
                    Layouts
                    <ChevronDown
                      size={15}
                      className={cn(
                        "transition-all duration-400",
                        isOpen && "rotate-180",
                      )}
                    />
                  </CollapsibleTrigger>
                  <CollapsibleContent
                    key="content"
                    className="CollapsibleContent"
                  >
                    <div className="flex items-center justify-center gap-2 flex-col my-2">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "p-12 w-40 h-20",
                          activeLayout === 0 && "bg-stone-100",
                        )}
                        onClick={() => setActiveLayout?.(0)}
                      >
                        first layout
                      </Button>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "p-12 w-40 h-20",
                          activeLayout === 1 && "bg-stone-100",
                        )}
                        onClick={() => setActiveLayout?.(1)}
                      >
                        second layout
                      </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            )}
          </div>
        );
      },
      componentItem: ({ name }: { name: string }) => (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center bg-white justify-between border p-3 mb-3">
                {/* @ts-expect-error-next-line */}
                {svgs[name]}
                <DragSvg />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>{name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      header: ({ children }: { children: React.ReactNode }) => {
        return (
          <div className="[grid-area:header]">
            {children}
            {pathname !== "/add-layout" && (
              <div className="flex items-center justify-center py-2">
                <div className="flex items-center gap-2">
                  <p>Page:</p>
                  <Select
                    defaultValue={activePage}
                    onValueChange={(value) => {
                      navigate(value === "/" ? "/edit" : `/${value}/edit`);
                      const contentData = JSON.parse(
                        localStorage.getItem("content") || "{}",
                      );
                      const currentPage = getCurrentPagePathInEditor(pathname);
                      dispatch({
                        type: "setData",
                        data: contentData?.[currentPage] || {},
                      });
                      setActivePage(value);
                    }}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="/">Home</SelectItem>
                      <SelectItem value="product">Product page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>
        );
      },
    },
  };
};
