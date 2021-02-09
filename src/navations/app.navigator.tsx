import React from "react";
import { AppRoute } from "./app-routes";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { DashBoardScreen } from "../scenes/dashboard/dashboard.component";
import { ProfileScreen } from "../scenes/profile/profile.component";
import { BudgetScreen } from "../scenes/budget/budget.component";

const Tabs = createMaterialBottomTabNavigator();

interface Props {
    initialRouteName: string;
}

export class AppNavigator extends React.Component<Props> {

    render() {
        return (
            <Tabs.Navigator {...this.props}>
                <Tabs.Screen 
                    name={AppRoute.DASHBOARD} 
                    component={DashBoardScreen} 
                    options={{
                        tabBarLabel: AppRoute.DASHBOARD,
                        tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="home" color={color} size={28} /> ),
                    }} 
                />
                <Tabs.Screen 
                    name={AppRoute.BUDGET} 
                    component={BudgetScreen} 
                    options={{
                        tabBarLabel: AppRoute.BUDGET,
                        tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="piggy-bank" color={color} size={28} /> ),
                    }} 
                />
                <Tabs.Screen 
                    name={AppRoute.PROFILE} 
                    component={ProfileScreen} 
                    options={{
                        tabBarLabel: AppRoute.PROFILE,
                        tabBarIcon: ({color}) => ( <MaterialCommunityIcons name="account" color={color} size={28} /> ),
                    }} 
                />
            </Tabs.Navigator>
        )
    }  

}