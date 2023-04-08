import { useDispatch, useSelector } from "react-redux"
import { logOutUser } from "redux/auth/operations"
import { userEmailSelector } from "redux/auth/selectors"
import { StyledUserMenu } from "./UserMenu.styled"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const email = useSelector(userEmailSelector)
    return(
        <StyledUserMenu>
            <p>{email}</p>
            <button type="button" onClick={() => dispatch(logOutUser())}>Log Out</button>
        </StyledUserMenu>
    )
}