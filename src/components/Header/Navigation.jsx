import { StyledNavLink } from "./Navigation.styled";


export const Navigation = () => {
    return (
        <nav>
        <StyledNavLink  to="/">
          Home
        </StyledNavLink>
          <StyledNavLink  to="/contacts">
            Contacts
          </StyledNavLink>
      </nav>
    )
}