import React from 'react'
import { Menu, Burger } from "@mantine/core";
const Menus = () => {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Burger color="gray"/>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item>Service</Menu.Item >
                <Menu.Item >Explore</Menu.Item>
                <Menu.Item>Works</Menu.Item>
                <Menu.Divider />
                <Menu.Item>Contact us</Menu.Item>
            </Menu.Dropdown>
        </Menu >
    )
}

export default Menus