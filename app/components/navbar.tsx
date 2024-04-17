"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Button,
  Drawer,
  Dropdown,
  Input,
  Modal,
  Menu,
  ConfigProvider,
} from "@arco-design/web-react";
import { IconMenu, IconSearch } from "@arco-design/web-react/icon";
import enUS from "@arco-design/web-react/es/locale/en-US";
import ScreenLinks from "./screenLinks";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const pathname = usePathname();
  return (
    <ConfigProvider locale={enUS}>
      <div className="flex flex-col relative">
        <div className="fixed -right-32 top-[420px] z-20">
          <ScreenLinks />
        </div>
        <div className="flex items-center justify-center h-12 bg-blue-200 cursor-pointer hover:bg-blue-400 opacity-65">
          <p className=" text-xs max-sm:text-[11px] font-bold text-center ">
            Some product prices may be outdated, please confirm current price
            before placing an order. Chat with us on Whatsapp on +23480000000
          </p>
        </div>
        <div className="border-b-2 static top-0">
          <div className="flex justify-between items-center  h-16 px-12 max-lg:px-2">
            <Link href="/">
              <p className="text-3xl font-bold">Empire</p>
            </Link>

            <div className="flex gap-6">
              <div className="max-lg:hidden">
                <Input
                  style={{ width: 350, borderRadius: 10 }}
                  allowClear
                  placeholder="Please Enter something"
                  size="large"
                />
              </div>
              <div className="lg:hidden">
                <Button onClick={() => setVisible2(true)} type="text">
                  <IconSearch fontSize="22px" className=" text-gray-600" />
                </Button>
                <Modal
                  title="Please Enter something"
                  visible={visible2}
                  onOk={() => setVisible2(false)}
                  onCancel={() => setVisible2(false)}
                  autoFocus={false}
                  focusLock={true}
                  className="w-[90%]"
                >
                  <Input
                    style={{ width: "100%", borderRadius: 10 }}
                    allowClear
                    placeholder="Please Enter something"
                    size="large"
                  />
                </Modal>
              </div>
              <div className=" max-lg:hidden flex justify-center gap-6 items-center">
                <Link
                  className={`link ${pathname === "/" ? "active" : ""}`}
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className={`link ${pathname === "/about" ? "active" : ""}`}
                  href="/pages/about"
                >
                  About
                </Link>

                <Link
                  className={`link ${pathname === "/gallery" ? "active" : ""}`}
                  href="/pages/gallery"
                >
                  Gallery
                </Link>
                <Link
                  className={`link ${pathname === "/contact" ? "active" : ""}`}
                  href="/pages/contact"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="lg:hidden">
              <div>
                <Button
                  onClick={() => {
                    setVisible(true);
                  }}
                  type="secondary"
                >
                  <IconMenu />
                </Button>
                <Drawer
                  width={332}
                  title={<span>Home</span>}
                  placement="left"
                  visible={visible}
                  onOk={() => {
                    setVisible(false);
                  }}
                  onCancel={() => {
                    setVisible(false);
                  }}
                >
                  <div className="flex flex-col gap-4 pt-6">
                    <p>Accessories</p>
                    <p>Bedroom</p>
                    <p>Kitchen</p>
                    <Link href="/gallery/livingRoom">Living-Room</Link>
                    <p>Office</p>
                    <p>Dinning-Room</p>
                    <p>Baby and Kids</p>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
          <div className="max-lg:hidden flex justify-center items-center gap-4 place-content-center bg-gray-300 py-1">
            <Link href="/gallery/bedroom" className="active2 font-medium">
              Bedroom
            </Link>
            <Link href="/gallery/kitchen" className=" font-medium">
              Kitchen
            </Link>
            <Dropdown
              droplist={
                <Menu>
                  <Link href="/gallery/livingRoom/sofa">
                    <Menu.Item key="1">Sofa</Menu.Item>
                  </Link>
                  <Link href="/gallery/livingRoom/centerTable">
                    <Menu.Item key="2">Center-Table</Menu.Item>
                  </Link>
                  <Link href="/gallery/livingRoom/tvShelve">
                    <Menu.Item key="3">Tv-Shelve</Menu.Item>
                  </Link>
                  <Link href="/gallery/livingRoom/sideTable">
                    <Menu.Item key="4">Side-Table</Menu.Item>
                  </Link>
                  <Link href="/gallery/livingRoom/bookShelve">
                    <Menu.Item key="5">Book-Shelves</Menu.Item>
                  </Link>
                </Menu>
              }
              position="bottom"
            >
              <Button type="text">Living-Room</Button>
            </Dropdown>

            <Link href="/gallery/office" className=" font-medium">
              Office
            </Link>
            <Link href="/gallery/dinningRoom" className=" font-medium">
              Dinning-Room
            </Link>
            <Link href="/gallery/babies" className=" font-medium">
              Baby and Kids
            </Link>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Navbar;
