function Button2(props) {
  return (
    <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 px-8 py-2 text-neutral-50">
      <a href={props.href}>
        <span className="relative z-10">{props.text}</span>
        <span className="absolute inset-0 overflow-hidden rounded-md">
          <span
            className="absolute left-0 aspect-square w-full origin-center 
        -translate-x-full rounded-full bg-[#554dfe] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"
          ></span>
        </span>
      </a>
    </button>
  );
}

export default Button2;
