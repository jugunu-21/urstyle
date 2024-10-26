// src/components/LikedCollectionsSheet.tsx

import React from 'react';
import { Sheet, SheetContent, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Collection } from "@/components/home/hero/card-collection";
interface LikedCollectionsSheetProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LikedCollectionsSheet: React.FC<LikedCollectionsSheetProps> = ({ isOpen, onClose }) => {
    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent className="h-full overflow-y-auto">
                <div className="overflow-y-auto w-full h-full">
                    <Collection likedQuery="user" />
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit" onClick={onClose}>close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default LikedCollectionsSheet;