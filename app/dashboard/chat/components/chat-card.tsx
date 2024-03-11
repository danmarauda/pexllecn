"use client";

import Link from "next/link";
import { OnlineStatusAvatar } from "./online-status-avatar";
import { useState, useEffect } from "react";

export function ChatCard() {
  const [showNotification, setShowNotification] = useState(false);
  const [status, setStatus] = useState("green");

  useEffect(() => {
    // This simulates the previous random behavior but only runs on client side
    setShowNotification(Math.random() < 0.5);
    setStatus(Math.random() < 0.5 ? "green" : "red");
  }, []);
  return (
    <Link
      className="w-full flex px-4 items-center py-4 hover:bg-muted"
      href="/dashboard/chat/ahmed"
    >
      <OnlineStatusAvatar status={status} />
      <div className="w-full px-3 flex flex-col gap-[1px]">
        <div className="flex justify-between w-full items-center">
          <h3 className="text-md font-semibold">Cody Fisher</h3>
          <p className="text-muted-foreground text-[13px]">11:30</p>
        </div>
        <div className="flex items-center">
          <h3
            className={`flex-grow text-sm text-muted-foreground truncate w-[100px] md:[200px]`}
          >
            Hey there! I have heard about Primoieoav
          </h3>
          {showNotification && (
            <span className="bg-black dark:bg-white dark:text-black h-4 w-4 ml-3 text-white flex items-center justify-center rounded-full text-[12px] font-thin pt-[1px]">
              2
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
