import { useEffect, useState } from 'react';

import { Product } from '@/utils/interfaces';
import {
  addProductHandler,
  updateProductHandler,
} from '@/utils/service';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from '@nextui-org/react';

interface ProductEditModalProps {
  product: Product | null;
  isModalOpen: boolean;
  onModalOpenChange: (isOpen: boolean) => void;
}

const ProductEditModal = ({
  product,
  isModalOpen,
  onModalOpenChange,
}: ProductEditModalProps) => {
  const newProduct: Product = {
    description: '',
    id: '',
    image: '',
    name: '',
    price: 0,
    shelfId: '',
  };

  const [productData, setProductData] = useState<Product>(
    product ?? newProduct
  );

  const productSaveHandler = async (onClose: () => void) => {
    product
      ? await updateProductHandler(productData)
      : await addProductHandler(productData);
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
              {product ? 'Edit' : 'New'} Product
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label='Product name'
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
                type='text'
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
              <button
                className='text-white bg-slate-700 px-4 py-2 rounded-md text-sm w-20 hover:bg-slate-600'
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                className='text-white bg-primary px-4 py-2 rounded-md text-sm w-20 hover:bg-primary-dark'
                onClick={() => productSaveHandler(onClose)}
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

export default ProductEditModal;
