
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import { tableData, containerVariants } from "./table/TableData";
import ComponentRow from "./table/ComponentRow";

interface ValueChainTableProps {
  isVisible: boolean;
}

const ValueChainTable = ({ isVisible }: ValueChainTableProps) => {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const tableRef = useRef<HTMLDivElement>(null);
  const throttleRef = useRef<number | null>(null);

  // Throttled hover handler to improve performance
  const handleHover = (componentName: string | null) => {
    if (throttleRef.current) return;
    
    throttleRef.current = window.setTimeout(() => {
      setHoveredComponent(componentName);
      throttleRef.current = null;
    }, 60);
  };

  // Viewport detection to only animate when visible
  useEffect(() => {
    if (!tableRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsInViewport(entries[0].isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(tableRef.current);

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      ref={tableRef}
      className="mb-16 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="overflow-x-auto">
        <motion.div
          className="w-full border-collapse bg-white rounded-lg shadow-md overflow-hidden relative"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible && isInViewport ? "show" : "hidden"}
        >
          <Table>
            <TableHeader className="bg-[#f5f7fd]">
              <TableRow className="border-b border-gray-200">
                <TableHead className="w-1/3 py-4 px-6 text-left font-bold text-[#444444]">Value Chain Component</TableHead>
                <TableHead className="w-1/3 py-4 px-6 text-left font-bold text-[#444444]">Cakewalk Innovation</TableHead>
                <TableHead className="w-1/3 py-4 px-6 text-left font-bold text-[#444444]">Business Impact</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableData.map((row, index) => (
                <ComponentRow
                  key={row.component}
                  data={row}
                  index={index}
                  isHovered={hoveredComponent === row.component}
                  isInViewport={isInViewport}
                  onHover={handleHover}
                />
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValueChainTable;
