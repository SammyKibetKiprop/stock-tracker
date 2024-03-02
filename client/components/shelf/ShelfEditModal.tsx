import { useEffect, useState } from 'react';

import { Shelf } from '@/utils/interfaces';
import { addShelfHandler, updateShelfHandler } from '@/utils/service';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react';

interface ShelfEditModalProps {
  shelf: Shelf | null;
  isModalOpen: boolean;
  onModalOpenChange: (isOpen: boolean) => void;
}

const ShelfEditModal = ({
  shelf,
  isModalOpen,
  onModalOpenChange,
}: ShelfEditModalProps) => {
  const newShelf: Shelf = {
    name: '',
    id: Date.now().toString(),
    serialNumber: Date.now().toString(),
    date: Date.now().toString(),
  };

  const [shelfData, setShelfData] = useState<Shelf>(
    shelf ?? newShelf
  );

  const saveShelfHandler = async (onClose: () => void) => {
    shelf
      ? await updateShelfHandler(shelfData)
      : await addShelfHandler(shelfData);
    onClose();
  };

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
              {shelf ? 'Edit' : 'New'} Shelf
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='Shelf name'
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
                onClick={() => saveShelfHandler(onClose)}
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
