const menuItems = {
    detoxifying: [
        {
            name: "Green Goddess Elixir",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249718665717354557/willytheboy_images_for_the_juice_in_a_330_ml_plastic_cup_with_c_36f3530d-8cf1-4ab3-ae1b-1bbb03b2c43b.png?ex=666852b4&is=66670134&hm=e168e4c2398e1f1ef78bec9ea31199d16ca93faf7a78ed9c22f1d3ec4b946aeb&=&format=webp&quality=lossless&width=848&height=848",
            description: "A refreshing blend of kale, spinach, cucumber, green apple, and lemon to detoxify your body."
        },
        {
            name: "Apple Carrot Beet Blush",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249718554400653443/willytheboy_images_for_the_juice_Apple_Carrot_Beet_Blush_in_a_3_4fd01b67-ba66-45f1-9e56-f0ac8e7006a7.png?ex=6668529a&is=6667011a&hm=edd2ffc0916559e07c472fe1a49b27ab440df96a328ade348601f46cf2e6b041&=&format=webp&quality=lossless&width=848&height=848",
            description: "A vibrant mix of apple, carrot, beet, and ginger to cleanse and energize."
        },
        {
            name: "Tropical Green Wave",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249711168902140045/willytheboy_Tropical_Green_Wave_Pineapple_Kale_Cucumber_Lime_dr_7ccf24d5-a1ed-4e71-b38a-e9813a770b56.png?ex=66684bb9&is=6666fa39&hm=9e805c2f034c770f58852572b1c1f49c26b2457d0748ad710135998dbbfdc4f1&=&format=webp&quality=lossless&width=848&height=848",
            description: "A tropical blend of pineapple, kale, cucumber, and lime for a refreshing detox."
        },
        {
            name: "Apple Celery Citrus",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249711318609563678/willytheboy_Apple_Celery_Citrus_Apple_Celery_Lemon_Ginger_drink_734c7998-2bf3-47c1-ad87-72bce6e2b738.png?ex=66684bdc&is=6666fa5c&hm=38bba43619f9bab3585a4c4c08a419d459b7c57e6ca2e7cd1f87666277fa25a0&=&format=webp&quality=lossless&width=350&height=350",
            description: "A crisp mix of apple, celery, lemon, and ginger to detox and refresh."
        },
        {
            name: "Berry Beet Boost",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249711559886770176/willytheboy_Berry_Beet_Boost_Beet_Blueberry_Apple_Lemon_drink_i_bfdb6558-c4c0-4344-918d-15811e25c1eb.png?ex=66684c16&is=6666fa96&hm=bacdf99b4a4f00b5cc1048108a483874294019ee4e4f1ffe9459ec345018bf6e&=&format=webp&quality=lossless&width=350&height=350",
            description: "A powerful blend of beet, blueberry, apple, and lemon for a detox boost."
        }
    ],
    energizing: [
        {
            name: "Sunshine Turmeric Zing",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249712197748129823/willytheboy_Sunshine_Turmeric_Zing_Orange_Carrot_Turmeric_Ginge_5c3c3956-ced8-4336-a78a-0f399f5e0df9.png?ex=66684cae&is=6666fb2e&hm=0775eb3ef24adcf59c7c7d27b3eb2344a5e89074320ba8b830443e86f80b3644&=&format=webp&quality=lossless&width=350&height=350",
            description: "An energizing mix of orange, carrot, turmeric, and ginger to brighten your day."
        },
        {
            name: "Tropical Sunrise Splash",
            price: 13.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249712545426706474/willytheboy_Tropical_Sunrise_Splash_Pineapple_Orange_Mango_drin_12239256-3a4c-43dd-ad14-60b8f280b83c.png?ex=66684d01&is=6666fb81&hm=3e9eaa85687fdd8f331822ef9c6c089d3e316504dba5aa748dad10425b707edc&=&format=webp&quality=lossless&width=350&height=350",
            description: "A vibrant blend of pineapple, orange, and mango for an energizing tropical boost."
        },
        {
            name: "Citrus Mint Breeze",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249712368464826508/willytheboy_Citrus_Mint_Breeze_Orange_Lemon_Lime_Mint_drink_ima_1e580e12-a8f3-498e-9946-c55611356ddb.png?ex=66684cd7&is=6666fb57&hm=fe73c1e6e2ff5cf6a50db457ffba8e9fabdb8d78ab6964f72f6bef89fb788b80&=&format=webp&quality=lossless&width=848&height=848",
            description: "A refreshing mix of orange, lemon, lime, and mint to revitalize your senses."
        },
        {
            name: "Grapefruit Pineapple Punch",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713011757682759/willytheboy_Grapefruit_Pineapple_Punch_Grapefruit_Pineapple_Gin_e3607e49-4cb8-4a61-8d88-838fa55ef8e9.png?ex=66684d70&is=6666fbf0&hm=ad7597af095a1fff4e8db32c2ec3b0d73378b62e00974c5c775e2fb76ab01b5a&=&format=webp&quality=lossless&width=350&height=350",
            description: "A punchy blend of grapefruit, pineapple, and ginger for an energizing kick."
        },
        {
            name: "Papaya Lime Mint Fizz",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713328163393566/willytheboy_Papaya_Lime_Mint_Fizz_Papaya_Lime_Mint_drink_images_5d282d97-c5c9-43ab-a4a2-d5c0e04b5e2f.png?ex=66684dbb&is=6666fc3b&hm=8105acb77e37d9cd512b7e94e9dbdd10b95a2fd9f7eccac2563eeaca0703345e&=&format=webp&quality=lossless&width=848&height=848",
            description: "A fizzy mix of papaya, lime, and mint to refresh and energize."
        }
    ],
    hydrating: [
        {
            name: "Cucumber Melon Cooler",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713479640678460/willytheboy_Cucumber_Melon_Cooler_Cucumber_Honeydew_Melon_Mint__9d12f773-194a-4c73-abd1-96f71ebc9020.png?ex=66684de0&is=6666fc60&hm=b7fb4990502b93dfb7ecc7c288cb5899a3ee55928a810091c74550dccbe89e27&=&format=webp&quality=lossless&width=350&height=350",
            description: "A cool blend of cucumber, honeydew melon, and mint to hydrate and refresh."
        },
        {
            name: "Watermelon Basil Bliss",
            price: 10.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713604391993364/willytheboy_Watermelon_Basil_Bliss_Watermelon_Basil_Lime_drink__420b4e00-4b70-4fa8-bd4b-e8220771956c.png?ex=66684dfd&is=6666fc7d&hm=21afbd5980c9f6912b8fa924a9fcecda193ffd6a7bf1b7246e0cdfd7b0e8deb5&=&format=webp&quality=lossless&width=848&height=848",
            description: "A blissful mix of watermelon, basil, and lime to hydrate and invigorate."
        },
        {
            name: "Pineapple Kale Hydration",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713767839698964/willytheboy_Pineapple_Kale_Hydration_Pineapple_Kale_Coconut_Wat_d414ad70-9f57-421c-9d2b-5f9e7da48fe2.png?ex=66684e24&is=6666fca4&hm=55f54c4ff61b855e3d03e03eaea15d6f0a0cd4c011fc5071417ee59e70290c41&=&format=webp&quality=lossless&width=350&height=350",
            description: "A hydrating blend of pineapple, kale, and coconut water to refresh and replenish."
        },
        {
            name: "Cantaloupe Ginger Refresher",
            price: 10.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713865776693308/willytheboy_Cantaloupe_Ginger_Refresher_Cantaloupe_Ginger_Lime__160fa72c-9527-4606-927f-7dacdc91f2f7.png?ex=66684e3c&is=6666fcbc&hm=b2416dbf02ed136fc0089b92ef375f852a56967dfc1c5ea4c23b7dd6051b7ab8&=&format=webp&quality=lossless&width=848&height=848",
            description: "A refreshing mix of cantaloupe, ginger, and lime to hydrate and invigorate."
        },
        {
            name: "Spinach Apple Cucumber Zen",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249713958093590549/willytheboy_Spinach_Apple_Cucumber_Zen_Spinach_Apple_Cucumber_L_092e6cc3-992b-4e09-b988-46a2222cadc2.png?ex=66684e52&is=6666fcd2&hm=ce1f4eb19756f9a8d43d14f122fcfcc43cb4ca90c32c7b259178af0b78edb934&=&format=webp&quality=lossless&width=848&height=848",
            description: "A zen mix of spinach, apple, and cucumber to hydrate and refresh your body."
        }
    ],
    immunity: [
        {
            name: "Turmeric Ginger Glow",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714278517313586/willytheboy_Turmeric_Ginger_Glow_Apple_Orange_Lemon_Ginger_Turm_d44494ba-7cd5-4640-a39b-3d73c5e67120.png?ex=66684e9e&is=6666fd1e&hm=81e22a913244a4f4c822c032cb53699c2884d5ac01b5a5e9b0cd9532a1869423&=&format=webp&quality=lossless&width=350&height=350",
            description: "A glowing blend of apple, orange, lemon, ginger, and turmeric to boost your immunity."
        },
        {
            name: "Berry Bliss Boost",
            price: 13.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714430434869288/willytheboy_Berry_Bliss_Boost_Strawberries_Blueberries_Raspberr_643428bd-beb3-438c-a3bb-4218d1aaebd7.png?ex=66684ec2&is=6666fd42&hm=44c3c70c4982043cec165be51d92f453308046f9d79d04f038c7ca2bd59651ef&=&format=webp&quality=lossless&width=848&height=848",
            description: "A blissful mix of strawberries, blueberries, raspberries, and apple to boost your immunity."
        },
        {
            name: "Blueberry Pear Fusion",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714524588740738/willytheboy_Blueberry_Pear_Fusion_Blueberry_Pear_Apple_drink_im_c2491212-3a27-4b88-9a50-2d118e9b4668.png?ex=66684ed9&is=6666fd59&hm=4a52a2f19aaf41930e7ce06d3c55912c8e18ad9d7ac339372d75b4a0fc581145&=&format=webp&quality=lossless&width=848&height=848",
            description: "A fusion of blueberry, pear, and apple to enhance your immunity."
        },
        {
            name: "Pomegranate Orange Delight",
            price: 13.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714614074081394/willytheboy_Pomegranate_Orange_Delight_Pomegranate_Orange_Apple_c94a088d-351d-4d56-b387-2b75dceaab24.png?ex=66684eee&is=6666fd6e&hm=56361d085a578291b3df297d343191bafe93dae6523b00f61b916e5a0dfc9144&=&format=webp&quality=lossless&width=350&height=350",
            description: "A delightful mix of pomegranate, orange, and apple to support your immunity."
        },
        {
            name: "Green Goddess Elixir (Immunity)",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249718665717354557/willytheboy_images_for_the_juice_in_a_330_ml_plastic_cup_with_c_36f3530d-8cf1-4ab3-ae1b-1bbb03b2c43b.png?ex=666852b4&is=66670134&hm=e168e4c2398e1f1ef78bec9ea31199d16ca93faf7a78ed9c22f1d3ec4b946aeb&=&format=webp&quality=lossless&width=848&height=848",
            description: "An elixir of kale, spinach, cucumber, green apple, and lemon to boost your immunity."
        }
    ],
    digestive: [
        {
            name: "Pear Lime Refresher",
            price: 11.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714760644034672/willytheboy_Pear_Lime_Refresher_Pear_Lime_Mint_drink_images_for_1c908395-824c-4326-adf4-7a4c761e3fa5.png?ex=66684f11&is=6666fd91&hm=55b3c8a170defd53e2583dd304e3a8d99490dc82152880fadf4d940e30c1f9a7&=&format=webp&quality=lossless&width=350&height=350",
            description: "A refreshing mix of pear, lime, and mint to aid digestion."
        },
        {
            name: "Carrot Orange Zest",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249718916314435615/willytheboy_Carrot_Orange_Zest_Carrot_Orange_Ginger_drink_image_0fd5d7a0-3df0-4fee-bfc6-594e18fa0f1d.png?ex=666852f0&is=66670170&hm=adba586c46166f608a56e2f1feeb5ca9d8ba83a0dcf3de30087347cd31accb77&=&format=webp&quality=lossless&width=350&height=350",
            description: "A zesty blend of carrot, orange, and ginger to support digestion."
        },
        {
            name: "Apple Fennel Glow",
            price: 10.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249714919058968749/willytheboy_Apple_Fennel_Glow_Apple_Fennel_Lemon_drink_images_f_08f24987-f20d-4474-b0b3-a7aa9fdf9fe5.png?ex=66684f37&is=6666fdb7&hm=95e925581f9e7407ad94d8a85a90f7611c95e2c3f5ee64e78e143b974dec9456&=&format=webp&quality=lossless&width=848&height=848",
            description: "A glowing mix of apple, fennel, and lemon to aid digestion."
        },
        {
            name: "Tropical Carrot Delight",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249715003414679552/willytheboy_Tropical_Carrot_Delight_Carrot_Pineapple_Mango_drin_8a39af77-fdda-4f5b-aec5-2b701c9d7f6d.png?ex=66684f4b&is=6666fdcb&hm=e8f397155c9921810cabfa9ab84598ac33791f9ff89f8538e93c5d56e97cf718&=&format=webp&quality=lossless&width=848&height=848",
            description: "A delightful blend of carrot, pineapple, and mango to support digestion."
        },
        {
            name: "Berry Beet Boost (Digestive)",
            price: 12.00,
            img_url: "https://media.discordapp.net/attachments/1249374686337437707/1249711559886770176/willytheboy_Berry_Beet_Boost_Beet_Blueberry_Apple_Lemon_drink_i_bfdb6558-c4c0-4344-918d-15811e25c1eb.png?ex=66684c16&is=6666fa96&hm=bacdf99b4a4f00b5cc1048108a483874294019ee4e4f1ffe9459ec345018bf6e&=&format=webp&quality=lossless&width=350&height=350",
            description: "A powerful blend of beet, blueberry, apple, and lemon for digestive health."
        }
    ]
};

