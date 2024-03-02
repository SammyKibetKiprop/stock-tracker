import { useEffect, useState } from 'react';

import { Shelf } from '@/utils/interfaces';
import { updateShelfHandler } from '@/utils/service';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react';

interface ShelfEditModalProps {
  shelf: Shelf;
  editMode: boolean;
  isModalOpen: boolean;
  onModalOpenChange: (isOpen: boolean) => void;
}

const ShelfEditModal = ({
  shelf,
  editMode,
  isModalOpen,
  onModalOpenChange,
}: ShelfEditModalProps) => {
  const [shelfData, setShelfData] = useState<Shelf>(shelf);

  return (
    <Modal
      isOpen={isModalOpen}
      onOpenChange={onModalOpenChange}
      placement='top-center'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>
              Edit Shelf
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='text'
                placeholder='Enter shelf name'
                variant='bordered'
                value={shelfData.name}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    name: e.target.value,
                  })
                }
              />
              <Input
                label='Serial Number'
                placeholder='Enter serial number'
                variant='bordered'
                value={shelfData.serialNumber}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    serialNumber: e.target.value,
                  })
                }
              />
            </ModalBody>
            <ModalFooter>
              <button
                className='text-white bg-slate-700 px-4 py-2 rounded-md text-sm w-20 hover:bg-slate-600'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className='text-white bg-blue-500 px-4 py-2 rounded-md text-sm w-20 hover:bg-blue-400'
                onClick={() => {
                  updateShelfHandler(shelfData);
                  onClose();
                }}
              >
                Save
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ShelfEditModal;
