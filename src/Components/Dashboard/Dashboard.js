import * as React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PaymentIcon from "@mui/icons-material/Payment";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddIcon from "@mui/icons-material/Add";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useAuth from "../Hooks/useAuth";
import MyOrderPackages from "../MyOrderPackages/MyOrderPackages";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";
import Payment from "../Payment/Payment";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../AddReview/AddReview";
import AddPackage from "../AddPackage/AddPackage";
import AdminRoute from "../SignIn/AdminRoute/AdminRoute";

const drawerWidth = 215;

function Dashboard(props) {
  // import logout and admin from use Auth
  const { user, logOut, admin } = useAuth();
  let { path, url } = useRouteMatch();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem button key={1}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <Link to="/home">
            <ListItemText primary="Home" />
          </Link>
        </ListItem>

        {(admin && (
          <Box>
            <ListItem button key={5}>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <Link to={`${url}/makeadmin`}>
                <ListItemText primary="Make Admin" />
              </Link>
            </ListItem>

            <ListItem button key={6}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <Link to={`${url}/manageAllOrders`}>
                <ListItemText primary="Manage All Order" />
              </Link>
            </ListItem>

            <ListItem button key={7}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <Link to={`${url}/addpackage`}>
                <ListItemText primary="Add packages" />
              </Link>
            </ListItem>
          </Box>
        )) || (
          <Box>
            <ListItem button key={2}>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <Link to={`${url}/myorderPackages`}>
                <ListItemText primary="My orders" />
              </Link>
            </ListItem>
            <ListItem button key={3}>
              <ListItemIcon>
                <PaymentIcon />
              </ListItemIcon>
              <Link to={`${url}/payment`}>
                <ListItemText primary="Payment" />
              </Link>
            </ListItem>
            <ListItem button key={4}>
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <Link to={`${url}/addreview`}>
                <ListItemText primary="Review" />
              </Link>
            </ListItem>
          </Box>
        )}
        <ListItem button key={8}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>

          {user.email && (
            <Link to={"/"}>
              <button
                onClick={logOut}
                type="button"
                className="btn btn-danger fw-normal"
              >
                SignOut
              </button>
            </Link>
          )}
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          {(admin && (
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" noWrap component="div">
                Admin Dashboard
              </Typography>
            </Box>
          )) || (
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" noWrap component="div">
                {user.displayName}'s Dashboard
              </Typography>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <h1>
              Hi !! <p className="text-danger">{user.displayName}</p> WellCome
              To Dashboard...!{" "}
            </h1>
          </Route>
          <Route path={`${path}/addreview`}>
            <AddReview />
          </Route>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin />
          </AdminRoute>
          <Route path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route path={`${path}/myorderPackages`}>
            <MyOrderPackages />
          </Route>
          <AdminRoute path={`${path}/manageAllOrders`}>
            <ManageAllOrder />
          </AdminRoute>
          <AdminRoute path={`${path}/addpackage`}>
            <AddPackage />
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

export default Dashboard;
