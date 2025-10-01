
import React from "react";
import { motion } from "framer-motion";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

const KeyPerformanceTable = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Key Performance Indicators</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/4">Metric</TableHead>
              <TableHead>Year 1</TableHead>
              <TableHead>Year 2</TableHead>
              <TableHead>Year 3</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Lives Served</TableCell>
              <TableCell>7,490</TableCell>
              <TableCell>27,240</TableCell>
              <TableCell>80,400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Premium per Employee/Month</TableCell>
              <TableCell>$125</TableCell>
              <TableCell>$129</TableCell>
              <TableCell>$133</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Gross Annualized Premium</TableCell>
              <TableCell>$11.5M</TableCell>
              <TableCell>$42.1M</TableCell>
              <TableCell>$128.2M</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Revenue per Life (Monthly)</TableCell>
              <TableCell>$18</TableCell>
              <TableCell>$18</TableCell>
              <TableCell>$18</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Margin per Life (Monthly)</TableCell>
              <TableCell>$13</TableCell>
              <TableCell>$13</TableCell>
              <TableCell>$13</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">CAC per SMB</TableCell>
              <TableCell>$450</TableCell>
              <TableCell>$425</TableCell>
              <TableCell>$400</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">LTV:CAC Ratio</TableCell>
              <TableCell>3.8×</TableCell>
              <TableCell>4.2×</TableCell>
              <TableCell>4.5×</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default KeyPerformanceTable;
