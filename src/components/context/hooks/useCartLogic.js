import { useEffect, useState } from 'react'
import allMenuData from "../../../data/menuData";
import toast from 'react-hot-toast';
function useCartLogic() {
    const [loadingId, setLoadingId] = useState(null);
    const [allData, setAllData] = useState(() => {
        const savedItems = localStorage.getItem("allData");
        return savedItems ? JSON.parse(savedItems) : [];
    });
    useEffect(() => {
        localStorage.setItem("allData", JSON.stringify(allData));
    }, [allData]);

    function addToCart(item) {
        setLoadingId(item.id);
        setTimeout(() => {
            setAllData((pre) => {

                const existingItem = pre.find((i) => i.id === item.id);
                if (existingItem) {
                    return pre.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
                }
                return [...pre, { ...item, quantity: 1 }];
            });

            setLoadingId(null);
            toast.success("Item added to cart", {
                style: {
                    background: "#f8eed8",
                    color: "#b92e2d",
                    fontWeight: "600",
                    border: "1px solid #b92e2d33",
                },
                iconTheme: {
                    primary: "#b92e2d",
                    secondary: "white",
                },
            });

        }, 2000);
    }

    function removeToCart(item) {
        setAllData((pre) => (
            pre.filter((menuItem) => menuItem.id !== item.id)
        ))
    }

    function dicreaseQuantity(item) {
        setAllData((pre) => {
            const existingItem = pre.find((i) => i.id === item.id);
            if (!existingItem) return pre;
            if (existingItem.quantity > 1) {
                return pre.map((i) => i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i)
            }
            else {
                return pre.filter((i) => i.id !== item.id);
            }

        })
    }

    function updateQuantity(item) {

        setAllData((pre) => {
            const isExist = pre.find((i) => i.id === item.id);
            if (!isExist) return pre;
            if (isExist) {
                return pre.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }
            else {
                return [...pre, { ...item, quantity: 1 }]
            }
        });
    
    };


    function custumQuantity(item, custumQuantity) {
        setAllData((pre) => {
            const isExist = pre.find((i) => i.id === item.id);
            if (isExist) {
                return pre.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + custumQuantity } : 1)
            } else {
                return [...pre, { ...item, quantity: custumQuantity }]
            }
        });

         toast.success("Item added to cart", {
                style: {
                    background: "#f8eed8",
                    color: "#b92e2d",
                    fontWeight: "600",
                    border: "1px solid #b92e2d33",
                },
                iconTheme: {
                    primary: "#b92e2d",
                    secondary: "white",
                },
            });
    }


    return {
        allData,
        addToCart,
        removeToCart,
        dicreaseQuantity,
        updateQuantity,
        custumQuantity,
        loadingId,

    }

}

export default useCartLogic;