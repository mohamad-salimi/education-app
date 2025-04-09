import React, { FC } from "react";
import Button from "@/components/reusable/button/Button";
import Typography from "@/components/reusable/typography/Typography";

interface PurchaseSectionProps {
  price: number;
}

const PurchaseSection: FC<PurchaseSectionProps> = ({ price }) => {
  return (
    <div className="sticky bottom-0 flex flex-col gap-y-3 border-t border-secondary bg-white px-5 py-4 shadow-sm">
      <div className="flex items-center justify-between">
        <Typography
          variant="body_big"
          className="font-semibold text-primary"
        >{`$${price}`}</Typography>
        <Typography variant="body_big">{`(7 days trial)`}</Typography>
      </div>
      <Button format="primary">Purchase</Button>
    </div>
  );
};

export default PurchaseSection;
