export function animate(selector, animation_class) {
  // define callback for IntersectionObserver
  const callback = function (entries) {
    entries.forEach((entry) => {
      // is the element in the viewport?
      if (entry.isIntersecting) {
        // add the animation class:
        entry.target.classList.add(animation_class);
      }
      // delete else if the animation shouldn't be 
      // always shown when getting in view (just once)
      else {
        // otherwise remove the animation class
        entry.target.classList.remove(animation_class);
      }
    });
  };

  // get all the elements you want to show on scroll
  const targets = document.querySelectorAll(selector);

  // set up a new observer
  const observer = new IntersectionObserver(callback);

  // loop through each of the targets
  targets.forEach(function (target) {
    // hide the element
    target.classList.add("opacity-0");
    // add the element to the watcher
    observer.observe(target);
  });
}
