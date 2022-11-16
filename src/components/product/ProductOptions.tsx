import React, { useEffect, useState } from 'react';
import { Product, ProductOption } from '../../interfaces';

type Props = {
    finalCartItem: Product;
    options: ProductOption[];
    onProductOptionsChange?: (newType: any) => void;
};

const ProductOptions: React.FC<Props> = ({ options, onProductOptionsChange, finalCartItem }) => {
    const [optionProperties, setOptionProperties] = useState<ProductOption[]>([]);
    const [colorSelected, setColorSelected] = useState<string | undefined>('');
    const [radioButtonValue, setRadioButtonValue] = useState<string | number | undefined>();
    const isRadioSelected = (value: number | string): boolean => radioButtonValue == value;

    const ColorsOfProduct = options.map((option: ProductOption) => {
        return typeof option.color === 'object' ? option.color[0] : option.color;
    });

    const handelRadioClick = (key: string, value: string): void => {
        switch (key) {
            case 'power': {
                setRadioButtonValue(value);
                return onProductOptionsChange!({
                    ...finalCartItem,
                    options: { color: [colorSelected], power: [value] },
                });
            }
            case 'storage': {
                setRadioButtonValue(value);
                return onProductOptionsChange!({
                    ...finalCartItem,
                    options: { color: [colorSelected], storage: [value] },
                });
            }
            default:
                return;
        }
    };

    const selectColor = (color: string) => {
        const otherPropertiesOfColorSelected = options.filter((option) =>
            option.color.includes(color)
        );

        setColorSelected(color);
        setOptionProperties(otherPropertiesOfColorSelected);

        setRadioButtonValue(
            otherPropertiesOfColorSelected[0].power
                ? otherPropertiesOfColorSelected[0].power[0]
                : otherPropertiesOfColorSelected[0].storage
                ? otherPropertiesOfColorSelected[0].storage[0]
                : undefined
        );
    };

    const defaultRedioButtonValue = () => {
        if (options[0].power) {
            setRadioButtonValue(options[0].power ? options[0].power[0] : undefined);
        } else if (options[0].storage) {
            setRadioButtonValue(options[0].storage ? options[0].storage[0] : undefined);
        } else return;
    };

    useEffect(() => {
        defaultRedioButtonValue();
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                Colors:
                {ColorsOfProduct?.map((color: string) => (
                    <button
                        aria-label="product color"
                        className={colorSelected === color ? 'color-selected' : ''}
                        onClick={() => selectColor(color)}
                        key={color}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '100%',
                            border: `2px solid ${color}`,
                            margin: '10px',
                            cursor: 'pointer',
                            backgroundColor: color,
                        }}></button>
                ))}
            </div>
            {optionProperties?.map((property, index) => (
                <div key={index}>
                    {property.power ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Powers:
                            {property.power?.map((power) => (
                                <label key={power} style={{ margin: '10px' }}>
                                    <input
                                        aria-label="power"
                                        type="radio"
                                        value={power}
                                        checked={isRadioSelected(power)}
                                        onChange={() => handelRadioClick('power', power.toString())}
                                    />
                                    {power}
                                </label>
                            ))}
                        </div>
                    ) : property.storage ? (
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Storage:
                            {property.storage?.map((storage) => (
                                <label key={storage} style={{ margin: '10px' }}>
                                    <input
                                        aria-label="storage"
                                        type="radio"
                                        value={storage}
                                        checked={isRadioSelected(storage)}
                                        onChange={() => handelRadioClick('storage', storage)}
                                    />
                                    {storage}
                                </label>
                            ))}
                        </div>
                    ) : null}

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        quantity: <span style={{ margin: '10px' }}>{property.quantity}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductOptions;
