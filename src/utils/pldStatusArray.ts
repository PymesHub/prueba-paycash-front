import { PLDStatus } from "../domain/models/PldStatus.enums";

const pldStatusArray = [
  { key: PLDStatus.isHghRisk, label: "Alto riesgo" },
  { key: PLDStatus.isLowRisk, label: "Bajo riesgo" },
  { key: PLDStatus.isModerateRisk, label: "Riesgo moderado" },
  { key: PLDStatus.waiting, label: "Cargando" },
];
const keyToValuePLD = (key: string) => {
  const pldStatus = pldStatusArray.find((pldStatus) => pldStatus.key === key);

  return pldStatus?.label;
};

export { pldStatusArray, keyToValuePLD };
