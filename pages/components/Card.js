function Card() {
    return (
        <div>
            <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
      <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <li class="relative">
          <div class="block overflow-hidden w-full group aspect-w-10 aspect-h-7">
            <img src="https://img.youtube.com/vi/i4MDCciXoi4/hqdefault.jpg" width="300" height="300" class="object-cover pointer-events-none group-hover:opacity-75"/>
            <button type="button" class="absolute inset-0">
              <span class="sr-only">View details for IMG</span>
            </button>
          </div>
        </li>
        </ul>
    </section>
        </div>
    )
}

export default Card;