// Function to display drinks
function displayDrinks(itemKey) {
    const menu = document.getElementById('menu');
    menu.innerHTML = '';

    if (itemKey === 'all_items') {
        // Display all items
        for (const [category, items] of Object.entries(menuItems)) {
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('menu-item');
                itemDiv.innerHTML = `
                    <img src="${item.img_url}" alt="${item.name}">
                    <h2>${item.name.toUpperCase()}</h2>
                    <p>${item.description}</p>
                    <p><strong>Price: $${item.price.toFixed(2)}</strong></p>
                    <button>Order Now</button>
                `;
                menu.appendChild(itemDiv);
            });
        }
    } else if (itemKey.startsWith('all_')) {
        // Display all items in a specific category
        const categoryKey = itemKey.replace('all_', '');
        const items = menuItems[categoryKey];
        items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            itemDiv.innerHTML = `
                <img src="${item.img_url}" alt="${item.name}">
                <h2>${item.name.toUpperCase()}</h2>
                <p>${item.description}</p>
                <p><strong>Price: $${item.price.toFixed(2)}</strong></p>
                <button>Order Now</button>
            `;
            menu.appendChild(itemDiv);
        });
    } else {
        // Display a single item
        let selectedItem = null;
        for (const [category, items] of Object.entries(menuItems)) {
            selectedItem = items.find(item => item.name.toLowerCase().replace(/\s+/g, '_').replace(/[()]/g, '') === itemKey);
            if (selectedItem) break;
        }

        if (selectedItem) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');
            itemDiv.innerHTML = `
                <img src="${selectedItem.img_url}" alt="${selectedItem.name}">
                <h2>${selectedItem.name.toUpperCase()}</h2>
                <p>${selectedItem.description}</p>
                <p><strong>Price: $${selectedItem.price.toFixed(2)}</strong></p>
                <button>Order Now</button>
            `;
            menu.appendChild(itemDiv);
        }
    }
}

// Event listener for category selection
document.getElementById('category-select').addEventListener('change', function() {
    const itemKey = this.value;
    if (itemKey) {
        displayDrinks(itemKey);
    }
});



