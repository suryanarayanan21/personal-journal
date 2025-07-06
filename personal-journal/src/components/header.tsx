'use client';

import { Switch } from "@/components/ui/switch"
import { useState } from "react";
import { useViewType } from "@/_state/habittracker/viewType";

export default function Header() {
    const { viewType, switchToOverview, switchToToday } = useViewType();

    return (
        <div className="flex justify-between w-full p-5 items-center">
            <h1 className="text-3xl">Journal</h1>
            <div className="flex items-center h-full gap-2">
                <span>{`${viewType}`}</span>
                <Switch
                    checked={viewType == "Overview"}
                    onCheckedChange={isChecked => {
                        if(isChecked) switchToOverview();
                        else switchToToday(); 
                    }} />
            </div>
        </div>
    )
}