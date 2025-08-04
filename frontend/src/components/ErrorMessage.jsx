import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "./ui/button";

const ErrorMessage = ({ 
  error, 
  onRetry, 
  title = "Something went wrong",
  showRetry = true 
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-4 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center">
        <AlertCircle size={32} className="text-red-400" />
      </div>
      
      <div className="text-center space-y-2">
        <h3 className="text-lg font-semibold text-[#E2E2E2]">{title}</h3>
        {error && (
          <p className="text-[#E2E2E2]/60 text-sm max-w-md">
            {typeof error === 'string' ? error : 'An unexpected error occurred'}
          </p>
        )}
      </div>

      {showRetry && onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="border-[#6A40E4] text-[#6A40E4] hover:bg-[#6A40E4] hover:text-white"
        >
          <RefreshCw size={16} className="mr-2" />
          Try Again
        </Button>
      )}
    </motion.div>
  );
};

export default ErrorMessage;