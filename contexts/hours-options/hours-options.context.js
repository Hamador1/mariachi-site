import { createContext } from "react";

import HOURS_OPTIONS from "./hours-options"

const HoursContext = createContext(HOURS_OPTIONS);

export default HoursContext;