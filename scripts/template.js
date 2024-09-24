// Create Header Function
function Header(menu) {
	const header = document.createElement("header");
	header.classList.add('p-2', 'bg-white', 'shadow-md', 'z-50', 'sticky', 'top-0');

	// Header container
	const headerContainer = document.createElement("div");
	headerContainer.classList.add('flex', 'flex-row', 'justify-between', 'items-center');

	// Logo section
	const logoContainer = document.createElement("div");
	logoContainer.classList.add('flex', 'w-32', 'justify-between', 'items-center');

	const menuToggleBtn = document.createElement("button");
	menuToggleBtn.classList.add('fa', 'fa-bars', 'p-2', 'hover:bg-gray-200', 'rounded-lg');
	menuToggleBtn.id = "menuToggle";

	const logoWrapper = document.createElement("div");
	logoWrapper.classList.add('p-1');

	const logoImg = document.createElement("img");
	logoImg.classList.add('w-full');
	logoImg.src = "/YouTube-redesign/assets/YouTube_Logo_2017.png";
	logoImg.alt = "logo";

	logoWrapper.appendChild(logoImg);
	logoContainer.appendChild(menuToggleBtn);
	logoContainer.appendChild(logoWrapper);

	// User section
	const userContainer = document.createElement("div");
	userContainer.classList.add('flex', 'flex-row', 'justify-center', 'items-center', 'gap-1');

	const notificationBtn = document.createElement("span");
	notificationBtn.classList.add('fa', 'fa-bell', 'p-2', 'hover:bg-gray-200', 'rounded-lg');

	const messageBtn = document.createElement("span");
	messageBtn.classList.add('fa', 'fa-message', 'p-2', 'hover:bg-gray-200', 'rounded-lg');

	const notification = document.createElement('a');
	notification.setAttribute('href', '/YouTube-redesign/p/subscription.html?type=notifications');
	notification.appendChild(notificationBtn);

	const message = document.createElement('a');
	message.setAttribute('href', '/YouTube-redesign/p/chat.html');
	message.appendChild(messageBtn);

	userContainer.appendChild(notification);
	userContainer.appendChild(message);

	// Build Header
	headerContainer.appendChild(logoContainer);
	headerContainer.appendChild(userContainer);
	header.appendChild(headerContainer);

	// Add event listener for the menu toggle
	menuToggleBtn.addEventListener('click', () => {
		menu.classList.toggle('-translate-x-full');
	});

	return header;
}

// Create Menu Function
function Menu() {
	const menu = document.createElement("div");
	menu.classList.add('fixed', 'top-0', 'left-0', 'h-full', 'w-64', 'bg-white', 'shadow-lg', 'transform', '-translate-x-full', 'transition-transform', 'duration-300', 'ease-in-out', 'z-50');

	// Menu header
	const menuHeader = document.createElement("div");
	menuHeader.classList.add('p-4', 'bg-red-500', 'flex', 'justify-between', 'items-center');

	const menuTitle = document.createElement("h2");
	menuTitle.classList.add('text-lg', 'font-bold', 'text-white');
	menuTitle.textContent = "YouTube";

	const menuCloseBtn = document.createElement("button");
	menuCloseBtn.classList.add('fa', 'fa-times', 'p-2', 'text-white', 'hover:bg-red-700', 'rounded-lg');
	menuCloseBtn.id = "menuClose";

	menuHeader.appendChild(menuTitle);
	menuHeader.appendChild(menuCloseBtn);
	menu.appendChild(menuHeader);

	// Menu list
	const menuList = document.createElement("ul");
	menuList.classList.add('p-2', 'space-y-4');

	const menuItems = [
		{ text: 'Home', icon: 'fa-home', href: '/YouTube-redesign/' },
		{ text: 'Account', icon: 'fa-user', href: '/YouTube-redesign/p/account.html' },
		{ text: 'General', icon: 'fa-cog', href: '/YouTube-redesign/' },
		{ text: 'History & privacy', icon: 'fa-clock-rotate-left', href: '/YouTube-redesign/' },
		{ text: 'Your data in YouTube', icon: 'fa-user', href: '/YouTube-redesign/' },
		{ text: 'Notifications', icon: 'fa-bell', href: '/YouTube-redesign/' },
		{ text: 'Connected apps', icon: 'fa-paperclip', href: '/YouTube-redesign/' },
		{ text: 'Billing & payments', icon: 'fa-dollar', href: '/YouTube-redesign/' },
		{ text: 'Purchases and memberships', icon: 'fa-cart-shopping', href: '/YouTube-redesign/' },
		{ text: 'YouTube, a Google company', icon: 'fa-com', href: '/YouTube-redesign/' }
    ];

	menuItems.forEach(item => {
		const listItem = document.createElement("li");

		const link = document.createElement("a");
		link.classList.add('block', 'p-1', 'text-gray-700', 'hover:bg-gray-100', 'rounded', 'flex', 'gap-2', 'items-center');
		link.href = item.href;
		link.textContent = item.text;

		const iconSpan = document.createElement("i");
		iconSpan.classList.add('fas', item.icon);

		link.prepend(iconSpan);
		listItem.appendChild(link);
		menuList.appendChild(listItem);
	});

	menu.appendChild(menuList);

	// Add event listener for the menu close
	menuCloseBtn.addEventListener('click', () => {
		menu.classList.add('-translate-x-full');
	});

	return menu;
}

// Create BottomNav function
function BottomNav() {
	const bottomNav = document.createElement("div");
	bottomNav.classList.add('fixed', 'bottom-0', 'w-full', 'bg-white', 'p-2', 'shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),_0_-2px_4px_-1px_rgba(0,0,0,0.06)]');

	// Flex wrapper
	const bottomNavWrapper = document.createElement("div");
	bottomNavWrapper.classList.add('flex', 'justify-around', 'items-center');

	const navItems = [
		{ icon: 'fa-home', label: 'Home', href: '/YouTube-redesign/' },
		{ icon: 'fa-video', label: 'Shorts', href: '/YouTube-redesign/p/shorts.html' },
		{ icon: 'fa-plus-circle', label: 'upload', href: '/YouTube-redesign/p/upload.html' },
		{ icon: 'fa-user-plus', label: 'subscription', href: '/YouTube-redesign/p/subscription.html' },
		{ icon: 'fa-circle-user', label: 'you', href: '/YouTube-redesign/p/account.html' },
    ];

	navItems.forEach(item => {
		const itemSpan = document.createElement("span");
		itemSpan.classList.add('fa', item.icon);

		const labelSpan = document.createElement("span");
		labelSpan.innerHTML = item.label;
		labelSpan.classList.add('text-xs', 'leading-none');

		const itemLink = document.createElement("a");
		itemLink.classList.add('flex', 'flex-col', 'items-center', 'justify-center', 'gap-1');
		itemLink.href = item.href;

		itemLink.appendChild(itemSpan);
		itemLink.appendChild(labelSpan);
		bottomNavWrapper.appendChild(itemLink);
	});

	bottomNav.appendChild(bottomNavWrapper);

	return bottomNav;
}

function customCss() {
	const styleTag = document.createElement("style");
	styleTag.innerHTML = `
		* {
			scrollbar-width: none!important;
			-ms-overflow-style: none!important;
		}
		
		*::-webkit-scrollbar {
			display: none!important;
		}
	`;

	document.querySelector("head").appendChild(styleTag);
}

export const CustomStyle = customCss();

// Export Header and Menu separately
export { Header, Menu, BottomNav };