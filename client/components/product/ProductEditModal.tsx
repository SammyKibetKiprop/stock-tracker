import { Product } from '@/utils/interfaces';
import { updateProductHandler } from '@/utils/service';
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

interface ProductEditModalProps {
  product: Product;
  editMode: boolean;
  isModalOpen: boolean;
  onModalOpenChange: (isOpen: boolean) => void;
}

const ProductEditModal = ({
  product,
  editMode,
  isModalOpen,
  onModalOpenChange,
}: ProductEditModalProps) => {
  const [productData, setProductData] = useState<Product>(product);

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
              Edit Product
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='text'
                placeholder='Enter product name'
                variant='bordered'
                value={productData.name}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    name: e.target.value,
                  })
                }
              />
              <Input
                label='Description'
                placeholder='Enter product description'
                type='textarea'
                variant='bordered'
                value={productData.description}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    description: e.target.value,
                  })
                }
              />
              <Input
                label='Price'
                placeholder='Enter product price'
                type='number'
                variant='bordered'
                value={`${productData.price}`}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    price: +e.target.value,
                  })
                }
              />
              <Input
                label='Shelf ID'
                placeholder='Enter shelf ID'
                type='number'
                variant='bordered'
                value={productData.shelfId}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    shelfId: e.target.value,
                  })
                }
              />
              <Input
                label='Image'
                placeholder='Enter image URL'
                type='url'
                variant='bordered'
                value={productData.image}
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    image: e.target.value,
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
                  updateProductHandler(productData);
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

export default ProductEditModal;
