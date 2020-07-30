import React, { useState } from 'react';
import { Drawer } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

function Header() {
  const [isMenuVisible, toggleMenu] = useState(false);

  const MenuIcon = isMenuVisible ? MenuFoldOutlined : MenuUnfoldOutlined;
  return (
    <>
      <div>
        <MenuIcon onClick={() => toggleMenu(true)} />
      </div>
      <Drawer
        title="Notepad"
        placement="left"
        closable={false}
        onClose={() => toggleMenu(false)}
        visible={isMenuVisible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default Header;
