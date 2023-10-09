import { JWT } from "next-auth";
import { getOrgAndRoles } from "./org_roles";

const ADMIN_ORG = "basic";

const isAuthenticated = (tokenObj: JWT | null) => {
  if (!tokenObj) return false;
  const { access_token } = tokenObj;
  if (!access_token) return false;
  return true;
};

// const hasOrgRoles = (tokenObj: JWT | null) => {
//   if (!tokenObj) return false;
//   const { user } = tokenObj;
//   if (!user) return false;
//   const { org_roles } = user;
//   if (!org_roles) return false;
//   return Object.keys(org_roles).length > 0;
// };

const isAdmin = (tokenObj: JWT | null) => {
  if (!tokenObj) return false;
  const { user } = tokenObj;
  if (!user) return false;
  const { org_roles } = user;
  if (!org_roles) return false;
  const orgs_array = getOrgAndRoles(org_roles);
  return !!orgs_array
    .find((org) => org.name === ADMIN_ORG)
    ?.roles.includes("admin");
};

export { isAuthenticated, isAdmin };
