import { useContext } from "react";

import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";

import { 
    List as ListIcon,
    LightMode as LightModeIcon,
    DarkMode as DarkModeIcon,
	ArrowBack as BackIcon,
} from "@mui/icons-material";

import { AppContext } from "./ThemedApp";
import { useLocation } from "react-router-dom";

export default function Header() {
    const { mode, setMode } = useContext(AppContext);

	const { pathname } = useLocation();

	return (
		<AppBar position="static">
			<Toolbar>
				{pathname === "/" ? <ListIcon /> : <BackIcon />}

				<Typography sx={{ ml: 2, flexGrow: 1 }}>Todo</Typography>

				{mode === "dark" ? (
					<IconButton onClick={() => setMode("light")}>
						<LightModeIcon />
					</IconButton>
				) : (
					<IconButton onClick={() => setMode("dark")}>
						<DarkModeIcon />
					</IconButton>
				)}
			</Toolbar>
		</AppBar>
	);
}
