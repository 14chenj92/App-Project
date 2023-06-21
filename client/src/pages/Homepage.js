import React from 'react';
import ImageSlider from '../components/ImageSlider';
import HomeCard from '../components/Card';
import SearchFilter from '../components/SearchFilter';

import "../styles/Homepage.css";
import "../styles/Card.css";
import Workout from "../images/workout.jpg";
import Workout2 from "../images/workout2.jpg";
import Workout3 from "../images/workout3.avif";
import Workout4 from "../images/workout4.png";
import Avatar from "../images/avatar.webp";

const Homepage = () => { 
    const images = [
      Workout,
      Workout2,
      Workout3,
      Workout4,
    ];
  
    return (
      <>
      <div className="searchFilter">
        <SearchFilter 
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAABx0lEQVR4nO2VTytEURjGf1EzCyVhQYaVkYXYys5GNMUHEF+CBWWjWWFrYYNCU5omCyPiGxCLSWyk2dj5O0NNIzM69ajbbe41rpkrNU+9zZ33PO/7POeec+6BGv4pQkAcyCgSQNhP8QegaAuT6/DDQFyC+xI0kVRu1w8DGYlZZ9up3LMfBl4kFvorAwmJJWXCxIFyZnmqjh7g3mETduMTOrThXhRxP8X/FA3APHAJ5CyvP6fcnDhVQStwVmLt7XEKtFTDwI4EroBhIGgZCyp3Lc52pcX7gALwajv/dnSKU1BNxbCmma0CARdeQJyiaiqCJsuseoFpF+6UbsUP4A1oroSBWc3oUP/NJnPCuX6PVDPj9SMzAUQlmlWzCDCoZycUxYnoOaseUfX89rpudzhaKaAOiJVhICZuyqGX0XDFhS6aRWBcrk3RApAvw0Be3HbVjqtXUr1/hCHdfl/CJtIu/LSFl1et6eEJU9r5ptk7sAeM6fXWAyPAFvAInABdGhu1mTY9Jr0YuFWDZcu69QMrwF2JtT221bcBSxq78WLgUcVG1A1h8cy5t2NAY6bXj7FZxsVTbqx7MdAIbABPvxB+krjpVUMNlMIn5oa8zzUnk6MAAAAASUVORK5CYII="
        activity="Yoga"
        />
        <SearchFilter
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC3klEQVR4nKWW2UvVURDHP/eWvbTYeon6B3oyqWyhIiKVnnpoQWmFyCgKwofqrUWsLFuIIBIfW60H66WyaCFBkEykKCgIWh6CFq0gyrJrDHyPHE7n5y9p4HLPmTkzc2bmO3N+kE4jgHLgGNAEtOpn66NAGVDAf9BYoA74DPSn/HqAg0DhUJ2sBj55hh4C+4Ez2l8ElgN7JXPnPgIV/+IgCxzyFG8A0yXLAB2KcFygNwu4LZ08cEDnE8k5+QFsCGTlku1L0J0WpLk2ycka3cYO1Ufk54BfQC4im6G0fQH2AD9lqzJWeFeT70BnIB+m296MOMkBb4BuoEi8zbL1IQRInQRtQAPwG5jgyUsk3xm5wH2gF1js8TNezQyNA33icjsPWKe19YejLeItCBxtEr86Eulsybpdn7kiP9OBIu13eEonxJsYIPQV8FSRxeiR9EpRd9vmuISTtD/lKTQrap/KdK6KdBQfsc1lba4AI5Vfy/kFT+EO8DpiJJ+AQmTL2b6E5pbD/jtgm/6tWR21K0U+XQdeRhyM9mw4uw98R4aOF57wLbAdmA88Bp4EBtt0AZsSi2S8We3RL1uHfUdN2iwTOtar8cLB2acILLIuTY++4Iw5uapZWaC5N5C6em1saDqy5r0FLBT6nqserZp3HZoENilOC/4W+agg6hofDA497V4R8wHqXENP8XjV4lm/JFGXzixBIfaIUSzM23qjp7BWvKUeLwd8A+6pp0KaGTYsAoIxW4DzGopTPaViyXcHxnaJfzLyLLTEpnihBqAramOgNFxym2s+ZYGz0rnmXa5KvPfAmDDUCu+ZWBlJRaOG7eSAn1HRTferhnKv9qtIoFo5MjRtDdJRmvLwzVUELivmPJGyeoZdZHeBOZGnfHygVxI85TVpT7mjyqBmnQJMg9eAK2TQnLtzFlEs7YOSAcSMGzzTPrfsjKX9r8IPhawHrD7W3RaJ+4C0tfGsGQ2Vg9If7BUJqtkS/iIAAAAASUVORK5CYII="
        activity="Basketball"
        />
        <SearchFilter
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADe0lEQVR4nO2YbWiWVRjHf0sbvmyFLdJptCwV8kMYOiMEh26LiBiIRkEyyKBIC+uDoIgiGIJCgig60U8aaeiHtvlJQRHfMMRM17Boq1m+opYvUyduj1zxv+Hi5n5e5dENzh8O955zn+vc1/9cr2cQEBAQEBAQEBAwUFAKzAP2A3eAM8D7DDACnwJ/AanY6AM+YAAQ+CxGwKwwGxgBLNHcVeAF+iGeBhqBPxyBXzU3KLa2Ve+/p58TaEtDIEIVcEtrG+gHLtSYJwGPryXTBZTzhFADnHMETgNzgKcS1o4BvgX+BD5y80b2uOTXZ/ney8Bm4G/gvp5Nmi8YM4AeKfCLgrgkYd0EYKtba+MGMNqteV2K9QJvpfne28DNhMyX0nx9oUROaJMVaQhMBnZJOVv3ANgJ7NNv+9vjG+eW5q4eYx2JZmAKMFzPFnc4FnN547Y2eDY2PxPY607rntxhnN6/5GTtlCMMAc5qfnlsT5OPSCQhIrOpECI/SXgx8AwwTRbw5l4DVCbILtKa30UgwnQVSSP/mpu3WEjJykmodgkjb7yb4KvmPleApSp6mVJ1W5rTb9L8YZc0ovgqS7NfubM+hZI5Llc5AnwBDMsiY+9XOeXi7mKuel7v5msuyozZLGJdxGNBg2tZeuX7SZab5QL4RWel5jT7Rh3CxiLr/3/WiQLSxkngzSwyu53yVieirNUiC5Tp2epIWyIpCkoVL9362H/AlzlW/ErXLVjNqpeySXXE5uuKRaLWpVMb3wGj8tzjc8lu1+8qpdguxViX3KkolrCKvcMRaNeJFoLntcflR1XqEHAKmJjD2sHAQmf+btWYeJXOBxXOJR8JR7XRbSlp+T8J1h/97KzwY6HtgvAq8Amwx2W4XuCuUrNd0H7QQdXoEDNiqEt9kZt86AhVqCHs0/tO4L0Cla9WJ9CZJqBTGca/upy9ky2R1KrDjQT/AdbpmhpV1JUinitKdZpr1dp7xa4B2xTs1boCDNWwGHwD+BjYAPwWk7U6tSCTLsZ0ruux/DgIfCXC1raPVA9lyj4HvAJM1WVrlZrKKCVH44IyUF0urhLDeHXh/kAu6dKWMUZNqS3AxQLcIBp9svJqxVjSZSxfDNJ/ZXy8HstF0O4hk+QCFisHgA7gui5KPXK/DlnS/HiZWhBLrcVCidqhdjWfAQEBAQEBAQEBAWTEQ3M6PoKyY3FqAAAAAElFTkSuQmCC"
        activity="Swimming"
        />
        <SearchFilter
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAENUlEQVR4nO2YW4iVVRTHf8bkrXHogiEFajEIGaUyiuAltWl60J4kBKGLDeSDVuKbWvYQqKBQL+KMDqiQUhZBNWgPmiKFUg+CWZMQhPeaGsVxvORlPLHgv2Wdz+/c8PvOOYPnD5tzvrXW3mvvvfa67A011FDDQMFYYDNwGrih33bRBwxeBi4BmZhm9BYGAJ5yi/gGmAw8pN9vRe8FxlDl2OwWEYewmDaqHKc10aYc/Cnin6TKcV0Trc/BHyH+f1QQDwLvAkeBq8AfwIfAECdzqkiLnKBCMOc8kiMS/QAMlVy7aOYLcegUfxMVwGzgH03AFvMSMEz0v0TfKtmxLmp1ygL1+u10UWt0uRdhR+mmJrAHeDjCfw64Iv4borVospmY1quNKBuGapdN+W1gHfBADtlWyV0Gxruj2KbodF2/m8ptiSeAw5rcNeD1Ivpsl/yvwHCqANOAc5rUqTzRJwrL3r9F/KVieNvlge+BxwrImwPvBubo+1nnL29SISzRBG4BnwB1BeTnySesT487+4ti/KVsmAn0K9suKNJyIZKF8PuTS4zbckSsjGtnFUAGJ7mQ7zT4sgJyg4CP3GTs/6PAn/re6PwlBItCbW2SC7moQR8pUJ6EcHxTVgloUnQz3sISgkpGlkl8Iba7cRjsrHZZ/hHFYndxmlqEzumSP0OC2KNBl+fgP++OwteRItEjWKyUtibJhcyQs9vd+jX5QhTvKRiEemtcjIxl/hWuAs7kaWe0iESd3bDUlSN2jJ6MkWlS6W5yfVp0VWKBcoJN9EKOidrFaKfb2Y48NVhFMcrdq619BTyeo1AMFa4dp7KiRTt4XNHH2u/AFqA5IvuWm2g3MD9mvKni/5uAvqJgjnmwCAc8ADS6flZ27HP8T4EGx29QkOhNSF9evKDzbh3/BlYBE5R9rU0E3hfPZM4rigVYBHvHFYPrHW+WaIcT1BeLcW7Qz/O8bAQn3uUGj+7UBvHssSEa6TpS0JeFg27QuNwQhcl8oT77I7xw337V0doiNVqS+rIcLZg3387E7VS3+nqHDIXhM472o2gvpqDvDjrEtDNaKj5QX3v+RGe7X5euOreboUYbmbC+LBwX0+qkUjFRfS1U+ke1X5zMGGeBpPVloU/MUswcUO/KEH/r+8zJvCLa3hT0ZeFeBm5Q395IxLIjELBStI9T0JeFJEzdpe/d+vbZfYdorSnoy8IWMS35lIrV6mvvuOjB+VjklfGoZKakoC8Lzc4ZLcSVYubwzhueea7qOzxUD1EE61dES1rfXTgggV0lJKgv1cdqrICfRVupiYdweSglfXehUek/oww6osDOhEHtTvK0482NKfj6RU9DXyxmuMG7tZuTFF3q9X+1M2+PHgaimKu3qz5ZaF7K+mLRqFqmUFm9r5idqQZ9zSoDurSzfXp4bs/naPeA5jLrq6GG+wb/AyPY6JR2GYa0AAAAAElFTkSuQmCC"
        activity="Cycling"
        />
        </div>
      <div className="homeCard">
        <HomeCard
        picture={Avatar}
        name="Jerry Liu"
        title="Good Person"
        />
        <HomeCard
        picture={Avatar}
        name="Kyle Chen"
        title="Weeb"
        />      
        </div>
        <ImageSlider images={images}/>
      </>
    );
  };
  
  export default Homepage;
  
  
  
  
  