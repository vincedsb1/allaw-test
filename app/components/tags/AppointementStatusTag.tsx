import React from "react";
import "../../styles/AppointementStatusTag.css";

interface AppointementStatusTagProps {
  status:
    | "confirmed"
    | "pending"
    | "available"
    | "unavailable"
    | "cancelled"
    | "passed"
    | "refused";
  variant?: "default" | "big";
}

const statusStyles: { [key: string]: string } = {
  confirmed: "status-confirmed",
  pending: "status-pending",
  available: "status-available",
  unavailable: "status-unavailable",
  cancelled: "status-cancelled",
  passed: "status-passed",
  refused: "status-refused",
};

const statusLabels: { [key: string]: string } = {
  confirmed: "CONFIRMÉ",
  pending: "EN ATTENTE",
  available: "DISPONIBLE",
  unavailable: "INDISPONIBLE",
  cancelled: "ANNULÉ",
  passed: "PASSÉ",
  refused: "REFUSÉ",
};

const variantLabels: { [key: string]: string } = {
  confirmed: "RDV CONFIRMÉ",
  passed: "RDV PASSÉ",
  cancelled: "RDV ANNULÉ",
};

const variantStyles = {
  big: "variant-big",
  default: "variant-default",
};

const AppointementStatusTag = ({
  status,
  variant = "default",
}: AppointementStatusTagProps) => {
  const label =
    variant === "big" && variantLabels[status]
      ? variantLabels[status]
      : statusLabels[status];
  const variantClass = variantStyles[variant];

  const specificStyles =
    status === "cancelled" && variant === "big"
      ? "status-cancelled-big"
      : statusStyles[status];

  return (
    <span
      className={`appointement-status-tag ${variantClass} ${specificStyles}`}
    >
      {label}
    </span>
  );
};

export default AppointementStatusTag;
