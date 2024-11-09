import { useEffect as useOnMountEffect } from "react";
import { useNavigate } from "react-router-dom";

const ReRoute = () => {
  const t = useNavigate();

  useOnMountEffect(() => t("/"), []);
  return null;
};

export default ReRoute;
