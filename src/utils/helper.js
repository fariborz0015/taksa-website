export const roleCheck = ({ roles, roleToCheck }) => {
  return roles.some((item) => {
    return item.roleName === roleToCheck
  })
}
