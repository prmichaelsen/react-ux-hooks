## react-ux-hooks

Hooks to measure DOM rects during resize, track viewport size, & disable iOS Safari auto-input zoom.

### API & Examples

Track component size on resize:

```tsx
// declaration
declare function useDimensions(deps: any[], trackWindowResize?: boolean): {
    ref: null;
    dimensions: null;
} | {
    ref: (node: any) => void;
    dimensions: DOMRect;
};

// usage
export const Component = () => {
  const { ref, dimensions } = useDimensions([], true);
  return (
    <div ref={ref} style={{width: '50%'}}>
      Component Width: {dimensions.width}px
    </div>
  );
}
```


Track viewport size:

```tsx
// declaration
export declare function useViewportSize(): {
    width: number;
    height: number;
};

// usage
export const Component = () => {
  const { width } = useViewportSize();
  return (
    <div>
      Viewport Width: {width}px
    </div>
  );
}
```

Disable auto-input zoom:

```tsx
// declaration
declare const useDisableAutoInputZoom: (disable: boolean) => void;

// usage
export const Component = () => {
  useDisableAutoInputZoom(false);
  return (
    <input style={{fontSize: '10px'}}/>
  );
}
```

## FAQ
### Why package these hooks together?

Why not?