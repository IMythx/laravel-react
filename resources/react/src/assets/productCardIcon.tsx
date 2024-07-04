const ProductCardIcon = () => {
  return (
    <svg viewBox="100 100 466 250" fill="none" width={100} height={60}>
      <path
        d="M40.333 48h9.334c.736 0 1.333-.597 1.333-1.333v-9.334c0-.736-.597-1.333-1.333-1.333h-9.334c-.736 0-1.333.597-1.333 1.333v9.334c0 .736.597 1.333 1.333 1.333zm0 0l7.334-7.333L51 44m-7.333-4.333a1 1 0 11-2 0 1 1 0 012 0z"
        stroke="var(--base-500)"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="scale-[4]"
      ></path>
      <rect
        x="20"
        y="61"
        width="41"
        height="2"
        rx="1"
        fill="var(--solid-900)"
        className="scale-[4]"
      ></rect>
      <rect
        x="20"
        y="65"
        width="13"
        height="2"
        rx="1"
        fill="var(--base-500)"
        className="scale-[4]"
      ></rect>
      <rect
        x="20"
        y="57"
        width="17"
        height="2"
        rx="1"
        fill="var(--base-400)"
        className="scale-[4]"
      ></rect>
    </svg>
  );
};

export default ProductCardIcon;
