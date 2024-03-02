import { Shelf } from '@/utils/interfaces';
import { updateShelfHandler } from '@/utils/service';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from '@nextui-org/react';
import { useEffect, useState } from 'react';

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
              <Input
                label='Date'
                placeholder='Enter date'
                variant='bordered'
                value={shelfData.date}
                onChange={(e) =>
                  setShelfData({
                    ...shelfData,
                    date: e.target.value,
                  })
                }
              />
            </ModalBody>
            <ModalFooter>
              <Button color='danger' variant='flat' onPress={onClose}>
                Cancel
              </Button>
              <Button
                color='primary'
                onPress={() => {
                  updateShelfHandler(shelfData);
                  onClose();
                }}
              >
                Save
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ShelfEditModal;
