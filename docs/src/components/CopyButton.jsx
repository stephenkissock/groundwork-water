import { Button } from "@usace/groundwork";
import { BsCopy } from "react-icons/bs";
import { GoThumbsup } from "react-icons/go";
import { useState } from "react";

function CopyButton({ className, text }) {
  const [copying, setCopying] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(
      text.replace(/\\`/gi, "`").replace(/\\$/gi, "$")
    );
  };
  return (
    <Button
      className={className}
      outline={!copying}
      color={copying ? "green" : undefined}
      onClick={() => {
        handleCopy();
        setCopying(true);
        setTimeout(() => {
          setCopying(false);
        }, 1000);
      }}
    >
      {copying ? <GoThumbsup /> : <BsCopy />}
    </Button>
  );
}

export default CopyButton;
