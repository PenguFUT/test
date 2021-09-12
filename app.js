var moneySound = new Audio();
moneySound.src = "data:audio/mpeg;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAABPAAAq+wACBwsPDxMdISUlKS0xNTU5PUNLS05XWlpeYmdqam9zd3t7f4KEh4eJjI6OkZOWmJibnaCioqWnqqysr7K0tLe5vL6+wcPGyMjLzdDS0tXX2trc3+Hk5Obp6+7u8PP1+Pj6/f8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAi4TQABzAAAKvvxrKYgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAJ8AAAf4AAAAgAAA0gAAABA7CNKbQEACgAADSCgAAEAG93+/4T0v0RET5fe4SueXl3dK4T//gUBQAoaHj1RqVlV2VgdzhR8WmAAAAAA/kYfQSinFt8xpZ4v2gv320edU7955z/+1BkEwADBSZQ/msEggAADSDAAAANGJlr+aeSAAAANIMAAABWVQPELXZe+j8OqySafyXyyAJY58Q3WsQ/3B97l6WV4pNTtW0/8jwfzH8La98PqXG6uNU4wcvg5AsQdNdM67yhSbSyPJ9+AAAAAADyAQIOsJAAo/gMWJigxdoKPGDGGrJjxBJNVSC0MmQQk0kKScBJJhNLXQxVFiYCSI5HphXRmYwLo9kMJgVawupYKTQM0emFTFjxn0BEs6znnsbisf/pQ6n86q+8uadlZHZg//tAZAQB8hMh2/9gwAoAAA0g4AABB7yNb+zgwWAAADSAAAAEAAm64h8UmYgJT+TjZqxZg8FO5CGXPtT0VAkmwYOjE6AF03z9TZSatz/USREoiGJ3SREdZBAObZE46FmV2w7uhpO8nVT6MC3tZQSAAAFDYsre0uxNOxOEBqSwuUiCsaNy+0+dowmv3vd8br5+5SCQIoYYemXaZlED6t3867h2eXfgAApCBZnsCpy/ZlAJAWcsRhr/+zBkDIHyMiLe+wZL2gAADSAAAAEH5IN77LDIqAAANIAAAATcHbduWUkQinApBAJC9tRNR722X7NByniFUmammkYQlMnDbdo0A2u2ixtGujk/r2rl3WLNcUkmkmLbB05ZkKAozrEV474KDN5wvlc/41kx6WtcHwjcAqj5cuE/qpokarZo4yiOJsVd4QSgLgTVz8y6uYhZbeAAFCD/+zBkBYHx7yPf+w8w2AAADSAAAAEIPI997JnvoAAANIAAAAR2ApVYwJckRXE7KtUEHRb9HOaQYoq5UmQqo3H3eY20xhDOrwafbx3iECbeWmbLi9uxApX7149U0s3JhsRHMwjBokDGAoVa6yWwszgmRvtBEvwd2KqoagRkiClTzNFM/fv8m//2O3eXqTJ/6eAMORIxSGkmROkAAcD/+5BkAY/1TCbNG3rcSAAADSAAAAEXKJ04De+J4AAANIAAAAQAOoDJC01woKHs3MCMBATl38z03CpaYQeGKgxjpGZ8YmDmIGBjGxIyAAJkQQsBmASYeGmSQAy0NOMMGtNGXGDZpRKpjQFXdMSlNouFTR1caRIPFHZjmxBmPKGJ1CjwTEGaMCT0OPHJRi2MEKA6sEAgUXMfNPONNw4NGWDTBw0kDNKZDG0k3ulNdbzokUxRBMcCiIwNAJBlLMflTCCcmP16Poz+nqY5oarUljAQkxI6NmODkFoxNEER4AhdDkYRGmNlhs4SCT0zE9MrRjMDsAghlCUY0Zj0WaSDGBwZmCCWdNHEzHgMwYhMrCRJKEQuZyHGKHxwDgYsDGQix4bKdadGrDxphIYseGSGh2UYb5bGiMZmprG9jMZFCZlEbmhEEZyLhjU5kB2NjQY4GmzFYaMxDEwQLDCYoNYJA5RaDGLgNerM4tbBlAGIiiZFWZq/dmuTmZqVxh4HNHgdoDK6O92p/Nv4mVRVGqAADM5BKJzO2AjjNFAmPp0LDZNRd+n/+zBkDoHyTCPg+wZ72AAADSAAAAEImI2L7DzHIAAANIAAAATd63D8uB8YzD/u6s8nbxJNHbsCTCQgahZttBwWurP2VsfNt3M4lbCuQ84Dym+qzIqpdoymi+OkOgkB46ULkGkICkJGA+Qw+g2ChFgFPE+LkmEPoMOSQUYRSB0kjz0Dzqg44ukt/7Zj/NKe4nUyaZPbKxXvqqdkZkr/+zBkAwHx5SDh8wkq6gAADSAAAAEH8IV5zBmPSAAANIAAAAQcADgAgEDoihEIwopCwWCwWlYK1c0sCxEL4YYWMrNIEO3TM3xUVZWakilfhhf5zTIogsoTAzy/xEapqYpi5imXIJkqLGIYRVNADKALC/DvXKkagWIU8AGq2adi/tpWFQZV53VuXmHmloxFJM+p6xLubcKoswKKKv//+0BkAIHyAyFi+wNsSgAADSAAAAEH4IOF7CVr6AAANIAAAATc66vHb/TgAACCGRm9J0WCltXRSgLbKVUmpxdyqOAcrlurTxRfArkcAxyAhWHWwAFRktOPRIwZNkVs9ZwVmrH/u511UxV+kMwRqgNGMgYCDyoXKbumwB3ngAyZF04BUw9oiYlZIWaSpGE/T+hp9sQ123lTYjU4r+2rqXgoJb1VzPy6i2VrMUAACsgKcJbHYjDYBP/7MGQJgfIMIN37DGr6AAANIAAAAQfAhXPsJavoAAA0gAAABL7hcjAV2urAo7jA6HscUv21bXUIxcg+TsMspN4Pr3Z37dmjNrZnN701qNw+GnFqu82pdlT2hiVQdEG8GmoZmESJAkl/UwWxQEQE4xJEIUkfc1jQG/70PmiMuTkgWhVYvONV6dsdxX/z4aCX4bWrq6mIiF3gQAAKUP/7MGQFgfIoIVv7D2p4AAANIAAAAQe8hXHsMavAAAA0gAAABLENr3aTJDoF8UuF3vmgScotjYGlniKutJI2zDEKvutkybTk2xnka0+3sKtIaSSCqDJr1NprNgNwpMuvvd26lYmwg1lpKw5q2IgKRXWhLeZcS8HIDA/OCi2vK89etmQGFlMw2tQPr+87+Q7T/y/X3ey//rNxUG5alP/7QGQAAfIaINv7DGr6AAANIAAAAQgshW/spavIAAA0gAAABLy6qpqkj2CgAAbwzIOMVhUBBRmJtCblIbTxqyGNDxJqeG5+xS6QeQ8aakhBi0qutdxrKt93N1o5/t/fvas3BgFs5EI3v66poOLqCE6F6D9GB15kxlUc1REA9VnjVZkBCATk6arYBUan1IBw2qI3qC/uPjGarY0aJyyLF9j0qVXb9w0GTqXP3duokn+xQAAH4F7w//tAZAaB8fYg3PsJavgAAA0gAAABCNSJce1h4KgAADSAAAAEsUvQWAioyYDV2vvY1WDgpmnJNTJi0P7RA1aOcyBpWM4whOaSZFMe3U43lRa/nw7EZ6v3dyZmFm6xgvKZxO+4ZJSkLgLlkxiZoYpFhLv3qTYHGR6+9sL5nIQkIFbvZcU8eJSSC5Ofp7fNt7q/mpSudXhNSHiIw5oeCr/M2XZRSSmAAAo9Z8YtQHFfgIJHS2uCRC3/+zBkDIHyAiJb+yZbagAADSAAAAEIEI997CVtYAAANIAAAARoafRnn0xMctI0WOiJNNi3ZcW8HjoqyUL1RSd2Iu8pT99LwLSNyeb/+36uIWN/MT0YORJEgl6wINjznJXxpyIFhDLH6i44TOXu/AUiZXuU6UkoJGKYbkpJRNNzGoPY987eKewU2/OSKgABwACaxTSSpMSTQusnbh7/+2BkCAH1gybNm3rh+AAADSAAAAEH4I977LEJwAAANIAAAARCHFYoGAFnAFWYlWFGxjhZijCqhCcBgYEMgdINWVCg8ygkzg80CIylYQhTMlTOAC4IcBHt5rlQK2HFbjwAo6gYggEOGDSGMC0xOUjSh4MAgswaATYw2KFmMEUxUPDDIOMnFwwEUjXAaM0mEw4ezWIyMIFc2KXzGAeMinMCigz6yTG4UMh502mVDBRZGgiYXQRu5sGFGcEQRPtw0PErLumzP5OZM1CxawyclAkULDxDdSyQQFTKCvcBUxDVYQHyXCcQvy/tDYvKqRQu7rT0TKnWa4uq11xqq//RV4y+xWgzVQD/+3BkAIH1PibNm3rkuAAADSAAAAEHwI937LDJYAAANIAAAAQBwADVAgFHJkxWYkSmTHRMjGTDgEIC2Rb8ww4MiIWhGSCwIGSAzBIIBkIFMJjgaKhRhBaZMSCMdMKFDPa02oxVNn5hRwjEmUXGOdgo4ZMQbMcbE4ZqCbYUZxOAQCgZiTYIAo5AVAZdKZIQQCy5RgUSeqsxnEAOUmKBKYEKJkAviACmXRCCU4Iy8CjOZNnwKABMHggQGQ0YZVKhl0OAoPp8OAzNdNzea79vHp1KJYaJqGCgwoElEw6CYvRfdpeRqNgbiO+bHkv971MmA3Ygod4Q/MSVhdoeL+PD1LM37YS7aT+uKIr17d/Z2INpZYAACPoXCdiIkIBSsZWND5gbKliRVz4nDAUJB0TmEjfsWNMIKJoVtSLP//sgZBgB8iIjXnsIS2gAAA0gAAABCCSNd80xCOAAADSAAAAEOKFCd09+e6UtZyzCrppASTs0vEW/7mmhnIn9JuJeA4Y8uYgQGC6vlcMTXCB83CQrHDjJTCE/ND8/lVtPUuU5Yg97gs8+FvHCxCO8kWPFC2DBRBI8gcr9vKaJeG2/4P/7gGQEAPLSI+F7DHoIAAANIAAAARismzZu74XgAAA0gAAABAADgjphGAZiZ1oboAkI3NWgAxOb6kNNRmg/aTgVbIfjGzJXacX504yubGhdYgritSZL7KtCLNquZKvjgZ2+tVWsKYn5hCfsQjhdFUnV2dhMilnAAHAAMTg7MNhSMF0PMJhTOPDXMtjtOVXzJKozNNM0cj95A59+MUBT3yMzEoDGw8cINaDQQdm5DRjy6TNBnLcFtAwooP/bjFAEwfmJYAEsxzLQYVSpiKdmIkwChOY+BBmsHmEF+cPPxm1JGuIaa8QBkkQrdM+og0oLzHpSMGlAwYFDKZ0NUhU2mrAKTzXRRM0LE04fBAGDX6CBIcNBF426aDNiBNppgyVjTDSpMInM5SvjLpQM1Fg5Y5jBYObrI2Ctkgay+K36mYVEUTSboAAB7IWGAIg1yJTgUYFBWWnQ66j7ijRsEtJXtVebJNuTVfGZZGc1YxQu//sgZBiB8j4j3fspevgAAA0gAAABCBiNg+wZj2AAADSAAAAEUlUNSWXZUlOHtwiQYksckLnp7mCl5qf27x4h2ey2DaRAs4gKpSKimpf+ILVXO7cQZ0/s1KpPTiC2LqSBxNGqPDVcOc+Z412La2S+d7o89DLkNgUPvW6uxe68iapyff/7QGQDAfIKI1/7BkPYAAANIAAAAQiMjX3ssEvgAAA0gAAABPSgAA1IS6N0RQhlEBCjARKbAJG7D8wawVyn2qVhp8K/50FkSKt22KU+mEUj1TkRLX4U/LjLdSQHVOtD+67iJl1m/Sg6gRgAGUQBDQiGK70844xGBnaBmPi8vLC6SFlGIHHS2LC0UiwimkwMe3VYurR3nHIHWP5v5kIUwewGNjQi/tynmYSPrIAADkcAKLDn/NYB//swZAkB8lkh3/sPSXoAAA0gAAABB5iBfewwqagAADSAAAAEIoJIWYciUM5CTkQ0saOVK4DLG6hil3M1qFDkMOo9WGJESyKh0WAajzX1mUebvULLXf3+mmCcR9+K5t970kHOkcHkzhmWhGMECGqmPKUjy5gXno5MEaWkwtHV05npOA+YVGTW1pjJ89lGmrKOJ8peY4dCgKuFN+zO//tAZAEB8hAj3vsJQlgAAA0gAAABCESPdeykyyAAADSAAAAE+ZiVj/zgAAF8X0CxsAQaEgESnzTPVMXACDIlBRMmAaolja1qBYDHq3kOpzFmsLXtdo8nwaw8tl/eJoBzeMDsqs/cuYdwnbTiVEyYXg0EQDIcnhKoi6aCQvcAoWQLNkQMqzZ/644IROgF5SIfyimmTuPKFqRJOkt22NosnbikWlJEjiru3OmZZonzYAAK4QqEXID/+zBkB4HyECLc+09CWAAADSAAAAEHZIFz7Lyl6AAANIAAAAQlxCDXs/SFjXi+xPr1NGCj4L37f0hvI6pJPGY7yXfSUTExmjBm8mwo65qYc5TA2gPmewzcv8mYca+iweiu0LmtKHQx4IAnJ/IUC2d7enmlWUdsdqNv/XjuVrWzTBOofISKFG1s/J0yqxEFmCN6UNW/7Kh3c0cswAD/+0BkBIHyNiPZ+zhguAAADSAAAAEIaI9x7WGA4AAANIAAAAQI7FVwnk38xJwPmmEqonU/TR6SxbHQ7K2sGStT1tVixi16dVLF13l+69r+p5o7RP9LWZir03X6HIz995o5j7e/bmoGt/cLgFiCOhlMUHCKg5Dsr9ZoZFE8uSOLsXmvH0zKUljsrMytLfQ3yuWpY+pZu61uj7Vu2817n7vCg22lJa++usmHdGfaoAAKTWIA1UqhEv/7MGQIgfHyItr7LELIAAANIAAAAQigj2ntDfSgAAA0gAAABAa3Fup8J9NkZjSPFc0QW4D19P7P4JAZL19fif3OFVk9VF+aqOuP3VCacCk4MfdzampgZrm4S0S/BitHAwwJvVXCIC0GGX4dbF+dyKhlU5ZsyzmsoCa5QYT8agJkVimnljlqiTnSDbT96oKkuGYzv4cSPpWd/9uZtP/7QGQCgfIeI1r7D1pYAAANIAAAAQfojWnsvQlgAAA0gAAABIszoAAK1OAaoAKIkMiOECLbIXMFRo/2FsRMOCkQZ9Ir/P6vGY5d/d7VVj9TdzNed4swOMPvdMv/qBTMmaxqeqfyphYKY4oNkkBAWM6ZRyGIsMvWH1eHQdHZkVDbm0kh1pBvt6JEw46QeKKVX7t3vlnGJLmUPUcd8/6hK9Zg967Mt4hUX/7AAAnIksdwnARCYQoH//swZAoB8jgi23sJYvoAAA0gAAABCECNZ+wxaWAAADSAAAAEjMmLhtVsPaoQAyYaAg4fpbZaGBfdmk3cCVEqhJkSrpoY5bqa6yJutvrpw4dxk0ZUeQvniuuZh3KVLeRVecapETUUw3ZkpuqZp4T6lLI6LSuhuOrUk14TiQtWti2Yi5iabTr2tRumzqGq7mSa0zNwqGVuUJxIzN2///tAZAGB8g0j2vssQjgAAA0gAAABB7iNVew8xqAAADSAAAAEmZN9/eAAAWqIERE2iYYIwYQ3g6Asdl4PjqVyAXU+qEbjK/8QwYsokxoG6GD4pBW9IG2sm+sdvb8kAUe0HOfURX10LBC7UwuQIUoqAAnJZelFlP0OElzG/P1CXxoBReCTvnIkUqqiRJJ+25RxK5Y4l205Kqb/+Zw6CVUSJUr/+gABV+fZYZei9+pQGPlqTEFNRTP/+xBkCo/weiPKGAEdOgAADSAAAAEAAAH+AAAAIAAANIAAAAQuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQkj/AAAH+AAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZEaP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBkaI/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGSKj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZKyP8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBkzo/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGTwj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqTEFNRTMuOTguMqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy45OC4yqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqkxBTUUzLjk4LjKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr/+xBk/4/wAABpAAAACAAADSAAAAEAAAGkAAAAIAAANIAAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGT/j/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//sQZP+P8AAAaQAAAAgAAA0gAAABAAABpAAAACAAADSAAAAEqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpBUEVUQUdFWNAHAACjAAAABAAAAAAAAKAAAAAAAAAAABcAAAAAAAAAVGl0bGUAQ2FzaCBSZWdpc3RlciBDaGEgQ2hpbmcXAAAAAAAAAEFydGlzdABDYXNoIFJlZ2lzdGVyIENoYSBDaGluZxcAAAAAAAAAQWxidW0AQ2FzaCBSZWdpc3RlciBDaGEgQ2hpbmcFAAAAAAAAAEdlbnJlAEJsdWVzQVBFVEFHRVjQBwAAowAAAAQAAAAAAACAAAAAAAAAAABUQUdDYXNoIFJlZ2lzdGVyIENoYSBDaGluZwAAAAAAAABDYXNoIFJlZ2lzdGVyIENoYSBDaGluZwAAAAAAAABDYXNoIFJlZ2lzdGVyIENoYSBDaGluZwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=="

var elementExists = document.getElementById("114411");
if (elementExists == null) {
throw new Error('')
}
 
$(document.head).append(`
  <style>
   
 
  .ut-pinned-list-container.ut-content-container {
    width: 53%;
    float: left;
    display:inline-block;
  }
 
  #tm-ui-zone {
    color: #ffffff;
    background: #000000;
    height: 800px;
    font-size: 1.3em;
    padding: 0.2em
  }
 
  .SearchWrapper button {
    padding: 5px;
    margin: 5px;
  }
 
  #tm-ui-zone input {
    font-size: .6em;
  }
  #tm-rpm {
    width:2em;
  }
  #tm-req-countdown {
    width:3em;
  }
  #tm-maxbid {
    width:8em;
  }
 
  #progressTransferMarket {
    width: 98%;
    height: 70%;
    color: #ffffff;
    background:#000000;
    font-size: .8em;
  }
 
  #unassigned-zone button {
    background: #000000;
    margin-right: 1em;
    padding: .2em;
    font-size: .8em;
  }
 
  .ut-market-search-filters-view {
    display: inline;
  }
 
 
  #ut-search-wrapper {
    display: inline-block;
  }
          


         .btn-grad-start {background-image: linear-gradient(to right, #ffa243 0%,  #ffa243 51%, #ff3400  100%)}
         .btn-grad-start {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad-start:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         .btn-grad-stop {background-image: linear-gradient(to right, #ffa243 0%,  #ffa243 51%, #ff3400  100%)}
         .btn-grad-stop {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad-stop:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         
         .btn-grad-cleartl {background-image: linear-gradient(to right, #ffa243 0%,  #ffa243 51%, #ff3400  100%)}
         .btn-grad-cleartl {
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
          }

          .btn-grad-cleartl:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
   
 textarea {
  resize: none;
}           
.switch {
      display: inline-block;
      width: 60px;
      height: 34px;
      position: relative;
    }

.toggle-thumb {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #475569;
      border-radius: 40px;
      cursor: pointer;
	  overflow: hidden;
    }
 .toggle-thumb:before {
      content: "";
      height: 26px;
      width: 26px;
      position: absolute;
      left: 4px;
      bottom: 4px;
      border-radius: 50%;
      background-color: #00000000;
      transition: .4s all ease;
    }
.checkbox {
      opacity: 0;
      width: 0;
      height: 0;
    }
.checkbox:checked + .toggle-thumb:before {
      transform: translateX(26px);
    }

svg:nth-child(1) {
  position: relative;
  left: -26px;    
}
svg {
  transition: .4s all ease;
}
.checkbox:checked + .toggle-thumb > svg {
  transform: translateX(26px);
}
.range {
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  left: 50%;
  top: -0.75%;
  width: 200px;
  margin-top: 10px;
  transform: translate(-50%, -50%);
}

input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  background: rgba(59,173,227,1);
  background: -moz-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(59,173,227,1)), color-stop(25%, rgba(87,111,230,1)), color-stop(51%, rgba(152,68,183,1)), color-stop(100%, rgba(255,53,127,1)));
  background: -webkit-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -o-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: linear-gradient(to right, #ffd043 0%,  #ff0000 51%, #ff3400  100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f00900 ', endColorstr='#ffff1a ', GradientType=1 );
  height: 5px;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-moz-range-track {
  -moz-appearance: none;
  background: rgba(59,173,227,1);
  background: -moz-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(59,173,227,1)), color-stop(25%, rgba(87,111,230,1)), color-stop(51%, rgba(152,68,183,1)), color-stop(100%, rgba(255,53,127,1)));
  background: -webkit-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -o-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  background: linear-gradient(to right, #ffd043 0%,  #ff0000 51%, #ff3400  100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f00900 ', endColorstr='#ffff1a ', GradientType=1 );
  height: 2px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  max-width: 80px;
  position: relative;
  bottom: 11px;
  background-color: #1d1c25;
  cursor: -webkit-grab;

  -webkit-transition: border 1000ms ease;
  transition: border 1000ms ease;
}

input[type=range]::-moz-range-thumb {
  -moz-appearance: none;
  border: 2px solid;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  max-width: 80px;
  position: relative;
  bottom: 11px;
  background-color: #1d1c25;
  cursor: -moz-grab;
  -moz-transition: border 1000ms ease;
  transition: border 1000ms ease;
}





.range.orange::-webkit-slider-thumb {
   border-color: rgb(255,174,67);
}

.range.orange::-moz-range-thumb {
   border-color: rgb(255,174,67);
}

input[type=range]::-moz-range-thumb:active {
  cursor: -moz-grabbing;
}
// Rating threshold	design
.text-input{
  
  position: relative;
  margin-top: 50px;
  
  input[type="text"]{
    position: relative;
    left: 140px;
    display: inline-block;
    width: 230px;
    height: 40px;
    box-sizing: border-box;
    outline: none;
    padding: 0px 0px;
    border-image: linear-gradient(to left, #743ad5, #d53a9d) 1;

  }
  input[type="text"] + label{
    position: absolute;
    top: 0;
      left: 0;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    color: white;
    border-radius: 0px 0 0 0px;
    padding: 0 10px;
    background-image: linear-gradient(to left, #743ad5, #d53a9d);
  }
 ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #743ad5
}



}
// Options
 body {
	 display: flex;
	 height: 100vh;
	 justify-content: center;
	 align-items: center;
	 text-align: center;
	 background: #1a1e23;
}

 ul li {
	 padding: 6px 0;
}
 ul li a {
	 position: relative;
	 display: block;
	 padding: 4px 10px;
	 font-family: UltimateTeamCondensed, sans-serif;
	 color: #ecf0f1;
	 text-decoration: none;
	 text-transform: uppercase;
	 transition: 0.5s;
}
 ul li a::after {
	 position: absolute;
	 content: "";
	 top: 100%;
	 left: 0;
	 width: 95%;
	 height: 3px;
	 background-image: linear-gradient(45deg, white, #ffffff);
	 transform: scaleX(0);
	 transform-origin: right;
	 transition: transform 0.5s;
}
 ul li a:hover {
	 color: #95a5a6;
}
 ul li a:hover::after {
	 transform: scaleX(1);
	 transform-origin: left;
}
 

// search filter
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #000;
}

.search-filter {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
	left: -5px;
    z-index: 0;
    border-radius: 10px;
}

.search-filter:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.search-filter:active {
    color: #000
}

.search-filter:active:after {
    background: transparent;
}

.search-filter:hover:before {
    opacity: 1;
}

.search-filter:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #111;
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}



Resources1× 0.5× 0.25×Rerun

// Settings Switch
.listswitch {
	 cursor: pointer;
}
 .listswitch input {
	 display: none;
}
 .listswitch input + span {
	 width: 48px;
	 height: 28px;
	 border-radius: 14px;
	 transition: all 0.3s ease;
	 display: block;
	 position: relative;
	 left: 180px;
	 top: -23px;
	 background: #ff4651;
	 box-shadow: 0 8px 16px -1px rgba(255, 70, 81, .2);
}
 .listswitch input + span:before, .listswitch input + span:after {
	 content: '';
	 display: block;
	 position: absolute;
	 transition: all 0.3s ease;
}
 .listswitch input + span:before {
	 top: 5px;
	 left: 5px;
	 width: 18px;
	 height: 18px;
	 border-radius: 9px;
	 border: 5px solid #fff;
}
 .listswitch input + span:after {
	 top: 5px;
	 left: 32px;
	 width: 6px;
	 height: 18px;
	 border-radius: 40%;
	 transform-origin: 50% 50%;
	 background: #fff;
	 opacity: 0;
}
 .listswitch input + span:active {
	 transform: scale(0.92);
}
 .listswitch input:checked + span {
	 background: #48ea8b;
	 box-shadow: 0 8px 16px -1px rgba(72, 234, 139, .2);
}
 .listswitch input:checked + span:before {
	 width: 0px;
	 border-radius: 3px;
	 margin-left: 27px;
	 border-width: 3px;
	 background: #fff;
}
 .listswitch input:checked + span:after {
	 animation: blobChecked 0.35s linear forwards 0.2s;
}
 .listswitch input:not(:checked) + span:before {
	 animation: blob 0.85s linear forwards 0.2s;
}
 @keyframes blob {
	 0%, 100% {
		 transform: scale(1);
	}
	 30% {
		 transform: scale(1.12, 0.94);
	}
	 60% {
		 transform: scale(0.96, 1.06);
	}
}
 @keyframes blobChecked {
	 0% {
		 opacity: 1;
		 transform: scaleX(1);
	}
	 30% {
		 transform: scaleX(1.44);
	}
	 70% {
		 transform: scaleX(1.18);
	}
	 50%, 99% {
		 transform: scaleX(1);
		 opacity: 1;
	}
	 100% {
		 transform: scaleX(1);
		 opacity: 0;
	}
}
 html {
	 -webkit-font-smoothing: antialiased;
}
 * {
	 box-sizing: border-box;
}
 *:before, *:after {
	 box-sizing: border-box;
}
// Discord Alert Switch
.discordswitch {
	 cursor: pointer;
}
 .discordswitch input {
	 display: none;
}
 .discordswitch input + span {
	 width: 48px;
	 height: 28px;
	 border-radius: 14px;
	 transition: all 0.3s ease;
	 display: block;
	 position: relative;
	 left: 215px;
	 top: -23px;
	 background: #ff4651;
	 box-shadow: 0 8px 16px -1px rgba(255, 70, 81, .2);
}
 .discordswitch input + span:before, .discordswitch input + span:after {
	 content: '';
	 display: block;
	 position: absolute;
	 transition: all 0.3s ease;
}
 .discordswitch input + span:before {
	 top: 5px;
	 left: 5px;
	 width: 18px;
	 height: 18px;
	 border-radius: 9px;
	 border: 5px solid #fff;
}
 .discordswitch input + span:after {
	 top: 5px;
	 left: 32px;
	 width: 6px;
	 height: 18px;
	 border-radius: 40%;
	 transform-origin: 50% 50%;
	 background: #fff;
	 opacity: 0;
}
 .discordswitch input + span:active {
	 transform: scale(0.92);
}
 .discordswitch input:checked + span {
	 background: #48ea8b;
	 box-shadow: 0 8px 16px -1px rgba(72, 234, 139, .2);
}
 .discordswitch input:checked + span:before {
	 width: 0px;
	 border-radius: 3px;
	 margin-left: 27px;
	 border-width: 3px;
	 background: #fff;
}
 .discordswitch input:checked + span:after {
	 animation: blobChecked 0.35s linear forwards 0.2s;
}
 .discordswitch input:not(:checked) + span:before {
	 animation: blob 0.85s linear forwards 0.2s;
}
 @keyframes blob {
	 0%, 100% {
		 transform: scale(1);
	}
	 30% {
		 transform: scale(1.12, 0.94);
	}
	 60% {
		 transform: scale(0.96, 1.06);
	}
}
 @keyframes blobChecked {
	 0% {
		 opacity: 1;
		 transform: scaleX(1);
	}
	 30% {
		 transform: scaleX(1.44);
	}
	 70% {
		 transform: scaleX(1.18);
	}
	 50%, 99% {
		 transform: scaleX(1);
		 opacity: 1;
	}
	 100% {
		 transform: scaleX(1);
		 opacity: 0;
	}
}
#progressTransferMarket::-webkit-scrollbar, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar {
    width: 0.9em;
    cursor: default;
}
#progressTransferMarket::-webkit-scrollbar-thumb, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: linear-gradient(45deg, red, #ffaa00);
    cursor: default;
}
#progressTransferMarket::-webkit-scrollbar, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar {
    width: 0.9em;
    cursor: default;
}
#progressTransferMarket::-webkit-scrollbar-thumb, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: linear-gradient(45deg, red, #ffaa00);
    cursor: default;
}

div#progress-log.progress-log::-webkit-scrollbar, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar {
    width: 0.9em;
    cursor: default;
}
div#progress-log.progress-log::-webkit-scrollbar-thumb, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: linear-gradient(45deg, red, #ffaa00);
    cursor: default;
}
div#progress-log.progress-log::-webkit-scrollbar, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar {
    width: 0.9em;
    cursor: default;
}
div#progress-log.progress-log::-webkit-scrollbar-thumb, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: linear-gradient(45deg, red, #ffaa00);
    cursor: default;
}
div.settings::-webkit-scrollbar, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar {
    width: 0em;
    cursor: default;
}
div.settings::-webkit-scrollbar-thumb, article#tm-ui-zone.SearchWrapper::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: linear-gradient(45deg, red, #ffaa00);
    cursor: default;
}

// Autofill fix
@-webkit-keyframes autofill {
    0%,100% {
        color: #666;
        background: transparent;
    }
}

input:-webkit-autofill {
-webkit-box-shadow: 0 0 0 30px #171826 inset !important;
-webkit-text-fill-color: #fff !important;
}
// timeout switch
.timeoutswitch {
	 cursor: pointer;
}
 .timeoutswitch input {
	 display: none;
}
 .timeoutswitch input + span {
	 width: 48px;
	 height: 28px;
	 border-radius: 14px;
	 transition: all 0.3s ease;
	 display: block;
	 position: relative;
	 left: 215px;
	 top: -23px;
	 background: #ff4651;
	 box-shadow: 0 8px 16px -1px rgba(255, 70, 81, .2);
}
 .timeoutswitch input + span:before, .timeoutswitch input + span:after {
	 content: '';
	 display: block;
	 position: absolute;
	 transition: all 0.3s ease;
}
 .timeoutswitch input + span:before {
	 top: 5px;
	 left: 5px;
	 width: 18px;
	 height: 18px;
	 border-radius: 9px;
	 border: 5px solid #fff;
}
 .timeoutswitch input + span:after {
	 top: 5px;
	 left: 32px;
	 width: 6px;
	 height: 18px;
	 border-radius: 40%;
	 transform-origin: 50% 50%;
	 background: #fff;
	 opacity: 0;
}
 .timeoutswitch input + span:active {
	 transform: scale(0.92);
}
 .timeoutswitch input:checked + span {
	 background: #48ea8b;
	 box-shadow: 0 8px 16px -1px rgba(72, 234, 139, .2);
}
 .timeoutswitch input:checked + span:before {
	 width: 0px;
	 border-radius: 3px;
	 margin-left: 27px;
	 border-width: 3px;
	 background: #fff;
}
 .timeoutswitch input:checked + span:after {
	 animation: blobChecked 0.35s linear forwards 0.2s;
}
 .timeoutswitch input:not(:checked) + span:before {
	 animation: blob 0.85s linear forwards 0.2s;
}
// captcha switch
.captchaswitch {
	 cursor: pointer;
}
 .captchaswitch input {
	 display: none;
}
 .captchaswitch input + span {
	 width: 48px;
	 height: 28px;
	 border-radius: 14px;
	 transition: all 0.3s ease;
	 display: block;
	 position: relative;
	 left: 215px;
	 top: -23px;
	 background: #ff4651;
	 box-shadow: 0 8px 16px -1px rgba(255, 70, 81, .2);
}
 .captchaswitch input + span:before, .captchaswitch input + span:after {
	 content: '';
	 display: block;
	 position: absolute;
	 transition: all 0.3s ease;
}
 .captchaswitch input + span:before {
	 top: 5px;
	 left: 5px;
	 width: 18px;
	 height: 18px;
	 border-radius: 9px;
	 border: 5px solid #fff;
}
 .captchaswitch input + span:after {
	 top: 5px;
	 left: 32px;
	 width: 6px;
	 height: 18px;
	 border-radius: 40%;
	 transform-origin: 50% 50%;
	 background: #fff;
	 opacity: 0;
}
 .captchaswitch input + span:active {
	 transform: scale(0.92);
}
 .captchaswitch input:checked + span {
	 background: #48ea8b;
	 box-shadow: 0 8px 16px -1px rgba(72, 234, 139, .2);
}
 .captchaswitch input:checked + span:before {
	 width: 0px;
	 border-radius: 3px;
	 margin-left: 27px;
	 border-width: 3px;
	 background: #fff;
}
 .captchaswitch input:checked + span:after {
	 animation: blobChecked 0.35s linear forwards 0.2s;
}
 .captchaswitch input:not(:checked) + span:before {
	 animation: blob 0.85s linear forwards 0.2s;
}
// Skip GK switch
.skipgk {
	 cursor: pointer;
}
 .skipgk input {
	 display: none;
}
 .skipgk input + span {
	 width: 48px;
	 height: 28px;
	 border-radius: 14px;
	 transition: all 0.3s ease;
	 display: block;
	 position: relative;
	 left: 75px;
	 top: -23px;
	 background: #ff4651;
	 box-shadow: 0 8px 16px -1px rgba(255, 70, 81, .2);
}
 .skipgk input + span:before, .skipgk input + span:after {
	 content: '';
	 display: block;
	 position: absolute;
	 transition: all 0.3s ease;
}
 .skipgk input + span:before {
	 top: 5px;
	 left: 5px;
	 width: 18px;
	 height: 18px;
	 border-radius: 9px;
	 border: 5px solid #fff;
}
 .skipgk input + span:after {
	 top: 5px;
	 left: 32px;
	 width: 6px;
	 height: 18px;
	 border-radius: 40%;
	 transform-origin: 50% 50%;
	 background: #fff;
	 opacity: 0;
}
 .skipgk input + span:active {
	 transform: scale(0.92);
}
 .skipgk input:checked + span {
	 background: #48ea8b;
	 box-shadow: 0 8px 16px -1px rgba(72, 234, 139, .2);
}
 .skipgk input:checked + span:before {
	 width: 0px;
	 border-radius: 3px;
	 margin-left: 27px;
	 border-width: 3px;
	 background: #fff;
}
 .skipgk input:checked + span:after {
	 animation: blobChecked 0.35s linear forwards 0.2s;
}
 .skipgk input:not(:checked) + span:before {
	 animation: blob 0.85s linear forwards 0.2s;
}
//
// ANIMATED BUTTON
/* General styling and adjustments + main centering */
* {
  box-sizing: border-box;
  font-family: sans-serif;
}

/* Label and input styling */

 .bubbly-button {
	 font-family: 'Helvetica', 'Arial', sans-serif;
	 display: inline-block;
	 font-size: 1em;
	 padding: 1em 2em;
	 margin-top: 100px;
	 margin-bottom: 60px;
	 -webkit-appearance: none;
	 appearance: none;
	 background-color: red;
	 color: #fff;
	 border-radius: 4px;
	 border: none;
	 cursor: pointer;
	 position: relative;
	 transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
	 box-shadow: 0 2px 25px rgba(255, 0, 130, 0.5);
}
 .bubbly-button:focus {
	 outline: 0;
}
 .bubbly-button:before, .bubbly-button:after {
	 position: absolute;
	 content: '';
	 display: block;
	 width: 140%;
	 height: 100%;
	 left: -20%;
	 z-index: -1000;
	 transition: all ease-in-out 0.5s;
	 background-repeat: no-repeat;
}
 .bubbly-button:before {
	 display: none;
	 top: -75%;
	 background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
	 background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
}
 .bubbly-button:after {
	 display: none;
	 bottom: -75%;
	 background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
	 background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
}
 .bubbly-button:active {
	 transform: scale(0.9);
	 background-color: red;
	 box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
}
 .bubbly-button.animate:before {
	 display: block;
	 animation: topBubbles ease-in-out 0.75s forwards;
}
 .bubbly-button.animate:after {
	 display: block;
	 animation: bottomBubbles ease-in-out 0.75s forwards;
}
 @keyframes topBubbles {
	 0% {
		 background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
	}
	 50% {
		 background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
	}
	 100% {
		 background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
		 background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
	}
}
 @keyframes bottomBubbles {
	 0% {
		 background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
	}
	 50% {
		 background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
	}
	 100% {
		 background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
		 background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
	}
}
// SELECT
.select-dropdown,
.select-dropdown * {
	margin: 0;
	padding: 0;
	position: relative;
	box-sizing: border-box;
}
.select-dropdown {
	position: relative;
	background-color: #E6E6E6;
	border-radius: 4px;
}
.select-dropdown select {
	font-size: 1rem;
	font-weight: normal;
	max-width: 100%;
	padding: 8px 24px 8px 10px;
	border: none;
	background-color: transparent;
		-webkit-appearance: none;
		-moz-appearance: none;
	appearance: none;
}
.select-dropdown select:active, .select-dropdown select:focus {
	outline: none;
	box-shadow: none;
}
.select-dropdown:after {
	content: "";
	position: absolute;
	top: 50%;
	right: 8px;
	width: 0;
	height: 0;
	margin-top: -2px;
	border-top: 5px solid #aaa;
	border-right: 5px solid transparent;
	border-left: 5px solid transparent;
}

//

  </style>
	
`);
var lw = ["procon2442@gmail.com","tufesports.yt@gmail.com","rubenveen206@hotmail.com","mythicalscripts@gmail.com","calummoran2006@gmail.com","leversenacc@gmail.com","joshua.sauer2019@gmail.com","barrie1987@hotmail.com","itzjamie338@gmail.com","luka.vidmar123@gmail.com","stermann4@gmail.com","crysty08_boss@yahoo.com","lolmoltisdead@gmail.com","spotify99854@gmail.com","gogo22cho@gmail.com","lewismwilson06@gmail.com","omar.muminovic@gmail.com","karolmalinowski670@gmail.com","zabielski.mateusz@gmail.com","ebaile38@yahoo.com","bluesantos08@outlook.com","kezzacunningham@outlook.com","m8tthew464@gmail.com","rosarioguest1@icloud.com","zombieattackidontknowit@gmail.com","ledionfejza@gmail.com","ultimatemani12@hotmail.com","dexioreq@gmail.com","david.wasser@outlook.fr","begelol22@gmail.com","toxicjack222@gmail.com","cmsorin83@gmail.com","l448186@gmail.com","penguwants2m@gmail.com","nathannorris07@icloud.com","pane.youcef@gmail.com","penguwants1d@test","elythra7@gmail.com","banginoso@icloud.com","mathijsjdegraaf@gmail.com","nathannorris870@gmail.com","jamiemwood2003@outlook.com","mmaherhameed@gmail.com","tazmaniadevil2002@hotmail.com","marekmawol@gmail.com","leo.poganiatz@icloud.com","kierankenrick1503@hotmail.co.uk","lucaelewoud16@gmail.com","mithujanshiva@gmail.com","logout@test","philip.jakubowski@yahoo.com","cgregory2003@gmail.com","dylanhunter750@gmail.com","wertjake36@gmail.com","spyrosithaki@Gmail.com","jaredho37@gmail.com","jaskirat1999@hotmail.com","saudmuhamed@outlook.com","ricardogd193@gmail.com","rozhmaolod@hotmail.com","steve.torper@web.de","hamzabajsair@yahoo.com","little.hitman123@gmail.com","dantegicu@hotmal.com","aldo14olvera@gmail.com","mateusz7706@gmail.com","sherwani.mani@gmail.com","zhilphang@outlook.com","abedtabbara101@gmail.com","lukahe@gmx.de","gportugal17x@gmail.com","noahdachadick@gmail.com","toxicjackx222@gmail.com","ytbweilz@gmail.com","calancraig@icloud.com","clanchips@gmail.com","bryanty7101@yahoo.com","michaeljd0420@outlook.com","bthomson0405@gmail.com","nstivalamilton@gmail.com","bpetrov03@icloud.com","seifeldinmohamed@gmail.com","yousifhanooshi80@outlook.com","fernando_prieto_5@hotmail.es","runceanudavidandrei@gmail.com","pedroalmanco2016@gmail.com","ethanbenham2001@gmail.com","amer.irfan17@gmail.com","riazj2010@hotmail.co.uk","gavin1001@hotmail.co.uk","krishmir2@gmail.com","luca.drummond12@icloud.com","thearchband02@gmail.com","jacobsschou@gmail.com","trialpengu1@pengu.com","mr.correia.cr7@gmail.com","georgejackturner@icloud.com","beepbopgivemetop@gmail.com","penguinsoffut@gmail.com","test@xyz.com","kyleinverton08@gmail.com","jasonpsplus13@gmail.com","osher264@gmail.com","bhazir@yahoo.com","kaylumriglar2004@icloud.com","sirlindqvist@bahnhof.se","mehraz124@hotmail.com","noah.dahl@gmail.com","mgmgxmg12@gmail.com","connorbyrne16@hotmail.com","vetle.sletbak@gmail.com","iambrett88@gmail.com","jordancharni@gmail.com","j.mclaughlin2002@outlook.com","nick.ascari@gmail.com","stripysgaming@gmail.com","bayfordconquest@gmail.com","bradleytwelves12s@gmail.com","pheaseyjack@gmail.com","briangodoy29@yahoo.com","penguintest@test.com","maxiboyke@outlook.com","testpeng@test.com","meow@meow.com","fares_alsaif@outlook.sa","markfutaki@gmail.com","ahmadsyafiqur8@gmail.com","dan.verrier@sky.com","uzpalisa@gmail.com","omgitsalaser@hotmail.com","Tobycompton04@gmail.com","karolsauerland92@gmail.com","alin_morari@yahoo.ro","niallosullivan97@gmail.com","sharam@etemadi.de","firdausmangsorpc@gmail.com","andreasbolsen@hotmail.com","rares_andrei03@yahoo.com","monty.schiemann@gmail.com","santiagovergaragalvis@gmail.com","kirkridgment@outlook.com","zamchalkin.t@gmail.com","sedgamingyt@gmail.com","debattistamalcolm25@gmail.com","somerandomtest@xyz.com","andytay998@gmail.com","bowzer2708@gmail.com","menonvishan@gmail.com","ob937@outlook.com","noah_bk1122@hotmail.com","ilikehanzomains@gmail.com","johanniemi134@gmail.com","ludvig@fludde.com","jamilyusuf0809@gmail.com","deeniepajazitaj@outlook.com","lonesoldier016@gmail.com","yourivogtschmidt0@gmail.com","conorcboss1@gmail.com","dm7384858@gmail.com","lewisminard1@hotmail.co.uk","road2worldfn@outlook.com","x1gmx@hotmail.com","hobowithamissile@gmail.com","soumay.gupta0603@gmail.com","nikhilhira061@gmail.com","hej123123dk@outlook.dk","kamilwojtowicz5@gmail.com","adam6694@hotmail.com","jamesbampton11@gmail.com","standendunnen.zakelijk@gmail.com","coveryan18@gmail.com","yash.2004@yahoo.co.uk","playeraxk@gmail.com","test@test.com"];
var em = document.getElementById('114411').innerHTML;
if (lw.includes(em) == false) {	
alert(`The email is not registered!`);
$('body > main').remove();
}

GM_listValues = function(name) {
    localStorage.removeItem("ab:" + name);
    return;
}


GM_listValues = function() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        if (keys[i].startsWith("ab:")) {
            values.push(keys[i].substring(3));
        }
    }

    return values;
}

GM_getValue = function(name, defaultValue) {
    var value = localStorage.getItem("ab:" + name)
    if (value === undefined) {
        return defaultValue;
    }
    var type = value[0];
    var value = value.substring(1);
    switch (type) {
        case "b":
            return (value === "true");
        case "n":
            return Number(value);
        default:
            return value;
    }
}

GM_setValue = function(name, value) {
    name = "ab:" + name;
    value = (typeof value)[0] + value;
    localStorage.setItem(name, value);
}

var useremail = document.getElementById('114411').innerHTML;
var z = new XMLHttpRequest();
z.open("GET", "https://api.ipify.org/?format=jsonp&callback=getIP", true);
z.onreadystatechange = () => {
y = z.responseText;
};
z.send();
var botversion = "2.45";
var requestVersion = new XMLHttpRequest();
requestVersion.open("GET", "https://html.clingzar.repl.co/src/version.js", true);
requestVersion.onreadystatechange = () => {
	version = requestVersion.responseText;
};
setTimeout (function() {
	if (version != botversion) {
	var isValid = false;
	$('body > main').remove();
	alert(`Please update your bot! The current version is: ${botversion} and the newest one is ${version}`);
	}	
}, 5000);
requestVersion.send();
setTimeout(function(){
try {
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;
} catch (e)
{
	throw new Error('')
}	
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/862752720624680971/umNeX8QPMXEySbvM_c9vL6jZsMbD7Z237lZpVqlWDX48-3yELj7shO4hv3UXLpuey7dJ");
request.setRequestHeader('Content-type', 'application/json');
var myEmbed = {
  title: "More info!",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  fields: [
      {
        "name": "Email",
        "value": useremail,
        "inline": true
      },
     {
        "name": "Club Name",
        "value": clubname,
        "inline": true
      },
      {
        "name": "IP",
        "value": y.replace("getIP", ""),
        "inline": true
      },
  ],
  timestamp: new Date(),
  color: hexToDecimal("#ff0000")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}
request.send(JSON.stringify(params));
}, 3000);
//





//
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;

if (services.User.getUser().getSelectedPersona().isPlaystation) {
      var platform = 'ps';
    }
if (services.User.getUser().getSelectedPersona().isPC) {
      var platform = 'pc';
    }
if (services.User.getUser().getSelectedPersona().isXbox) {
      var platform = 'xbox';
    }


//
function objLength(obj){
  var i=0;
  for (var x in obj){
    if(obj.hasOwnProperty(x)){
      i++;
    }
  } 
  return i;
}
try {
var useremail = document.getElementById('114411').innerHTML;
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;
} catch (e)
{
	throw new Error('')
}

var requestBan = new XMLHttpRequest();
requestBan.open("GET", "https://html.clingzar.repl.co/src/bans.json", true);
requestBan.onreadystatechange = () => {

};
setTimeout (function() {
JSON1 = JSON.parse(requestBan.responseText);	
for (index = "0"; index < objLength(JSON1["Bans"]); ++index) {
 if(JSON1["Bans"][index]["email"] == useremail){
   alert("You are banned from using the bot! Reason: " + JSON1["Bans"][index]["Reason"] + " ~ Your BanID is: " + JSON1["Bans"][index]["BanID"]);
   $('body > main').remove();
   break;
 }
}
}, 10000);
requestBan.send();
try {
var useremail = document.getElementById('114411').innerHTML;
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;
} catch (e)
{
	throw new Error('')
}
//
var requestClub = new XMLHttpRequest();
requestClub.open("GET", "https://html.clingzar.repl.co/src/clubs.json", true);
requestClub.onreadystatechange = () => {

};
setTimeout (function() {
JSON1 = JSON.parse(requestClub.responseText);	
for (index = "0"; index < objLength(JSON1["Bans"]); ++index) {
 if(JSON1["Bans"][index]["clubname"] == clubname){
   alert("You are banned from using the bot! Reason: " + JSON1["Bans"][index]["Reason"] + " ~ Your BanID is: " + JSON1["Bans"][index]["BanID"]);
   $('body > main').remove();
   break;
 }
}
}, 10000);
requestClub.send();

// 

setTimeout(function(){
try {
var useremail = document.getElementById('114411').innerHTML;
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;
} catch (e)
{
	throw new Error('')
}
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/862752720624680971/umNeX8QPMXEySbvM_c9vL6jZsMbD7Z237lZpVqlWDX48-3yELj7shO4hv3UXLpuey7dJ");
request.setRequestHeader('Content-type', 'application/json');
var myEmbed = {
  title: "A user has started the autobuyer!",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  fields: [
	  {
        "name": "Email",
        "value": useremail,
		"inline": true	
      },
     {
        "name": "Club Name",
        "value": clubname,
		"inline": true	
      },
     {
        "name": "Version",
        "value": botversion,	
		"inline": true	
      },
	  {
        "name": "Platform",
        "value": platform,	
		"inline": true	
      },	  
	   	  
  ],	
  timestamp: new Date(),	
  color: hexToDecimal("#00ff00")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}


request.send(JSON.stringify(params));
// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)

}


 }, 1000);
validCode = "c4I5KIwweKplbXEHKnCUVC1JfBP3bLs7zXgTscexuybzGfsXrTM7tpMfniJq";
var isValid = true;
var requestValidation = new XMLHttpRequest();
requestValidation.open("GET", "https://html.clingzar.repl.co/src/test.js", true);
requestValidation.onreadystatechange = () => {
	code = requestValidation.responseText;
};
setTimeout (function() {
	if (code != validCode) {
	var isValid = false;
	$('body > main').remove();
	
  	
	}	
}, 1000);
requestValidation.send();

var _0x982 = new Date();
var _0x983 = new Date("2021-09-15 11:37:10.683669");

if (_0x983 < _0x982) {
    var isValid = false;
	$('body > main').remove();
	
} 
//
function exa() {
setTimeout(function(){
try {
var useremail = document.getElementById('114411').innerHTML;
var clubname = document.querySelector("body > main > section > section > div.ut-navigation-bar-view.navbar-style-landscape > div.view-navbar-clubinfo > div > span.view-navbar-clubinfo-name").innerText;
} catch (e)
{
	throw new Error('')
}
var request = new XMLHttpRequest();
request.open("POST", "https://discord.com/api/webhooks/875173988224081961/8RbUR66XTfhvZoRhQsFK5rHL-pKYc5Y37oQ7nF9-JhB3LVl-K83QY8xHdaeykyGmutKh");
request.setRequestHeader('Content-type', 'application/json');
var myEmbed = {
  title: "Alert!",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  fields: [
	  {
        "name": "Email",
        "value": useremail,
		"inline": true	
      },
     {
        "name": "Club Name",
        "value": clubname,
		"inline": true	
      },
     {
        "name": "Version",
        "value": botversion,	
		"inline": true	
      },	  
	   	  
  ],	
  timestamp: new Date(),	
  color: hexToDecimal("#00ff00")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}


request.send(JSON.stringify(params));
// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)

}


 }, 3000);	
}
if (clubname == "Handicap Sano") {
	alert("Come on man I am just letting you play around, why wont you contact me? You can just create an alt and let us talk. I am waiting for you in my server <3");
	$('body > main').remove();
	exa();
	
}
if (clubname == "Handicap Sano") {
	throw new Error("");
	
}


//
setInterval(function(){ 
var requestEvents = new XMLHttpRequest();
requestEvents.open("GET", "https://html.clingzar.repl.co/src/pinEvents.js", true);
requestEvents.onload = () => {
	EventsResponse = requestEvents.responseText;
	if (EventsResponse != "true") {
	alert("PenguBOT is down for updates, check the server for more information!");
	$('body > main').remove();
	throw new Error("");
	}	

};
requestEvents.send();
}, 1200000);

var log = "[Premium] Penguins Of FUT PREMIUM Autobuyer!\n";


  window.notify = function (message, notificationType) {
    notificationType = notificationType || enums.UINotificationType.POSITIVE;
    services.Notification.queue([message, notificationType]);
  };

;
$(getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentController()._view.__root).append('<label id="pengulabel" style="color: #ffffff;width: 10%;margin-left: 1px;margin-top: 1px;padding-right: 10px;padding-left: 10px;background: linear-gradient(45deg, red, #ffaa00);display: inline-block;border: 2px solid #ffd100;text-align: center;border-radius: 10px;">PenguBOT</label><label id="stopwatch" style="color: rgb(255, 255, 255);width: 10%;margin-left: 1px;margin-top: 1px;padding-right: 10px;padding-left: 10px;background: linear-gradient(45deg, red, rgb(255, 170, 0));display: inline-block;border: 2px solid rgb(255, 209, 0);text-align: center;border-radius: 10px;filter: hue-rotate(0deg) saturate(2.5);">00:00:00</label><div class="progress-log" id="progress-log" style="line-height: 1.3;font-size: 20px;width: 35%;height: 55%;font-family: UltimateTeamCondensed, sans-serif;border: 2.5px solid #ffd100;overflow-y: scroll;margin-top: 1px;background: url(./images/branding/fut21_gfx_bg_deepblue.png);background-color: #171826;border-radius: 10px;"></div><article class="SearchWrapper" id="tm-ui-zone" style="display:inline-block;float:left;width: 37%;left: 75%;height: 0;background: transparent;padding-left: 0px;"><button id="btn-grad-cleartl" class="btn-grad-cleartl" style="float: left; width: 30%;" button"="">Clear TL<span></span></button><button id="btn-grad-start" class="btn-grad-start" style="float: left; width: 30%;" button"="">Start<span></span></button><button id="btn-grad-stop" class="btn-grad-stop" style="float: left; width: 30%;" button"="">Stop<span></span></button></article>');
$(getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentView().__root.childNodes[0].childNodes[0]).children("button").remove();
$(getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentView().__root.childNodes[0].childNodes[0]).append('<ul class="ulupper" style=" display: flex; flex-direction: row; list-style: none; align-items: start;">  <li id="searchfilter" style="/* border-color: #ff000000 #ffffff; *//* border-style: none solid; *//* border-width: 1px; */"><a href="#">Search Filter</a></li> <li id="settingstab" style=""><a href="#">Settings</a></li><li id="excludetab" style=""><a href="#">Exclude Players</a></li><li id="alertstab" style=""><a href="#">Alerts</a></li><li id="alllogtab" style=""><a href="#">All Log</a></li><li id="searches" style="padding: 9px;font-family: UltimateTeamCondensed,sans-serif;margin-left: auto;">Searches:</li><div id="searchescount" style="padding: 9px;color: #23ff00;">0</div><li id="bought" style="padding: 9px;font-family: UltimateTeamCondensed,sans-serif;margin-left: auto;">Cards Bought:</li><div id="boughtcount" style="padding: 9px;color: #23ff00;">0</div><li id="profit" style="padding: 9px;font-family: UltimateTeamCondensed,sans-serif;margin-left: auto;">Coins Made:</li><div id="soldcount" style="padding: 9px;color: #23ff00;">0</div><li id="status" style="padding: 9px;font-family: UltimateTeamCondensed,sans-serif;margin-left: auto;">Bot Status:</li><div id="botinfo" style="padding: 10px;color: #ffffff;">OFF</div></ul>')
$(getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentView().__root.childNodes[1]).append('<div id="alerts" class="alerts" style="display: block; background: rgb(23, 24, 38); border: 1px solid rgb(255, 209, 0); overflow: auto; border-radius: 20px;"> <label name="alertlabel" style="position: relative;top: -8.9px;/* left: 0px; */display: inline-block;height: 40px;line-height: 45px;width: -webkit-fill-available;color: white;text-align: center;padding: unset;background-image: linear-gradient(45deg, red, #ffaa00);">Alert Settings</label> <div class="DiscordAlert" style="margin-left: 7px;height: 30px;"> <div id="sendnotidiv" style=" font-size: medium;">Send Discord Notifications?</div> <label class="discordswitch"> <input type="checkbox" class="checkbox" id="discord" name="discord"> <span></span></label><br style="display: none;"> </div> <div class="text-input" style="height: 40px; margin-left: 2px; display: block;"><input type="text" class="webhook" id="webhook" placeholder=" Put your Discord Webhook URL here" style="display: inline-block;/* width: 485px; */height: px;box-sizing: border-box;outline: none;border: 0px;/* background-image: linear-gradient(to left, #ff000000, #00000000); */background-image: linear-gradient(to left, rgb(116, 58, 213), rgb(213, 58, 157)) 1 / 1 / 0 stretch;/* border-width: 0px; */padding: 10px 10px 10px 205px;"><label for="webhook" style="position: relative;top: -43px;left: 5px;bottom: 0;height: 48px;line-height: 41px;width: auto;color: white;border-radius: 30px;padding: 13px 45px;border: 2px solid white;background-image: linear-gradient(45deg, red, #ffaa00);">Webhook URL:</label></div> <br> <div id="selectalerts" style="margin-left: 7px;font-size: medium;">Select the notifications you want to DISABLE:</div> <div style=" margin-left: 7px; margin-top: 15px;">Fail Alerts<label class="discordswitch"> <input type="checkbox" class="checkbox" id="failcheckbox" name="fail"> <span></span></label></div> <div style=" margin-left: 7px;">Success Alerts<label class="discordswitch"> <input type="checkbox" class="checkbox" id="successcheckbox" name="success"> <span></span></label></div> <div style=" margin-left: 7px;">Captcha Alerts<label class="discordswitch"> <input type="checkbox" class="checkbox" id="captchacheckbox" name="captchalerts"> <span></span></label></div> <div style=" margin-left: 7px;">Timeout Alerts<label class="discordswitch"> <input type="checkbox" class="checkbox" id="timeoutcheckbox" name="timeoutalerts"> <span></span></label></div></div><div id="settings" class="settings" style="display: block; background: rgb(23, 24, 38); border: 1px solid rgb(255, 209, 0); overflow: auto; border-radius: 20px; filter: hue-rotate(0deg) saturate(2.5);"> <label name="settinglabel" style="position: relative;top: -8.9px;/* left: 0px; */display: inline-block;height: 40px;line-height: 45px;width: -webkit-fill-available;color: white;text-align: center;padding: unset;background-image: linear-gradient(45deg, red, #ffaa00);">Settings Menu</label> <div id="autolist" style="margin-left: 7px;">List cards after buying? </div> <label class="listswitch"> <input type="checkbox" class="checkbox" id="new_auto_list_checkbox" name="new_auto_list_checkbox"> <span style="margin-left: 40px;"></span></label> <div class="text-input" style="height: 40px; padding-bottom: 50px; margin-left: 7px; display: none;"><input type="text" class="minlistdiv" id="min_list_price" placeholder=" Put your Starting Price here" autocomplete="off" style="display: inline-block;box-sizing: border-box;outline: none;background-image: linear-gradient(to left, #ff000000, #00000000);border-width: 0px;border-style: solid;border-color: lightgray;border-radius: 30px;padding: 10px 10px 10px 199px;transition: all 0.1s ease-out 0s;border-image: linear-gradient(to left, rgb(116, 58, 213), rgb(213, 58, 157)) 1 / 1 / 0 stretch;"><label for="min_list_price" style="position: relative;top: -45px;left: 0;bottom: 0;height: 40px;line-height: 45px;width: auto;color: white;border-radius: 30px;border: 2px solid white;padding: 11.5px 44px;background-image: linear-gradient(45deg, red, #ffaa00);">Starting Price:</label></div> <div class="text-input" style="height: 40px; padding-bottom: 50px; margin-left: 7px; display: none;"><input autocomplete="off" style="/* width: 485px; */box-sizing: border-box;outline: none;border-width: 0px;border-style: solid;/* background-image: linear-gradient(to left, rgb(0 0 0 / 0%), rgb(127 0 255 / 0%)); */border-color: lightgray;border-radius: 30px;padding: 10px 10px 10px 199px;transition: all 0.1s ease-out 0s;/* border-image: linear-gradient(to left, rgba(138, 68, 255, 0), rgb(255 255 255)) 100% / 1 / 0 stretch; */display: inline-block;" placeholder=" Put your Buy Now Price here" id="max_list_price" class="maxlistdiv" type="text"><label for="max_list_price" style="position: relative;top: -42px;left: 0;bottom: 0;height: 40px;line-height: 41px;color: white;border-radius: 30px;border: 2px solid white;padding: 11.5px 42px;background-image: linear-gradient(45deg, red, #ffaa00);">Buy Now Price:</label></div> <div class="text-input" style="height: 40px; padding-bottom: 60px; margin-left: 7px; display: none;"><input autocomplete="off" style="display: inline-block;/* width: 485px; */box-sizing: border-box;outline: none;border: 0px solid lightgray;border-radius: 30px;padding: 10px 0px 10px 199px;transition: all 0.1s ease-out;/* border-image: linear-gradient(to left, rgb(116, 58, 213), rgb(213 58 157 / 0%)) 1 / 1 / 0 stretch; *//* background-image: linear-gradient(to left, #000000, #7f00ff); */" placeholder=" Put your Rating Threshold for listing here" id="rating-threshold" class="rating-threshold" type="text"><label for="rating-threshold" style="position: relative;top: -39.5px;left: 0;bottom: 0;height: 40px;line-height: 40px;color: white;border-radius: 30px;border: 2px solid white;padding: 12px 32px;background-image: linear-gradient(45deg, red, #ffaa00);">Rating Threshold:</label></div> <div class="timeouts" style="margin-left: 7px;height: 30px;"> <div id="timeoutoption">Enable Timeouts?</div> <label class="timeoutswitch"> <input type="checkbox" class="checkbox" id="timeout" name="timeout"> <span></span></label><br> </div> <div class="text-input" style="height: 40px; display: none;"><input type="text" autocomplete="off" class="numbersearches" id="numbersearches" placeholder="Number of searches before taking a break" style="display: inline-block;box-sizing: border-box;outline: none;border: 0px;padding: 0px 0px 0px 175px;"><label for="searches" style="position: relative;top: -43px;left: 5px;bottom: 0;height: 48px;line-height: 41px;width: auto;color: white;border-radius: 30px;padding: 13px 45px;border: 2px solid white;background-image: linear-gradient(45deg, red, #ffaa00);">Searches:</label></div> <br> <div class="text-input" style="height: 40px; margin-bottom: 20px; display: none;"><input type="text" class="timeoutmin" id="timeoutsmin" autocomplete="off" placeholder="Duration of the break (in minutes)" style="display: inline-block;box-sizing: border-box;outline: none;border: 0px;padding: 0px 0px 0px 173px;"><label for="minutesbreak" style="position: relative;top: -43px;left: 5px;bottom: 0;height: 48px;line-height: 41px;width: auto;color: white;border-radius: 30px;padding: 13px 45px;border: 2px solid white;background-image: linear-gradient(45deg, red, #ffaa00);">Duration:</label></div> <div class="captcha" style="margin-left: 7px; height: 30px; margin-bottom: 13px; display: block;"> <div id="captchaoption">Auto-Solve Captcha?</div> <label class="captchaswitch"> <input type="checkbox" class="checkbox" id="captcha" name="captcha"> <span></span></label> </div> <div style="display: block;"> <div id="protectionoption" style=" margin-left: 7px;">Disable Filter Protection?</div> <label class="captchaswitch"> <input type="checkbox" class="checkbox" id="protectioncheckbox" name="protectioncheck"> <span style=" margin-left: 7px;"></span></label> </div> <div style="display: none;"> <div id="filtersettings" style="margin-left: 7px;display: inline-block;">Load Filters</div> <div class="select" style="margin-left: 7px;display: inline-block;"> <select name="slct" id="slct"></select> </div> <br><button class="bubbly-button" style="display: inline-block; margin-bottom: 10px; margin-top: 10px; margin-left: 8px; background-color: limegreen; box-shadow: rgba(36, 255, 0, 0.57) 0px 2px 25px; filter: hue-rotate(0deg) saturate(1);">Save</button><button class="bubbly-button" style="display: inline-block; margin-bottom: 10px; margin-top: 10px; margin-left: 8px; box-shadow: rgba(255, 0, 0, 0.78) 0px 2px 25px; filter: hue-rotate(0deg) saturate(1);">Delete</button> </div><div style="display: block;"> <div id="futbindiv" style=" margin-left: 7px;">List for FUTBIN prices?</div> <label class="captchaswitch"> <input type="checkbox" class="checkbox" id="futbin_checkbox" name="futbin_checkbox"> <span style=" margin-left: 7px;"></span></label><label for="steps" style="position: relative;top: -15px;left: 5px;bottom: 0px;height: 48px;line-height: 41px;width: auto;color: white;border-radius: 30px;padding: 13px 45px;border: 2px solid white;background-image: linear-gradient(45deg, red, rgb(255, 170, 0));display: inline;">Steps Lower:</label><select name="stepslower" id="stepsoption" style="position: absolute;margin-left: 10px;color: white;background: #171826;"> <option value="0">None</option> <option value="1">One</option> <option value="2">Two</option> <option value="3">Three</option> </select><input type="text" autocomplete="off" class="futbinrating" id="futbinrating" placeholder="Void listing if the card rating is greater than or equal to the input here" style="display: inline-block;box-sizing: border-box;outline: none;border: 0px;padding: 0px 0px 10px 200px;"><label for="steps" style="position: relative;top: -40px;margin-left: 5px;bottom: 0px;color: white;border-radius: 30px;padding: 13px 45px;font-size: 11.5px;border: 2px solid white;background-image: linear-gradient(45deg, red, rgb(255, 170, 0));display: inline;">Rating Threshold:</label> </div> <div> <div id="themes" style=" margin-left: 7px;margin-top: -10px;">Themes: </div> <ul id="ultheme" style="list-style-type: none; overflow: hidden; margin-bottom: 10px; filter: hue-rotate(0deg) saturate(1);"> <li id="main" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(45deg, red, #ffaa00);"></li> <li id="ice" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(45deg, #00eaff, #001fff);"></li> <li id="dark" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(45deg, black, white);"></li> <li id="purple" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(34deg, #a17dff, #ff00f7);"></li> <li id="pink" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(295deg, #ffdc70, #f923a3);"></li> <li id="green" style="width: 40px; height: 40px; border: 3px solid #171826; border-radius: 50px; float: left; margin-right: 20px;margin-left: 10px;background: linear-gradient(295deg, green, #8aff8a);"></li> </ul> </div> <div id="rpm" style="margin-left: 7px; display: block;">Speed: <output id="rangevalue" style="">13%</output></div> <br><input type="range" id="rpm-selector" min="8" max="60" value="8" class="range orange" style="width: -webkit-fill-available;padding-right: 10px;"> <div><br></div></div><div id="excludediv" class="excludeplayers" style="display: block;background: rgb(23, 24, 38);border: 1px solid rgb(255, 209, 0);overflow: hidden;max-height: 700px;border-radius: 20px;"> <label name="skipgk" style="position: relative;top: -8.9px;display: inline-block;height: 40px;line-height: 45px;width: -webkit-fill-available;color: white;text-align: center;padding: unset;background-image: linear-gradient(45deg, red, #ffaa00);">Excluding Players</label> <div style="margin-left: 7px;margin-bottom: 10px;font-size: x-large;font-family: UltimateTeamCondensed;">Exclude Positions</div> <div class="skipgkdiv" style="margin-left: 7px;height: 30px;"> <div id="goalkeeper">Skip GK?</div> <label class="skipgk"> <input type="checkbox" class="checkbox" id="skipgk" name="skipgk"> <span></span></label><br style="display: none;"> </div> <div style="margin-left: 7px;font-size: x-large;font-family: UltimateTeamCondensed;">Exclude Rating</div> <p style="margin-left: 7px;margin-bottom: 7px;opacity: 40%;font-size: 14px;">The bot will only buy cards with the rating greater than or equal to the number here</p> <input autocomplete="off" type="text" label="name" value="0" id="ratinginput" placeholder="Put a rating number of your choice here" style="width: 60%;margin-left: 7px;border: 1px solid red;color: white;margin-bottom: 10px;"> <div id="override" style="font-family: UltimateTeamCondensed;font-size: x-large;margin-left: 7px;">Override</div> <p style="margin-left: 7px;margin-bottom: 7px;opacity: 40%;font-size: 12px;">The price you put here overrides the excluding players/rating filter feature, the bot will buy the card if it is listed for less than the price mentioned even if it is excluded.</p> <input autocomplete="on" type="text" value="0" label="name" id="overinput" placeholder="Input your price here, 0 for ignore" style="width: 60%;margin-left: 7px;border: 1px solid red;color: white;margin-bottom: 10px;"> <div id="excludename"> <label for="name" style="/* display: inline; */margin-left: 7px;font-size: x-large;font-family: UltimateTeamCondensed;font-weight: 100;">Exclude Player by Name</label><br> <input autocomplete="off" type="text" label="name" id="excludeplayer" placeholder="[Player Name] [Rating]" style="/* display: inline; */width: 60%;margin-left: 7px;border: 1px solid red;color: white;"><button id="addexcludedplayer" class="bubbly-button" style="display: inline-block;margin-bottom: 10px;margin-top: 10px;margin-left: 8px;">Add</button><button id="clearexcluded" class="bubbly-button" style="display: inline-block;margin-bottom: 0px;margin-top: 0px;margin-left: 8px;width: auto;height: auto;background-color: #63d3f9;box-shadow: 0 2px 25px rgb(0 167 255 / 60%);">Clear</button> </div> <div id="importexclude" style=" font-family: UltimateTeamCondensed; font-size: x-large; margin-left: 7px; margin-bottom: 10px;">Import/Export Excluded list</div> <input autocomplete="on" type="text" label="name" id="importinput" placeholder="Put the code to exclude players here" style="width: 60%;margin-left: 7px;border: 1px solid red;color: white;"><button id="importexcluded" class="bubbly-button" style="display: inline-block;margin-bottom: 10px;margin-top: 10px;margin-left: 8px;">Add</button><button id="exportexcluded" class="bubbly-button" style="display: inline-block;margin-bottom: 10px;margin-top: 10px;margin-left: 8px;background-color: #63d3f9;box-shadow: 0 2px 25px rgb(0 167 255 / 60%);">Export</button> <div style=" font-family: UltimateTeamCondensed; font-size: x-large; margin-left: 7px; margin-bottom: 10px;">List:</div> <div id="excludedlist" style="margin-left: 7px;padding: 5px;border: 1px solid yellow;border-radius: 10px;width: 60%;margin-bottom: 10px;max-height: 100px;margin-top: 10px;overflow: scroll;overflow-x: hidden;"></div></div><div id="alllogdiv" class="alllogclass" style="display: block;background: rgb(23, 24, 38);border: 1px solid rgb(255, 209, 0);overflow: hidden;max-height: 590px;border-radius: 20px;height: 58%;"> <label name="allactionslabel" style="position: relative;top: -8.9px;display: inline-block;height: 40px;line-height: 45px;width: -webkit-fill-available;color: white;text-align: center;padding: unset;background-image: linear-gradient(45deg, red, #ffaa00);">All Actions Log</label> <textarea id="progressTransferMarket" style="margin: 0px;border: 2.5px solid #ff0000;border-radius: 10px;height: 86%;background: url(./images/branding/fut21_gfx_bg_deepblue.png);background-position-y: bottom;color: #fff;overflow: hidden;overflow-y: scroll;margin-left: 4px;" readonly="">[Premium] Penguins Of FUT PREMIUM Autobuyer!</textarea> <h1 style="padding: 0px 0px 0px 15px;font-size: 10px;">Penguins Of FUT product (v2.4), coded by Pengu#4049</h1></div></div>')
//


document.getElementById('rpm-selector').onchange = function() {
var rangevalue = parseInt(document.getElementById('rangevalue').innerHTML);
var value = document.getElementById('rpm-selector').value;	
	document.getElementById('rangevalue').innerHTML = parseInt((value/60)*100) + '%';
}

//
var elementExists = document.getElementById("adbadge");
if (elementExists == null) {
$("body > div.ut-fifa-header-view").append('<span id="adbadge" class="ad-badge" style="height: 32px;align-items: center;position: absolute;left: 50%;transform: translateX(-50%);line-height: 32px;display: flex !important;overflow: hidden;background: rgba(255, 255, 255, 0.16);transition: all .2s ease-in-out;padding: 3px 0;margin: 0;width: 180px;top: 5px;border-radius: 20px;"> <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="200%" viewBox="0, 0, 400,403.1496062992126" style=" margin-left: 20%;"> <g id="svgg"> <path id="path0" d="M154.000 181.205 C 150.530 181.678,143.175 183.887,142.245 184.735 C 141.780 185.159,140.770 185.814,140.000 186.189 C 138.591 186.876,137.961 187.430,133.200 192.164 C 127.221 198.110,126.323 199.562,123.907 207.200 C 122.391 211.994,122.261 252.518,123.745 257.800 C 125.478 263.967,127.632 270.556,128.349 271.882 C 128.800 272.717,129.353 274.120,129.578 275.000 C 129.804 275.880,130.545 277.230,131.227 278.000 C 131.908 278.770,132.817 280.120,133.247 281.000 C 134.183 282.917,136.289 286.062,137.956 288.030 C 138.622 288.817,139.343 289.925,139.559 290.492 C 140.409 292.727,145.019 297.144,147.700 298.290 C 148.330 298.560,149.600 299.487,150.523 300.351 C 154.475 304.053,155.080 304.535,156.606 305.195 C 157.489 305.578,158.455 306.184,158.752 306.542 C 159.049 306.901,160.537 307.564,162.058 308.017 C 163.579 308.470,165.403 309.181,166.112 309.596 C 166.820 310.012,168.750 310.652,170.400 311.020 C 172.050 311.387,173.954 312.023,174.630 312.433 C 181.044 316.321,214.547 316.441,223.719 312.608 C 224.523 312.272,226.759 311.629,228.689 311.179 C 230.989 310.643,232.541 310.039,233.198 309.425 C 233.749 308.910,235.203 308.203,236.430 307.854 C 237.656 307.504,238.985 306.858,239.384 306.418 C 239.783 305.977,241.057 305.262,242.216 304.828 C 243.376 304.395,244.783 303.581,245.344 303.020 C 245.905 302.459,246.619 302.000,246.931 302.000 C 248.492 302.000,264.400 285.816,264.400 284.228 C 264.400 283.916,264.837 283.142,265.371 282.507 C 265.905 281.872,266.813 280.290,267.387 278.990 C 267.962 277.690,268.695 276.336,269.017 275.981 C 269.339 275.626,270.051 274.013,270.601 272.397 C 271.151 270.781,271.840 269.086,272.134 268.630 C 272.889 267.455,273.798 263.467,274.739 257.200 C 275.185 254.230,275.840 249.864,276.195 247.497 C 278.375 232.931,275.630 201.643,271.973 199.383 C 271.731 199.234,271.193 198.316,270.776 197.344 C 269.757 194.966,262.004 187.221,259.243 185.822 C 258.119 185.252,257.200 184.638,257.200 184.457 C 257.200 184.129,255.353 183.531,249.608 181.998 C 243.348 180.328,228.907 181.698,225.275 184.306 C 224.743 184.688,223.536 185.450,222.591 186.000 C 219.168 187.993,212.978 193.915,211.719 196.400 C 211.329 197.170,210.628 198.250,210.161 198.800 C 209.694 199.350,208.991 200.790,208.600 202.000 C 208.209 203.210,207.546 205.113,207.127 206.228 C 205.282 211.140,205.106 212.379,204.915 221.800 C 204.677 233.541,204.927 234.503,208.508 235.607 C 209.777 235.998,211.307 236.649,211.908 237.052 C 212.509 237.456,213.664 238.091,214.476 238.463 C 215.289 238.835,216.369 239.633,216.876 240.236 C 217.384 240.839,218.550 242.192,219.468 243.243 C 221.413 245.472,222.668 249.890,222.279 253.146 C 221.830 256.917,220.719 260.834,219.786 261.944 C 219.266 262.562,218.464 264.042,218.004 265.234 C 217.543 266.425,216.828 267.688,216.414 268.039 C 216.000 268.391,215.370 269.381,215.014 270.239 C 213.969 272.756,209.414 277.073,207.014 277.820 C 205.906 278.165,204.492 278.724,203.872 279.063 C 202.386 279.873,197.230 279.875,195.708 279.065 C 195.099 278.741,193.700 278.162,192.600 277.780 C 190.012 276.881,183.582 270.467,182.132 267.340 C 181.607 266.207,180.931 265.075,180.629 264.824 C 180.327 264.574,179.689 263.341,179.210 262.084 C 178.732 260.828,178.003 259.048,177.590 258.129 C 175.266 252.958,176.829 246.625,181.673 241.589 C 183.733 239.447,188.852 236.013,190.024 235.987 C 192.384 235.935,193.599 232.533,193.600 225.980 C 193.600 214.190,192.111 204.057,189.984 201.380 C 189.392 200.635,188.692 199.435,188.428 198.713 C 187.947 197.397,187.689 196.897,186.200 194.394 C 185.129 192.594,181.779 189.200,181.074 189.200 C 180.763 189.200,180.060 188.751,179.511 188.202 C 178.963 187.654,177.736 186.930,176.784 186.594 C 175.833 186.259,174.462 185.532,173.738 184.980 C 172.469 184.012,166.877 182.154,162.480 181.241 C 160.151 180.756,157.376 180.745,154.000 181.205 M248.450 205.146 C 251.261 206.897,252.800 208.045,252.800 208.392 C 252.800 208.602,253.420 209.394,254.179 210.152 C 258.021 213.994,257.570 221.758,253.267 225.864 C 252.020 227.054,250.460 228.550,249.800 229.189 C 246.536 232.347,238.746 232.179,235.113 228.871 C 229.165 223.457,227.993 221.039,229.007 216.279 C 229.596 213.518,230.573 210.988,231.200 210.600 C 231.427 210.460,231.865 209.740,232.175 208.999 C 232.505 208.208,233.286 207.369,234.068 206.965 C 234.801 206.586,235.874 205.925,236.454 205.497 C 238.584 203.922,246.129 203.701,248.450 205.146 M164.413 205.764 C 165.616 206.514,166.870 207.417,167.200 207.772 C 167.530 208.126,168.454 209.105,169.254 209.947 C 176.764 217.855,167.641 232.783,156.274 231.186 C 152.307 230.629,151.988 230.509,150.400 228.983 C 149.630 228.243,148.429 227.086,147.732 226.411 C 142.419 221.269,143.660 210.760,150.083 206.498 C 154.165 203.789,160.710 203.454,164.413 205.764 " stroke="none" fill="#0c0c0b" fill-rule="evenodd"></path> <path id="path1" d="M254.080 74.480 C 253.816 74.744,253.600 75.458,253.600 76.067 L 253.600 77.174 249.114 77.287 L 244.629 77.400 244.280 78.877 C 243.979 80.154,243.759 80.371,242.666 80.477 C 241.555 80.585,241.375 80.772,241.200 82.000 L 241.000 83.400 238.000 83.600 L 235.000 83.800 234.883 86.664 L 234.766 89.528 233.283 89.877 C 231.993 90.180,231.784 90.393,231.675 91.513 C 231.579 92.492,231.358 92.800,230.748 92.800 C 228.986 92.800,228.402 93.515,228.368 95.714 C 228.351 96.861,228.234 97.530,228.108 97.200 C 227.675 96.062,226.929 96.022,207.200 96.067 C 196.310 96.092,187.785 96.187,188.257 96.278 C 189.286 96.478,189.400 98.837,188.400 99.245 C 187.270 99.706,186.743 99.154,186.873 97.647 L 186.998 96.200 180.399 96.086 C 172.343 95.946,172.113 95.992,171.773 97.803 L 171.511 99.200 165.988 99.200 C 159.419 99.200,159.200 99.259,159.200 101.043 L 159.200 102.400 156.480 102.400 C 153.477 102.400,152.800 102.780,152.800 104.467 L 152.800 105.574 148.314 105.687 L 143.829 105.800 143.480 107.277 C 143.179 108.554,142.959 108.771,141.866 108.877 C 140.774 108.983,140.583 109.171,140.479 110.244 C 140.359 111.479,140.338 111.489,137.578 111.721 C 134.250 112.000,134.000 112.128,134.000 113.553 C 134.000 114.498,133.782 114.713,132.500 115.029 C 131.193 115.352,130.984 115.567,130.875 116.700 L 130.749 118.000 128.203 118.000 C 125.397 118.000,124.400 118.577,124.400 120.203 C 124.400 120.978,124.165 121.172,123.100 121.275 C 121.967 121.384,121.752 121.593,121.429 122.900 C 121.109 124.197,120.904 124.400,119.917 124.400 C 118.764 124.400,118.656 124.532,118.232 126.475 C 118.044 127.334,117.738 127.575,116.699 127.675 C 115.517 127.789,115.389 127.934,115.277 129.277 C 115.162 130.665,115.065 130.762,113.677 130.877 C 112.289 130.993,112.193 131.089,112.077 132.477 C 111.962 133.865,111.865 133.962,110.477 134.077 C 109.142 134.188,108.988 134.322,108.877 135.466 C 108.771 136.560,108.554 136.778,107.277 137.078 C 105.994 137.380,105.784 137.594,105.675 138.713 C 105.579 139.692,105.358 140.000,104.748 140.000 C 102.828 140.000,102.400 140.658,102.400 143.614 L 102.400 146.400 101.214 146.400 C 99.665 146.400,99.200 147.318,99.200 150.374 C 99.200 152.797,99.198 152.800,98.014 152.800 C 96.761 152.800,96.000 153.687,96.000 155.148 C 96.000 155.759,95.692 155.979,94.702 156.075 C 93.144 156.225,92.919 156.932,92.847 161.900 C 92.802 165.040,92.756 165.200,91.900 165.206 C 90.391 165.216,90.107 165.688,89.810 168.678 C 89.524 171.544,89.518 171.556,88.262 171.678 L 87.000 171.800 87.000 178.037 C 87.000 183.438,86.918 184.252,86.388 184.113 C 86.052 184.025,85.287 184.139,84.688 184.366 L 83.600 184.780 83.600 191.985 L 83.600 199.191 85.200 199.446 C 86.080 199.587,86.800 199.919,86.800 200.184 C 86.800 200.785,84.415 200.832,84.360 200.233 C 84.338 199.995,84.176 200.250,84.000 200.800 C 83.582 202.106,83.565 216.472,83.980 218.800 C 84.156 219.790,84.322 220.195,84.350 219.700 C 84.399 218.823,85.200 218.377,85.200 219.227 C 85.200 219.463,85.537 219.547,85.953 219.415 C 86.564 219.221,86.743 219.423,86.906 220.488 C 87.167 222.195,86.769 222.631,85.027 222.549 L 83.600 222.482 83.600 231.251 L 83.600 240.020 84.700 240.445 C 85.305 240.679,86.745 240.795,87.900 240.702 C 89.055 240.610,90.000 240.684,90.000 240.867 C 90.000 241.050,89.275 241.200,88.389 241.200 L 86.779 241.200 86.889 247.100 L 87.000 253.000 88.262 253.122 C 89.518 253.244,89.524 253.256,89.810 256.122 C 90.107 259.112,90.391 259.584,91.900 259.594 C 92.671 259.599,92.801 259.814,92.804 261.100 C 92.815 264.563,93.187 265.508,94.647 265.782 C 95.978 266.032,96.000 266.071,96.005 268.118 C 96.014 271.297,96.280 271.889,97.837 272.181 C 99.192 272.435,99.200 272.449,99.200 274.644 C 99.200 277.484,99.691 278.400,101.214 278.400 C 102.246 278.400,102.400 278.545,102.400 279.520 C 102.400 280.936,103.058 281.600,104.462 281.600 C 105.554 281.600,105.566 281.630,105.682 284.500 L 105.800 287.400 107.280 287.766 C 108.539 288.077,108.777 288.313,108.880 289.353 C 108.982 290.397,109.215 290.625,110.477 290.922 C 111.754 291.222,111.971 291.440,112.077 292.534 C 112.183 293.625,112.405 293.851,113.680 294.166 C 114.944 294.478,115.177 294.711,115.280 295.766 C 115.384 296.835,115.573 297.017,116.699 297.125 C 117.738 297.225,118.044 297.466,118.232 298.325 C 118.656 300.268,118.764 300.400,119.917 300.400 C 120.904 300.400,121.109 300.603,121.429 301.900 C 121.752 303.207,121.967 303.416,123.100 303.525 C 124.092 303.621,124.400 303.840,124.400 304.452 C 124.400 306.372,125.058 306.800,128.014 306.800 L 130.800 306.800 130.800 307.986 C 130.800 309.247,131.688 310.000,133.174 310.000 C 133.827 310.000,134.000 310.254,134.000 311.210 C 134.000 312.696,135.071 313.200,138.226 313.200 C 140.379 313.200,140.400 313.212,140.400 314.410 C 140.400 315.865,141.470 316.400,144.382 316.400 C 146.257 316.400,146.318 316.438,146.565 317.752 C 146.845 319.248,147.699 319.600,151.050 319.600 C 152.508 319.600,152.800 319.728,152.800 320.367 C 152.800 322.310,153.023 322.400,157.819 322.400 L 162.352 322.400 162.476 323.900 L 162.600 325.400 168.700 325.400 L 174.801 325.400 174.800 326.326 C 174.799 328.969,173.193 328.800,198.334 328.800 C 222.700 328.800,222.000 328.861,222.000 326.729 L 222.000 325.617 229.700 325.509 L 237.400 325.400 237.524 323.900 L 237.648 322.400 240.601 322.400 C 244.044 322.400,244.057 322.386,244.109 318.882 C 244.131 317.407,244.215 316.857,244.296 317.659 C 244.467 319.349,244.976 319.586,248.450 319.595 C 252.315 319.604,253.146 319.297,253.435 317.752 C 253.682 316.438,253.743 316.400,255.618 316.400 C 258.339 316.400,259.476 315.875,259.783 314.476 C 259.976 313.597,260.360 313.213,261.320 312.939 C 262.375 312.639,262.622 312.349,262.725 311.287 L 262.851 310.000 265.252 310.000 C 268.283 310.000,269.200 309.532,269.200 307.986 C 269.200 306.954,269.345 306.800,270.320 306.800 C 271.741 306.800,272.400 306.141,272.400 304.720 C 272.400 303.745,272.554 303.600,273.586 303.600 C 274.839 303.600,275.600 302.713,275.600 301.252 C 275.600 300.640,275.908 300.421,276.900 300.325 C 278.030 300.216,278.248 300.006,278.567 298.716 L 278.933 297.232 281.753 297.116 C 284.534 297.002,284.578 296.983,284.931 295.745 C 285.196 294.818,285.618 294.396,286.545 294.131 C 287.783 293.778,287.802 293.734,287.916 290.953 L 288.032 288.133 289.516 287.767 C 290.806 287.448,291.016 287.230,291.125 286.100 C 291.233 284.981,291.403 284.800,292.345 284.800 C 293.742 284.800,294.400 284.134,294.400 282.720 C 294.400 281.760,294.560 281.600,295.520 281.600 C 297.220 281.600,297.600 280.928,297.600 277.920 C 297.600 275.208,297.603 275.200,298.720 275.200 C 300.074 275.200,300.800 274.550,300.800 273.338 C 300.800 272.629,301.091 272.382,302.163 272.181 C 303.720 271.889,303.986 271.297,303.995 268.118 C 304.000 266.069,304.022 266.032,305.357 265.782 C 306.859 265.500,307.200 264.681,307.200 261.350 C 307.200 259.669,307.248 259.600,308.410 259.600 C 310.034 259.600,310.400 258.532,310.400 253.799 L 310.400 250.051 311.700 249.925 L 313.000 249.800 313.111 243.929 C 313.220 238.099,313.215 238.057,312.311 237.884 C 311.810 237.788,312.177 237.684,313.126 237.654 C 316.598 237.545,316.400 238.311,316.400 224.986 L 316.400 213.200 314.800 213.200 C 313.644 213.200,313.200 213.033,313.200 212.600 C 313.200 212.052,314.390 211.774,315.900 211.970 C 316.290 212.021,316.400 209.402,316.400 200.032 C 316.400 186.902,316.455 187.200,314.037 187.200 C 313.256 187.200,313.216 186.937,313.110 181.100 L 313.000 175.000 311.743 174.878 L 310.487 174.756 310.336 170.359 C 310.177 165.698,309.969 165.219,308.100 165.206 C 307.305 165.201,307.200 164.996,307.200 163.450 C 307.200 160.625,306.792 159.200,305.983 159.200 C 304.358 159.200,304.000 158.764,304.000 156.783 C 304.000 153.870,303.466 152.800,302.010 152.800 L 300.800 152.800 300.800 150.374 C 300.800 147.318,300.335 146.400,298.786 146.400 C 297.754 146.400,297.600 146.255,297.600 145.280 C 297.600 143.859,296.941 143.200,295.520 143.200 C 294.545 143.200,294.400 143.046,294.400 142.014 C 294.400 140.758,293.513 140.000,292.044 140.000 C 291.317 140.000,291.223 139.705,291.118 137.100 L 291.000 134.200 289.523 134.077 C 288.135 133.962,288.038 133.865,287.923 132.477 C 287.812 131.142,287.678 130.988,286.534 130.877 C 285.440 130.771,285.222 130.554,284.922 129.277 C 284.623 128.005,284.401 127.783,283.322 127.677 C 282.242 127.571,282.021 127.350,281.722 126.077 C 281.425 124.815,281.197 124.582,280.153 124.480 C 279.113 124.377,278.877 124.139,278.566 122.880 C 278.248 121.594,278.029 121.384,276.900 121.275 C 275.835 121.172,275.600 120.978,275.600 120.203 C 275.600 118.573,274.604 118.000,271.771 118.000 L 269.200 118.000 269.200 116.400 C 269.200 114.914,269.280 114.800,270.320 114.800 C 272.020 114.800,272.400 114.128,272.400 111.120 L 272.400 108.400 273.757 108.400 C 275.518 108.400,275.600 108.131,275.600 102.341 C 275.600 95.788,275.777 95.999,270.286 96.006 C 267.589 96.010,266.019 96.151,266.349 96.360 C 266.651 96.551,266.810 96.953,266.703 97.254 C 266.596 97.554,266.670 98.115,266.868 98.500 C 267.135 99.019,267.069 99.200,266.614 99.200 C 266.056 99.200,265.818 98.722,265.958 97.884 C 266.190 96.497,265.133 96.000,261.886 95.968 C 260.079 95.951,258.819 95.848,259.087 95.739 C 259.355 95.631,259.689 94.935,259.828 94.193 C 260.044 93.038,260.262 92.827,261.340 92.722 C 262.481 92.612,262.612 92.458,262.724 91.100 C 262.830 89.826,262.990 89.600,263.791 89.600 C 265.991 89.600,265.964 89.697,265.980 81.806 C 265.993 75.501,265.908 74.450,265.365 74.242 C 264.145 73.774,254.584 73.976,254.080 74.480 M209.925 97.903 C 210.026 98.947,209.905 99.200,209.305 99.200 C 208.724 99.200,208.550 98.885,208.518 97.778 C 208.464 95.863,209.739 95.977,209.925 97.903 M167.739 179.176 C 168.585 179.373,169.688 179.919,170.189 180.390 C 170.690 180.861,172.050 181.497,173.210 181.803 C 174.391 182.114,175.866 182.867,176.560 183.513 C 177.242 184.148,178.568 184.885,179.507 185.152 C 180.445 185.418,181.795 186.131,182.507 186.736 C 183.218 187.340,184.297 188.148,184.905 188.530 C 186.228 189.362,189.445 194.112,189.829 195.800 C 189.979 196.460,190.607 197.540,191.225 198.200 C 191.889 198.909,192.632 200.424,193.040 201.900 C 193.420 203.275,193.877 204.400,194.055 204.400 C 195.527 204.400,195.798 206.765,195.909 220.600 C 196.025 234.939,195.954 235.599,194.200 236.560 C 193.760 236.801,192.837 237.396,192.148 237.883 C 191.459 238.370,189.929 239.201,188.748 239.730 C 185.087 241.370,180.544 246.509,180.180 249.423 C 179.517 254.728,180.253 259.272,182.211 261.960 C 182.756 262.709,183.388 264.014,183.617 264.861 C 183.856 265.750,184.457 266.681,185.036 267.060 C 185.589 267.423,186.288 268.187,186.591 268.759 C 186.894 269.332,187.830 270.452,188.671 271.248 C 189.512 272.045,190.920 273.378,191.800 274.211 C 194.578 276.841,205.941 277.435,207.292 275.021 C 207.487 274.673,207.921 274.166,208.256 273.894 C 210.985 271.685,213.092 269.217,213.530 267.718 C 213.800 266.793,214.469 265.504,215.016 264.854 C 215.562 264.205,216.281 262.904,216.613 261.964 C 216.944 261.024,217.686 259.638,218.262 258.884 C 220.272 256.248,220.575 247.988,218.718 246.468 C 218.269 246.101,217.699 245.560,217.451 245.267 C 215.166 242.564,212.677 240.379,211.081 239.675 C 210.026 239.209,208.712 238.474,208.162 238.042 C 207.612 237.609,206.612 237.134,205.939 236.987 C 205.149 236.813,204.483 236.289,204.058 235.509 C 203.696 234.843,202.995 233.801,202.500 233.192 C 201.034 231.388,201.114 214.633,202.602 211.834 C 203.190 210.728,203.849 208.441,204.194 206.305 C 204.647 203.508,205.010 202.421,205.757 201.630 C 206.293 201.064,206.926 199.862,207.164 198.960 C 207.403 198.059,208.043 196.709,208.586 195.960 C 209.129 195.212,209.890 194.150,210.277 193.600 C 211.112 192.414,215.142 188.312,216.000 187.775 C 216.330 187.569,216.795 187.047,217.034 186.615 C 217.272 186.184,218.081 185.488,218.831 185.069 C 219.581 184.651,220.685 183.895,221.285 183.390 C 221.884 182.885,223.326 182.160,224.488 181.777 C 225.649 181.395,227.016 180.759,227.524 180.364 C 229.265 179.012,232.158 178.721,242.400 178.863 C 252.591 179.005,252.415 178.979,255.200 180.803 C 255.530 181.019,256.856 181.578,258.146 182.044 C 259.436 182.510,260.839 183.239,261.264 183.664 C 261.689 184.089,262.598 184.751,263.285 185.134 C 263.971 185.517,264.728 186.184,264.966 186.615 C 265.205 187.047,265.659 187.563,265.976 187.763 C 268.911 189.609,274.503 197.002,274.964 199.645 C 275.102 200.440,275.573 201.413,276.010 201.809 C 277.133 202.826,277.515 204.619,277.958 210.966 C 278.297 215.812,278.467 216.691,279.273 217.766 C 280.196 218.994,280.200 219.057,280.200 231.400 L 280.200 243.800 279.257 245.056 C 278.402 246.195,278.283 246.904,277.973 252.656 C 277.522 261.052,277.318 262.341,276.171 264.021 C 275.497 265.008,275.079 266.396,274.805 268.562 C 274.493 271.021,274.154 272.028,273.205 273.320 C 272.542 274.220,271.998 275.237,271.996 275.579 C 271.990 276.500,270.097 280.400,269.656 280.400 C 269.447 280.400,269.011 281.175,268.689 282.122 C 268.072 283.932,265.331 288.166,263.459 290.200 C 261.495 292.335,256.141 297.719,252.489 301.233 C 250.319 303.321,247.114 305.525,245.334 306.153 C 244.481 306.454,243.078 307.178,242.216 307.763 C 241.355 308.348,239.888 309.018,238.958 309.252 C 238.027 309.487,236.857 310.113,236.358 310.645 C 235.843 311.193,234.293 311.955,232.772 312.408 C 231.298 312.847,229.871 313.474,229.600 313.800 C 228.937 314.599,226.981 315.071,222.200 315.585 C 219.371 315.889,217.886 316.244,217.127 316.800 C 213.943 319.128,182.862 319.228,180.309 316.918 C 179.922 316.567,177.864 315.951,175.735 315.548 C 173.167 315.062,171.382 314.480,170.428 313.819 C 169.557 313.216,167.754 312.586,165.856 312.223 C 163.774 311.825,162.108 311.217,160.892 310.412 C 159.886 309.745,158.779 309.192,158.431 309.183 C 158.084 309.173,157.080 308.728,156.200 308.193 C 155.320 307.658,154.060 306.922,153.400 306.558 C 152.740 306.193,150.940 304.595,149.400 303.007 C 147.638 301.189,146.057 299.941,145.134 299.640 C 142.383 298.740,137.600 293.593,137.600 291.532 C 137.600 291.141,137.073 290.548,136.428 290.215 C 135.784 289.881,135.143 289.251,135.004 288.813 C 134.865 288.376,134.130 287.274,133.371 286.365 C 132.611 285.455,131.796 283.943,131.559 283.004 C 131.267 281.843,130.825 281.158,130.179 280.863 C 129.656 280.625,128.727 279.499,128.114 278.361 C 127.501 277.223,126.762 275.860,126.471 275.332 C 126.180 274.804,125.665 272.983,125.325 271.286 C 124.953 269.423,124.382 267.844,123.886 267.302 C 123.321 266.684,122.847 265.165,122.369 262.435 C 121.902 259.773,121.376 258.065,120.771 257.246 C 118.543 254.233,118.549 211.360,120.777 208.345 C 121.251 207.705,121.922 205.744,122.281 203.954 C 122.638 202.176,123.333 200.127,123.825 199.401 C 124.317 198.676,124.845 197.687,124.999 197.203 C 125.152 196.720,127.144 194.496,129.424 192.262 C 134.529 187.261,134.578 187.213,135.693 186.071 C 137.749 183.965,140.144 182.415,142.306 181.792 C 143.568 181.429,144.960 180.801,145.400 180.398 C 146.996 178.935,162.942 178.063,167.739 179.176 M240.188 207.458 C 239.780 207.756,239.119 208.000,238.718 208.000 C 238.317 208.000,237.677 208.180,237.295 208.400 C 236.913 208.620,236.105 208.975,235.500 209.190 C 234.863 209.416,234.398 209.879,234.396 210.290 C 234.391 211.283,232.520 215.200,232.051 215.200 C 230.345 215.200,231.010 221.479,232.829 222.554 C 233.471 222.933,234.106 223.683,234.241 224.221 C 234.376 224.760,234.713 225.200,234.989 225.200 C 235.837 225.200,237.600 226.815,237.600 227.591 C 237.600 228.168,238.008 228.374,239.500 228.555 C 244.026 229.102,247.600 228.769,247.600 227.800 C 247.600 227.509,248.185 226.803,248.900 226.232 C 249.615 225.660,250.380 224.998,250.600 224.761 C 250.820 224.523,251.661 223.631,252.469 222.779 C 255.260 219.836,255.049 213.622,252.105 212.054 C 251.612 211.792,251.094 211.116,250.952 210.552 C 250.653 209.359,247.925 208.000,245.830 208.000 C 245.114 208.000,243.717 207.756,242.728 207.458 C 241.215 207.003,240.810 207.003,240.188 207.458 M156.200 208.022 C 150.776 208.453,149.864 208.940,149.030 211.855 C 148.632 213.243,148.062 214.582,147.764 214.830 C 146.752 215.669,146.624 217.946,147.499 219.539 C 147.940 220.342,148.594 221.900,148.952 223.000 C 149.418 224.429,149.946 225.195,150.802 225.681 C 151.461 226.056,152.200 226.801,152.444 227.336 C 153.446 229.536,161.610 229.402,162.895 227.164 C 163.264 226.520,164.008 225.825,164.547 225.620 C 165.086 225.415,165.843 224.712,166.229 224.058 C 166.616 223.404,167.338 222.683,167.834 222.457 C 169.934 221.500,169.650 214.145,167.439 212.206 C 166.682 211.543,165.958 210.632,165.830 210.183 C 165.393 208.640,160.956 207.645,156.200 208.022 M175.200 323.200 C 175.200 323.640,175.036 324.000,174.835 324.000 C 174.546 324.000,174.516 323.328,174.769 322.500 C 174.901 322.071,175.200 322.557,175.200 323.200 " stroke="none" fill="#fbfbfb" fill-rule="evenodd"></path> <path id="path3" d="M156.115 179.896 C 157.388 179.976,159.368 179.975,160.515 179.894 C 161.662 179.814,160.620 179.749,158.200 179.750 C 155.780 179.751,154.842 179.816,156.115 179.896 M241.091 179.889 C 241.801 179.977,243.061 179.979,243.891 179.892 C 244.721 179.805,244.140 179.733,242.600 179.731 C 241.060 179.729,240.381 179.800,241.091 179.889 M148.200 180.778 C 147.320 181.195,146.747 181.550,146.926 181.568 C 147.106 181.585,147.609 181.409,148.045 181.176 C 148.481 180.943,149.594 180.602,150.519 180.420 C 151.925 180.142,152.004 180.082,151.000 180.054 C 150.340 180.036,149.080 180.362,148.200 180.778 M165.000 180.377 C 165.880 180.573,167.480 181.112,168.557 181.576 C 169.633 182.040,170.583 182.350,170.669 182.265 C 170.990 181.943,166.553 180.294,165.009 180.161 L 163.400 180.022 165.000 180.377 M233.300 180.287 C 233.905 180.378,234.895 180.378,235.500 180.287 C 236.105 180.195,235.610 180.120,234.400 180.120 C 233.190 180.120,232.695 180.195,233.300 180.287 M248.800 180.373 C 249.570 180.528,251.259 181.053,252.553 181.541 C 253.847 182.029,254.976 182.357,255.062 182.271 C 255.352 181.981,249.412 179.996,248.400 180.044 C 247.625 180.081,247.715 180.155,248.800 180.373 M228.888 181.299 C 227.726 181.745,226.848 182.181,226.935 182.269 C 227.023 182.357,228.244 181.985,229.648 181.442 C 231.051 180.900,231.930 180.463,231.600 180.473 C 231.270 180.482,230.050 180.854,228.888 181.299 M224.326 183.214 C 223.515 183.642,222.726 184.196,222.573 184.444 C 222.359 184.791,225.478 183.216,226.367 182.529 C 226.915 182.105,225.571 182.556,224.326 183.214 M139.551 184.748 C 137.928 185.819,135.970 187.386,135.200 188.230 C 133.613 189.970,134.633 189.314,136.802 187.200 C 137.591 186.430,139.395 185.125,140.810 184.300 C 142.224 183.475,143.184 182.800,142.942 182.800 C 142.700 182.800,141.175 183.676,139.551 184.748 M258.753 184.100 C 261.470 185.744,269.285 192.795,270.413 194.621 C 270.882 195.379,271.358 196.000,271.472 196.000 C 272.820 196.000,263.251 186.297,260.468 184.842 C 259.880 184.535,258.971 183.950,258.446 183.542 C 257.921 183.134,257.292 182.800,257.048 182.800 C 256.804 182.800,257.571 183.385,258.753 184.100 M175.029 184.389 C 175.893 185.043,176.762 185.583,176.960 185.589 C 177.158 185.595,176.575 185.060,175.663 184.400 C 173.516 182.844,172.975 182.835,175.029 184.389 M220.400 185.649 C 219.630 186.114,218.280 187.230,217.400 188.128 C 215.669 189.896,216.424 189.470,219.026 187.211 C 219.921 186.435,221.001 185.586,221.426 185.324 C 221.852 185.061,222.110 184.837,222.000 184.825 C 221.890 184.813,221.170 185.184,220.400 185.649 M179.400 186.796 C 182.237 188.670,183.735 189.579,182.891 188.915 C 180.148 186.757,179.045 186.000,178.645 186.001 C 178.400 186.002,178.740 186.360,179.400 186.796 M131.000 192.246 C 129.680 193.688,128.106 195.398,127.502 196.045 C 126.344 197.288,124.623 200.356,124.918 200.652 C 125.014 200.747,125.333 200.245,125.627 199.535 C 126.154 198.262,128.168 195.723,131.127 192.600 C 131.961 191.720,132.880 190.685,133.170 190.300 C 134.234 188.889,133.340 189.690,131.000 192.246 M185.092 191.000 C 185.732 191.880,186.663 193.275,187.161 194.100 C 187.658 194.925,188.146 195.600,188.245 195.600 C 188.629 195.600,186.529 192.272,185.264 190.875 L 183.927 189.400 185.092 191.000 M213.550 191.700 C 211.481 194.111,208.251 198.784,208.489 199.022 C 208.577 199.110,209.358 198.062,210.224 196.691 C 211.091 195.321,212.435 193.480,213.211 192.600 C 214.981 190.594,215.748 189.600,215.525 189.600 C 215.430 189.600,214.542 190.545,213.550 191.700 M188.807 197.031 C 188.800 197.490,191.154 201.200,191.452 201.200 C 191.549 201.200,191.431 200.885,191.191 200.500 C 190.950 200.115,190.317 199.080,189.783 198.200 C 189.250 197.320,188.810 196.794,188.807 197.031 M273.297 199.540 C 274.014 200.856,274.657 201.875,274.727 201.806 C 274.928 201.606,272.860 197.684,272.404 197.403 C 272.178 197.263,272.580 198.225,273.297 199.540 M206.840 202.374 C 206.134 203.905,205.479 205.843,205.384 206.679 L 205.212 208.200 205.598 206.709 C 205.810 205.889,206.529 204.016,207.195 202.546 C 207.862 201.076,208.343 199.810,208.265 199.732 C 208.187 199.654,207.546 200.843,206.840 202.374 M124.065 202.217 C 123.809 202.778,123.607 203.454,123.616 203.719 C 123.624 203.983,123.897 203.588,124.222 202.839 C 124.905 201.265,124.761 200.690,124.065 202.217 M275.023 203.600 C 275.785 206.615,276.346 208.137,276.351 207.200 C 276.353 206.650,275.999 205.390,275.563 204.400 C 275.127 203.410,274.884 203.050,275.023 203.600 M193.051 205.974 C 193.427 207.439,194.371 209.486,194.355 208.800 C 194.347 208.470,193.994 207.480,193.571 206.600 C 193.148 205.720,192.914 205.438,193.051 205.974 M242.100 205.476 C 242.485 205.576,243.115 205.576,243.500 205.476 C 243.885 205.375,243.570 205.293,242.800 205.293 C 242.030 205.293,241.715 205.375,242.100 205.476 M154.000 205.950 C 152.761 206.266,148.936 208.257,148.636 208.742 C 148.514 208.939,149.588 208.477,151.022 207.716 C 152.823 206.759,154.459 206.234,156.315 206.018 C 158.772 205.732,158.830 205.705,157.000 205.700 C 155.900 205.697,154.550 205.809,154.000 205.950 M236.600 206.817 C 235.500 207.464,234.780 207.992,235.000 207.990 C 235.220 207.988,236.300 207.452,237.400 206.800 C 238.500 206.148,239.220 205.620,239.000 205.627 C 238.780 205.634,237.700 206.170,236.600 206.817 M245.639 205.973 C 247.864 206.408,250.914 208.385,252.951 210.713 C 253.968 211.876,254.799 212.686,254.798 212.513 C 254.786 210.771,247.617 205.556,245.356 205.646 C 244.296 205.688,244.319 205.715,245.639 205.973 M162.000 206.192 C 162.000 206.297,162.765 206.767,163.700 207.235 C 165.707 208.241,169.057 211.586,169.826 213.353 C 170.124 214.039,170.369 214.330,170.370 214.000 C 170.374 212.525,166.745 208.495,164.050 206.983 C 162.229 205.961,162.000 205.872,162.000 206.192 M233.355 209.012 C 232.990 209.569,232.764 210.098,232.853 210.187 C 232.942 210.276,233.318 209.820,233.689 209.174 C 234.514 207.736,234.269 207.617,233.355 209.012 M204.650 209.650 C 204.317 211.317,204.640 211.640,205.000 210.000 C 205.152 209.309,205.193 208.659,205.091 208.558 C 204.989 208.456,204.791 208.947,204.650 209.650 M276.524 210.600 C 276.526 211.920,276.601 212.412,276.690 211.693 C 276.779 210.974,276.777 209.894,276.686 209.293 C 276.595 208.692,276.522 209.280,276.524 210.600 M147.446 211.096 C 147.073 211.923,146.416 213.230,145.985 214.000 C 145.465 214.928,145.219 216.074,145.255 217.400 L 145.309 219.400 145.605 217.000 C 145.925 214.406,146.304 213.200,146.799 213.200 C 147.148 213.200,148.523 209.990,148.279 209.746 C 148.194 209.661,147.820 210.268,147.446 211.096 M194.546 213.400 C 194.547 215.600,194.614 216.449,194.695 215.287 C 194.776 214.124,194.776 212.324,194.693 211.287 C 194.611 210.249,194.545 211.200,194.546 213.400 M121.228 212.290 C 119.871 218.740,121.164 259.770,122.676 258.257 C 122.770 258.163,122.538 257.032,122.160 255.743 C 121.284 252.755,120.811 216.656,121.596 212.661 C 121.849 211.375,121.979 210.245,121.885 210.151 C 121.790 210.057,121.495 211.020,121.228 212.290 M231.491 212.560 C 230.893 213.504,230.310 214.889,230.194 215.638 C 229.998 216.904,230.022 216.885,230.529 215.368 C 230.830 214.471,231.496 213.168,232.009 212.473 C 232.523 211.778,232.861 211.127,232.760 211.027 C 232.659 210.926,232.088 211.616,231.491 212.560 M203.459 214.288 C 203.321 215.119,203.241 219.400,203.281 223.800 L 203.353 231.800 203.585 222.400 C 203.713 217.230,203.793 212.949,203.763 212.888 C 203.733 212.826,203.596 213.456,203.459 214.288 M170.528 217.200 C 170.528 218.630,170.601 219.215,170.689 218.500 C 170.778 217.785,170.778 216.615,170.689 215.900 C 170.601 215.185,170.528 215.770,170.528 217.200 M229.701 218.600 C 229.705 219.480,229.787 219.793,229.883 219.295 C 229.979 218.798,229.975 218.078,229.875 217.695 C 229.775 217.313,229.696 217.720,229.701 218.600 M277.907 226.111 C 277.965 230.780,278.066 235.590,278.131 236.800 C 278.196 238.010,278.270 234.500,278.296 229.000 C 278.322 223.500,278.221 218.690,278.072 218.311 C 277.922 217.932,277.848 221.442,277.907 226.111 M146.009 220.913 C 145.982 221.859,148.349 225.622,149.855 227.028 C 150.815 227.923,151.600 228.527,151.600 228.369 C 151.600 228.212,150.939 227.502,150.130 226.793 C 149.322 226.083,148.066 224.399,147.339 223.051 C 146.613 221.703,146.014 220.741,146.009 220.913 M166.041 225.945 C 163.974 228.005,162.624 229.503,163.041 229.273 C 163.956 228.770,170.233 222.471,169.979 222.312 C 169.880 222.250,168.109 223.885,166.041 225.945 M230.400 222.367 C 230.400 222.505,231.970 224.144,233.888 226.009 C 235.806 227.874,237.291 229.272,237.188 229.115 C 236.751 228.452,230.400 222.138,230.400 222.367 M251.000 226.094 C 249.020 228.116,248.390 228.891,249.600 227.816 C 251.782 225.879,253.292 224.371,254.349 223.074 C 255.593 221.547,254.394 222.628,251.000 226.094 M156.700 230.289 C 157.415 230.378,158.585 230.378,159.300 230.289 C 160.015 230.201,159.430 230.128,158.000 230.128 C 156.570 230.128,155.985 230.201,156.700 230.289 M241.091 230.289 C 241.801 230.377,243.061 230.379,243.891 230.292 C 244.721 230.205,244.140 230.133,242.600 230.131 C 241.060 230.129,240.381 230.200,241.091 230.289 M194.251 233.174 C 194.049 234.433,193.677 234.991,192.504 235.787 C 191.685 236.344,191.174 236.800,191.369 236.800 C 192.916 236.800,195.632 232.698,194.701 231.768 C 194.594 231.661,194.391 232.294,194.251 233.174 M204.414 233.918 C 204.396 234.590,206.210 236.404,206.882 236.386 C 207.167 236.378,206.970 236.133,206.444 235.842 C 205.918 235.550,205.250 234.882,204.958 234.356 C 204.667 233.830,204.422 233.633,204.414 233.918 M188.100 238.042 C 186.945 238.715,186.000 239.346,186.000 239.443 C 186.000 239.645,187.895 238.696,189.748 237.566 C 191.821 236.302,190.362 236.723,188.100 238.042 M210.200 237.586 C 210.860 238.056,212.211 238.863,213.203 239.378 C 214.708 240.160,216.754 242.168,219.922 245.973 C 220.373 246.514,220.391 246.491,220.054 245.800 C 219.279 244.211,214.151 239.373,212.000 238.202 C 209.212 236.685,208.679 236.502,210.200 237.586 M182.908 241.900 C 180.669 244.217,179.190 246.261,179.218 247.000 C 179.227 247.220,179.541 246.826,179.917 246.124 C 180.293 245.422,181.719 243.667,183.086 242.224 C 184.454 240.781,185.473 239.600,185.352 239.600 C 185.230 239.600,184.131 240.635,182.908 241.900 M278.059 242.200 C 278.020 242.860,277.896 243.850,277.783 244.400 L 277.577 245.400 278.008 244.414 C 278.244 243.872,278.368 242.882,278.283 242.214 L 278.128 241.000 278.059 242.200 M178.403 249.388 C 177.868 251.300,178.118 256.121,178.838 257.742 C 179.182 258.519,179.199 258.502,179.018 257.566 C 178.438 254.569,178.332 250.819,178.788 249.436 C 179.059 248.617,179.197 247.863,179.095 247.762 C 178.993 247.660,178.682 248.392,178.403 249.388 M276.531 253.800 C 276.533 255.340,276.605 255.921,276.692 255.091 C 276.779 254.261,276.777 253.001,276.689 252.291 C 276.600 251.581,276.529 252.260,276.531 253.800 M220.055 257.935 C 219.771 259.045,219.297 260.153,219.003 260.397 C 218.381 260.914,216.675 264.408,216.923 264.657 C 217.016 264.750,217.325 264.235,217.610 263.513 C 217.895 262.791,218.522 261.660,219.003 261.000 C 219.972 259.672,220.945 257.036,220.718 256.355 C 220.638 256.114,220.340 256.825,220.055 257.935 M276.046 258.029 C 276.021 258.595,275.710 259.909,275.355 260.950 C 275.000 261.992,274.791 262.925,274.891 263.024 C 275.216 263.349,276.490 258.558,276.289 257.769 C 276.138 257.178,276.082 257.238,276.046 258.029 M179.600 260.625 C 179.600 260.831,180.320 262.170,181.200 263.600 C 182.080 265.030,182.800 266.055,182.800 265.878 C 182.800 265.701,182.080 264.362,181.200 262.903 C 180.320 261.444,179.600 260.419,179.600 260.625 M123.636 262.600 C 123.636 263.428,124.715 266.110,124.761 265.400 C 124.776 265.180,124.529 264.280,124.212 263.400 C 123.895 262.520,123.635 262.160,123.636 262.600 M182.800 266.684 C 182.800 267.497,189.960 275.320,191.400 276.081 C 191.840 276.313,190.657 274.995,188.771 273.152 C 186.885 271.308,184.770 269.008,184.071 268.040 C 183.372 267.072,182.800 266.462,182.800 266.684 M213.289 270.717 L 212.379 272.200 213.389 271.078 C 213.945 270.460,214.400 269.785,214.400 269.578 C 214.400 268.990,214.265 269.128,213.289 270.717 M272.075 271.819 C 270.870 274.300,271.005 274.647,272.246 272.261 C 272.801 271.194,273.187 270.253,273.103 270.170 C 273.019 270.086,272.557 270.828,272.075 271.819 M126.406 271.060 C 126.392 272.119,129.729 278.646,131.011 280.065 C 131.775 280.910,132.400 281.475,132.400 281.320 C 132.400 281.165,131.866 280.487,131.214 279.814 C 130.561 279.141,129.214 276.792,128.220 274.595 C 127.226 272.398,126.410 270.807,126.406 271.060 M209.421 274.671 C 208.112 275.904,207.392 276.722,207.821 276.487 C 208.580 276.073,212.348 272.386,211.983 272.415 C 211.882 272.423,210.729 273.438,209.421 274.671 M270.494 275.500 C 270.283 276.105,269.546 277.490,268.855 278.578 C 268.165 279.666,267.600 280.735,267.600 280.953 C 267.600 281.492,270.622 276.428,270.973 275.300 C 271.376 274.009,270.953 274.186,270.494 275.500 M202.600 277.600 L 201.000 277.886 202.400 277.903 C 203.170 277.913,204.250 277.776,204.800 277.600 C 206.085 277.188,204.899 277.188,202.600 277.600 M265.437 284.604 C 264.371 286.234,263.383 287.620,263.242 287.684 C 263.102 287.748,262.299 288.745,261.459 289.900 C 260.619 291.055,259.812 292.000,259.666 292.000 C 259.520 292.000,258.605 292.945,257.634 294.100 L 255.867 296.200 257.770 294.400 C 259.833 292.448,263.713 287.820,265.362 285.346 C 265.928 284.496,266.689 283.390,267.052 282.889 C 267.415 282.388,267.636 281.903,267.543 281.810 C 267.451 281.718,266.503 282.975,265.437 284.604 M132.418 282.200 C 132.410 282.420,132.718 283.073,133.102 283.652 C 136.211 288.340,136.816 289.200,137.001 289.200 C 137.249 289.200,135.341 286.154,134.370 285.000 C 134.000 284.560,133.413 283.660,133.065 283.000 C 132.717 282.340,132.426 281.980,132.418 282.200 M143.400 296.970 C 144.060 297.542,144.960 298.204,145.400 298.441 C 145.840 298.677,145.660 298.403,145.000 297.830 C 144.340 297.258,143.440 296.596,143.000 296.359 C 142.560 296.123,142.740 296.397,143.400 296.970 M254.703 296.821 C 254.427 297.272,253.241 298.369,252.069 299.257 C 250.898 300.145,250.032 300.965,250.146 301.079 C 250.415 301.349,254.249 298.063,255.021 296.900 C 255.350 296.405,255.526 296.000,255.413 296.000 C 255.299 296.000,254.980 296.369,254.703 296.821 M148.423 300.212 C 149.977 302.397,158.072 308.461,158.656 307.877 C 158.734 307.799,157.587 307.029,156.107 306.167 C 154.627 305.305,152.162 303.430,150.631 302.000 C 149.099 300.570,148.106 299.765,148.423 300.212 M246.930 303.313 C 245.572 304.237,244.517 305.050,244.586 305.120 C 244.656 305.189,245.936 304.426,247.431 303.423 C 248.926 302.420,249.980 301.607,249.774 301.616 C 249.568 301.624,248.289 302.388,246.930 303.313 M241.181 306.590 C 238.339 308.401,238.825 308.409,241.828 306.600 C 243.107 305.830,243.975 305.200,243.758 305.200 C 243.541 305.200,242.381 305.825,241.181 306.590 M235.295 309.471 C 233.928 310.280,232.886 311.020,232.981 311.115 C 233.076 311.210,233.691 310.905,234.348 310.437 C 235.005 309.969,236.320 309.234,237.271 308.802 C 238.222 308.371,238.726 308.014,238.391 308.009 C 238.056 308.004,236.663 308.662,235.295 309.471 M162.800 309.800 C 163.790 310.330,164.780 310.764,165.000 310.764 C 165.220 310.764,164.590 310.330,163.600 309.800 C 162.610 309.270,161.620 308.836,161.400 308.836 C 161.180 308.836,161.810 309.270,162.800 309.800 M228.200 312.450 C 227.100 312.897,225.750 313.428,225.200 313.630 L 224.200 313.997 225.200 313.831 C 226.538 313.608,231.563 311.642,230.800 311.640 C 230.470 311.638,229.300 312.003,228.200 312.450 M173.000 313.426 C 174.100 313.956,175.270 314.388,175.600 314.385 C 175.930 314.383,175.120 313.936,173.800 313.392 C 170.780 312.148,170.382 312.165,173.000 313.426 M180.041 315.352 C 180.560 315.919,186.827 316.840,191.200 316.992 L 195.800 317.151 191.600 316.807 C 187.640 316.483,183.039 315.851,180.800 315.323 C 180.250 315.194,179.909 315.206,180.041 315.352 M212.400 316.217 C 211.190 316.495,210.650 316.737,211.200 316.754 C 211.750 316.771,213.100 316.534,214.200 316.228 C 216.681 315.538,215.386 315.530,212.400 316.217 M205.511 317.093 C 206.451 317.178,207.891 317.177,208.711 317.091 C 209.530 317.005,208.760 316.936,207.000 316.937 C 205.240 316.939,204.570 317.009,205.511 317.093 M198.707 317.490 C 199.426 317.579,200.506 317.577,201.107 317.486 C 201.708 317.395,201.120 317.322,199.800 317.324 C 198.480 317.326,197.988 317.401,198.707 317.490 " stroke="none" fill="#7c7c7c" fill-rule="evenodd"></path> <path id="path4" d="M150.600 180.396 C 145.926 181.427,139.115 184.903,136.000 187.847 C 127.062 196.296,125.268 198.902,123.091 206.600 C 121.150 213.467,121.126 213.839,121.309 234.200 L 121.482 253.400 122.908 258.600 C 125.866 269.389,129.251 278.092,131.137 279.761 C 131.610 280.179,132.446 281.439,132.994 282.561 C 133.543 283.682,134.800 285.680,135.787 287.000 C 136.775 288.320,137.939 289.940,138.374 290.600 C 140.101 293.221,142.189 296.000,142.432 296.000 C 142.572 296.000,143.478 296.628,144.444 297.396 C 145.410 298.164,146.410 298.794,146.666 298.796 C 146.923 298.798,148.558 300.109,150.301 301.709 C 154.875 305.909,161.368 309.462,167.748 311.257 C 169.259 311.682,171.526 312.464,172.786 312.994 C 182.675 317.156,203.649 318.340,216.200 315.444 C 218.620 314.886,221.860 314.163,223.400 313.839 C 227.509 312.974,232.667 311.079,235.376 309.439 C 236.684 308.648,238.034 307.995,238.376 307.990 C 238.719 307.984,239.982 307.354,241.181 306.590 C 242.381 305.825,243.551 305.200,243.781 305.199 C 245.657 305.195,258.430 294.009,261.822 289.400 C 262.470 288.520,263.197 287.620,263.439 287.400 C 264.167 286.736,266.466 283.152,267.801 280.600 C 268.491 279.280,269.355 277.660,269.721 277.000 C 271.480 273.828,273.337 269.012,274.233 265.295 C 274.778 263.038,275.405 260.712,275.628 260.128 C 275.850 259.543,276.214 256.620,276.436 253.632 C 276.658 250.644,277.120 247.030,277.463 245.600 C 278.320 242.018,278.247 220.714,277.364 216.908 C 277.041 215.516,276.614 212.656,276.415 210.551 C 275.220 197.919,265.891 186.344,253.178 181.720 L 249.000 180.200 240.800 180.253 C 232.628 180.307,232.589 180.311,229.200 181.577 C 217.292 186.027,207.810 196.545,205.406 207.970 C 205.100 209.427,204.624 211.154,204.350 211.809 C 204.019 212.597,203.795 216.083,203.687 222.118 C 203.487 233.260,203.942 234.948,207.475 236.193 C 208.534 236.566,209.760 237.071,210.200 237.315 C 210.640 237.560,211.932 238.270,213.072 238.895 C 215.078 239.993,219.316 244.326,220.401 246.386 C 221.772 248.990,221.107 258.500,219.422 260.383 C 218.930 260.932,217.442 263.640,214.576 269.200 C 210.565 276.982,200.994 280.287,192.745 276.738 C 190.504 275.774,184.098 269.279,182.947 266.804 C 182.589 266.032,181.704 264.410,180.982 263.200 C 179.176 260.175,178.297 256.833,178.246 252.800 C 178.154 245.557,181.338 241.643,191.800 236.143 C 194.562 234.691,194.608 234.450,194.540 221.537 L 194.480 210.075 192.975 205.737 C 192.148 203.352,191.041 200.815,190.515 200.100 C 189.989 199.385,189.285 198.144,188.950 197.342 C 186.875 192.377,183.457 188.894,177.834 186.016 C 176.533 185.350,175.183 184.552,174.834 184.243 C 174.485 183.933,172.220 182.918,169.800 181.986 L 165.400 180.291 158.800 180.167 C 155.170 180.099,151.480 180.202,150.600 180.396 M162.480 181.241 C 166.877 182.154,172.469 184.012,173.738 184.980 C 174.462 185.532,175.833 186.259,176.784 186.594 C 177.736 186.930,178.963 187.654,179.511 188.202 C 180.060 188.751,180.763 189.200,181.074 189.200 C 182.565 189.200,187.091 195.055,188.428 198.713 C 188.692 199.435,189.392 200.635,189.984 201.380 C 192.111 204.057,193.600 214.190,193.600 225.980 C 193.599 232.533,192.384 235.935,190.024 235.987 C 188.852 236.013,183.733 239.447,181.673 241.589 C 176.829 246.625,175.266 252.958,177.590 258.129 C 178.003 259.048,178.732 260.828,179.210 262.084 C 179.689 263.341,180.327 264.574,180.629 264.824 C 180.931 265.075,181.607 266.207,182.132 267.340 C 183.582 270.467,190.012 276.881,192.600 277.780 C 193.700 278.162,195.099 278.741,195.708 279.065 C 197.230 279.875,202.386 279.873,203.872 279.063 C 204.492 278.724,205.906 278.165,207.014 277.820 C 209.414 277.073,213.969 272.756,215.014 270.239 C 215.370 269.381,216.000 268.391,216.414 268.039 C 216.828 267.688,217.543 266.425,218.004 265.234 C 218.464 264.042,219.266 262.562,219.786 261.944 C 220.719 260.834,221.830 256.917,222.279 253.146 C 222.668 249.890,221.413 245.472,219.468 243.243 C 218.550 242.192,217.384 240.839,216.876 240.236 C 216.369 239.633,215.289 238.835,214.476 238.463 C 213.664 238.091,212.509 237.456,211.908 237.052 C 211.307 236.649,209.777 235.998,208.508 235.607 C 204.927 234.503,204.677 233.541,204.915 221.800 C 205.106 212.379,205.282 211.140,207.127 206.228 C 207.546 205.113,208.209 203.210,208.600 202.000 C 208.991 200.790,209.694 199.350,210.161 198.800 C 210.628 198.250,211.329 197.170,211.719 196.400 C 212.978 193.915,219.168 187.993,222.591 186.000 C 223.536 185.450,224.743 184.688,225.275 184.306 C 228.907 181.698,243.348 180.328,249.608 181.998 C 255.353 183.531,257.200 184.129,257.200 184.457 C 257.200 184.638,258.119 185.252,259.243 185.822 C 262.004 187.221,269.757 194.966,270.776 197.344 C 271.193 198.316,271.731 199.234,271.973 199.383 C 275.630 201.643,278.375 232.931,276.195 247.497 C 275.840 249.864,275.185 254.230,274.739 257.200 C 273.798 263.467,272.889 267.455,272.134 268.630 C 271.840 269.086,271.151 270.781,270.601 272.397 C 270.051 274.013,269.339 275.626,269.017 275.981 C 268.695 276.336,267.962 277.690,267.387 278.990 C 266.813 280.290,265.905 281.872,265.371 282.507 C 264.837 283.142,264.400 283.916,264.400 284.228 C 264.400 285.816,248.492 302.000,246.931 302.000 C 246.619 302.000,245.905 302.459,245.344 303.020 C 244.783 303.581,243.376 304.395,242.216 304.828 C 241.057 305.262,239.783 305.977,239.384 306.418 C 238.985 306.858,237.656 307.504,236.430 307.854 C 235.203 308.203,233.749 308.910,233.198 309.425 C 232.541 310.039,230.989 310.643,228.689 311.179 C 226.759 311.629,224.523 312.272,223.719 312.608 C 214.547 316.441,181.044 316.321,174.630 312.433 C 173.954 312.023,172.050 311.387,170.400 311.020 C 168.750 310.652,166.820 310.012,166.112 309.596 C 165.403 309.181,163.579 308.470,162.058 308.017 C 160.537 307.564,159.049 306.901,158.752 306.542 C 158.455 306.184,157.489 305.578,156.606 305.195 C 155.080 304.535,154.475 304.053,150.523 300.351 C 149.600 299.487,148.330 298.560,147.700 298.290 C 145.019 297.144,140.409 292.727,139.559 290.492 C 139.343 289.925,138.622 288.817,137.956 288.030 C 136.289 286.062,134.183 282.917,133.247 281.000 C 132.817 280.120,131.908 278.770,131.227 278.000 C 130.545 277.230,129.804 275.880,129.578 275.000 C 129.353 274.120,128.800 272.717,128.349 271.882 C 127.632 270.556,125.478 263.967,123.745 257.800 C 122.261 252.518,122.391 211.994,123.907 207.200 C 126.323 199.562,127.221 198.110,133.200 192.164 C 137.961 187.430,138.591 186.876,140.000 186.189 C 140.770 185.814,141.780 185.159,142.245 184.735 C 144.801 182.403,157.510 180.208,162.480 181.241 M238.854 204.397 C 238.113 204.573,237.033 205.068,236.454 205.497 C 235.874 205.925,234.801 206.586,234.068 206.965 C 233.286 207.369,232.505 208.208,232.175 208.999 C 231.865 209.740,231.427 210.460,231.200 210.600 C 230.573 210.988,229.596 213.518,229.007 216.279 C 227.993 221.039,229.165 223.457,235.113 228.871 C 238.746 232.179,246.536 232.347,249.800 229.189 C 250.460 228.550,252.020 227.054,253.267 225.864 C 257.570 221.758,258.021 213.994,254.179 210.152 C 253.420 209.394,252.800 208.602,252.800 208.392 C 252.800 208.045,251.261 206.897,248.450 205.146 C 247.229 204.386,240.952 203.896,238.854 204.397 M153.200 204.781 C 144.672 207.443,141.421 220.303,147.732 226.411 C 152.384 230.913,151.730 230.548,156.274 231.186 C 167.641 232.783,176.764 217.855,169.254 209.947 C 168.454 209.105,167.530 208.126,167.200 207.772 C 164.458 204.827,157.687 203.380,153.200 204.781 M248.368 206.508 C 256.561 210.515,258.104 219.558,251.674 225.874 C 245.191 232.240,240.260 232.304,233.923 226.103 C 229.017 221.302,228.374 217.634,231.522 212.412 C 232.123 211.416,232.881 210.086,233.207 209.457 C 235.136 205.738,243.476 204.115,248.368 206.508 M163.403 206.639 C 172.043 211.132,173.345 219.382,166.476 226.103 C 162.083 230.402,159.843 231.130,154.515 229.987 C 148.772 228.756,143.337 218.612,145.949 214.000 C 146.385 213.230,147.191 211.665,147.739 210.523 C 149.863 206.096,158.325 203.998,163.403 206.639 " stroke="none" fill="#747474" fill-rule="evenodd"></path> </g> </svg> <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" height="72.2466960352423" viewBox="0, 0, 400,72.2466960352423" style="margin-right: 20px;"><g id="svgg"><path id="path0" d="M314.875 5.618 C 314.334 5.722,314.414 6.108,315.000 6.225 C 315.765 6.378,315.578 7.081,314.750 7.170 C 313.895 7.261,313.648 7.163,313.475 6.667 C 313.251 6.023,311.667 5.877,311.667 6.500 C 311.667 6.744,311.778 6.833,312.083 6.833 C 312.607 6.833,312.660 7.403,312.160 7.670 C 311.690 7.922,311.220 7.733,311.097 7.244 C 310.972 6.746,309.333 6.597,309.333 7.083 C 309.333 7.236,309.489 7.333,309.731 7.333 C 310.127 7.333,310.351 7.704,310.209 8.125 C 310.040 8.628,308.667 8.072,308.667 7.500 C 308.667 7.408,308.404 7.333,308.083 7.333 C 307.611 7.333,307.500 7.397,307.500 7.667 C 307.500 7.937,307.389 8.000,306.917 8.000 C 306.509 8.000,306.333 8.075,306.333 8.250 C 306.333 8.425,306.157 8.500,305.750 8.500 C 305.278 8.500,305.167 8.563,305.167 8.833 C 305.167 9.017,305.058 9.167,304.925 9.167 C 304.792 9.167,304.623 9.273,304.550 9.402 C 304.477 9.532,304.192 9.663,303.918 9.694 C 303.202 9.775,303.117 10.333,303.821 10.333 C 304.530 10.333,304.531 10.958,303.824 11.481 C 303.272 11.889,302.783 11.737,302.873 11.186 C 302.906 10.985,302.758 10.904,302.292 10.865 C 301.755 10.821,301.667 10.862,301.667 11.157 C 301.667 11.389,301.559 11.500,301.333 11.500 C 301.148 11.500,301.000 11.611,301.000 11.750 C 301.000 11.887,300.887 12.000,300.750 12.000 C 300.611 12.000,300.500 12.148,300.500 12.333 C 300.500 12.556,300.389 12.667,300.167 12.667 C 299.983 12.667,299.833 12.771,299.833 12.899 C 299.833 13.027,299.721 13.174,299.583 13.227 C 299.446 13.280,299.333 13.438,299.333 13.578 C 299.333 13.722,299.188 13.833,299.000 13.833 C 298.817 13.833,298.667 13.938,298.667 14.066 C 298.667 14.193,298.554 14.341,298.417 14.394 C 298.279 14.446,298.167 14.604,298.167 14.745 C 298.167 14.889,298.022 15.000,297.833 15.000 C 297.650 15.000,297.500 15.104,297.500 15.232 C 297.500 15.360,297.387 15.508,297.250 15.560 C 297.106 15.616,297.000 15.865,297.000 16.150 C 297.000 16.498,296.901 16.676,296.667 16.750 C 296.432 16.824,296.333 17.002,296.333 17.350 C 296.333 17.635,296.228 17.884,296.083 17.940 C 295.946 17.992,295.833 18.140,295.833 18.268 C 295.833 18.396,295.679 18.500,295.490 18.500 C 295.195 18.500,295.154 18.588,295.198 19.125 C 295.237 19.591,295.318 19.739,295.519 19.706 C 295.873 19.649,296.231 20.091,296.103 20.426 C 295.929 20.878,295.258 20.655,295.197 20.125 C 295.134 19.573,294.745 19.518,294.605 20.042 C 294.435 20.678,294.484 20.788,294.979 20.887 C 295.715 21.035,295.811 22.333,295.087 22.333 C 294.902 22.333,294.844 22.482,294.874 22.875 C 294.928 23.565,294.126 23.714,294.029 23.032 C 293.923 22.284,293.422 22.670,293.366 23.543 C 293.330 24.098,293.243 24.333,293.074 24.333 C 292.520 24.333,292.764 26.111,293.333 26.225 C 293.910 26.340,294.087 27.582,293.585 27.998 C 293.250 28.277,292.833 28.090,292.833 27.660 C 292.833 26.813,292.251 27.394,292.200 28.293 C 292.151 29.134,292.165 29.167,292.579 29.167 C 293.271 29.167,293.700 32.003,293.161 33.011 C 292.914 33.473,292.362 33.423,292.238 32.928 C 291.980 31.902,291.667 32.684,291.667 34.351 C 291.667 36.076,291.885 36.500,292.303 35.583 C 292.962 34.137,293.747 37.096,293.155 38.795 C 292.956 39.366,292.518 39.624,292.302 39.297 C 292.220 39.172,292.180 39.533,292.206 40.165 C 292.251 41.275,292.833 42.002,292.833 40.948 C 292.833 40.496,293.347 40.247,293.653 40.553 C 294.088 40.988,293.694 42.417,293.138 42.417 C 292.737 42.417,292.755 43.607,293.158 43.713 C 293.346 43.762,293.462 43.741,293.416 43.665 C 293.298 43.475,293.623 42.667,293.817 42.667 C 294.154 42.667,294.455 43.159,294.375 43.579 C 294.273 44.112,293.694 44.477,293.481 44.142 C 293.313 43.877,293.273 44.816,293.434 45.236 C 293.594 45.652,294.000 45.550,294.000 45.095 C 294.000 44.836,294.120 44.651,294.332 44.584 C 294.822 44.428,295.033 44.636,294.918 45.161 C 294.836 45.534,294.882 45.641,295.158 45.713 C 295.402 45.777,295.500 45.938,295.500 46.278 C 295.500 46.573,295.627 46.832,295.833 46.961 C 296.017 47.076,296.167 47.329,296.167 47.525 C 296.167 47.720,296.298 47.978,296.458 48.097 C 296.682 48.263,296.709 48.380,296.574 48.601 C 296.323 49.011,295.833 49.045,295.833 48.652 C 295.833 48.444,295.717 48.333,295.500 48.333 C 295.113 48.333,295.046 48.797,295.412 48.938 C 295.547 48.990,295.705 49.287,295.764 49.599 C 295.824 49.921,295.971 50.167,296.102 50.167 C 296.229 50.167,296.333 50.274,296.333 50.405 C 296.333 50.537,296.483 50.692,296.667 50.750 C 296.896 50.823,297.000 51.002,297.000 51.327 C 297.000 51.592,297.109 51.840,297.250 51.894 C 297.387 51.946,297.500 52.104,297.500 52.245 C 297.500 52.389,297.645 52.500,297.833 52.500 C 298.017 52.500,298.167 52.571,298.167 52.658 C 298.167 52.888,298.922 53.667,299.144 53.667 C 299.248 53.667,299.333 53.738,299.333 53.825 C 299.333 54.054,300.088 54.833,300.311 54.833 C 300.415 54.833,300.500 54.917,300.500 55.018 C 300.500 55.264,301.200 55.993,301.439 55.997 C 301.543 55.999,301.667 56.150,301.715 56.333 C 301.778 56.576,301.942 56.667,302.318 56.667 C 302.665 56.667,302.833 56.748,302.833 56.917 C 302.833 57.054,302.937 57.167,303.064 57.167 C 303.191 57.167,303.334 57.317,303.382 57.500 C 303.444 57.739,303.609 57.833,303.967 57.833 C 304.264 57.833,304.505 57.938,304.564 58.094 C 304.685 58.409,305.739 58.363,305.771 58.042 C 305.782 57.927,305.801 57.758,305.813 57.667 C 305.863 57.261,306.667 57.496,306.667 57.917 C 306.667 58.272,306.590 58.333,306.149 58.333 C 305.745 58.333,305.653 58.391,305.732 58.597 C 305.788 58.742,305.833 58.892,305.833 58.930 C 305.833 58.969,306.061 59.000,306.339 59.000 C 306.634 59.000,306.884 59.104,306.940 59.250 C 306.999 59.404,307.252 59.500,307.601 59.500 C 308.056 59.500,308.167 59.565,308.167 59.833 C 308.167 60.112,308.278 60.167,308.843 60.167 C 309.235 60.167,309.478 60.099,309.420 60.006 C 309.261 59.747,309.985 59.141,310.385 59.198 C 310.969 59.281,310.891 60.067,310.292 60.136 C 309.359 60.243,309.759 60.678,310.759 60.645 C 311.345 60.626,311.605 60.562,311.468 60.471 C 311.300 60.359,311.340 60.251,311.643 59.997 C 312.308 59.440,313.167 59.648,313.167 60.367 C 313.167 60.590,313.037 60.667,312.654 60.667 C 312.256 60.667,312.155 60.732,312.198 60.958 C 312.301 61.492,314.538 61.379,314.667 60.833 C 314.905 59.824,323.465 59.956,323.297 60.967 C 323.236 61.333,324.801 61.485,325.023 61.135 C 325.251 60.775,325.188 60.667,324.750 60.667 C 324.235 60.667,324.170 60.099,324.656 59.839 C 325.422 59.429,326.983 59.869,326.766 60.434 C 326.699 60.609,326.841 60.667,327.339 60.667 C 328.140 60.667,328.257 60.260,327.500 60.108 C 326.978 60.004,326.859 59.708,327.200 59.367 C 327.642 58.924,328.499 59.210,328.544 59.815 C 328.568 60.130,328.656 60.175,329.160 60.133 C 329.892 60.071,330.131 59.500,329.424 59.500 C 328.870 59.500,328.668 59.033,329.088 58.726 C 329.258 58.602,329.570 58.500,329.782 58.500 C 329.994 58.500,330.167 58.430,330.167 58.345 C 330.167 58.120,330.778 57.960,331.167 58.083 C 331.380 58.151,331.500 58.336,331.500 58.595 C 331.500 58.947,331.577 59.000,332.083 59.000 C 332.556 59.000,332.667 58.937,332.667 58.667 C 332.667 58.409,332.778 58.333,333.158 58.333 C 333.654 58.333,334.500 57.717,334.500 57.356 C 334.500 57.251,334.759 57.167,335.083 57.167 C 335.404 57.167,335.667 57.095,335.667 57.008 C 335.667 56.801,336.468 56.000,336.674 56.000 C 336.762 56.000,336.833 55.928,336.833 55.841 C 336.833 55.634,337.634 54.833,337.841 54.833 C 338.016 54.833,338.058 54.447,337.900 54.289 C 337.744 54.133,337.324 54.349,337.434 54.529 C 337.489 54.617,337.376 54.730,337.183 54.781 C 336.991 54.831,336.833 54.935,336.833 55.011 C 336.833 55.215,336.073 56.000,335.875 56.000 C 335.782 56.000,335.668 56.145,335.621 56.323 C 335.535 56.652,334.833 56.639,334.833 56.308 C 334.833 55.823,336.670 53.842,337.125 53.836 C 337.240 53.835,337.333 53.758,337.333 53.667 C 337.333 53.351,337.613 53.501,337.803 53.917 C 338.052 54.464,339.167 54.465,339.167 53.918 C 339.167 53.801,339.317 53.666,339.500 53.618 C 339.743 53.555,339.833 53.391,339.833 53.016 C 339.833 52.668,339.915 52.500,340.083 52.500 C 340.221 52.500,340.333 52.393,340.333 52.261 C 340.333 52.130,340.483 51.975,340.667 51.917 C 340.850 51.858,341.000 51.703,341.000 51.572 C 341.000 51.441,341.112 51.333,341.250 51.333 C 341.389 51.333,341.500 51.185,341.500 51.000 C 341.500 50.815,341.389 50.667,341.250 50.667 C 341.111 50.667,341.000 50.815,341.000 51.000 C 341.000 51.222,340.889 51.333,340.667 51.333 C 340.483 51.333,340.333 51.441,340.333 51.572 C 340.333 51.703,340.182 51.859,339.998 51.917 C 339.813 51.976,339.700 52.086,339.747 52.161 C 339.887 52.389,339.308 52.520,339.062 52.316 C 338.936 52.211,338.835 52.079,338.837 52.021 C 338.844 51.820,340.289 50.333,340.477 50.333 C 340.657 50.333,340.740 50.098,340.678 49.765 C 340.662 49.682,340.711 49.570,340.787 49.515 C 340.862 49.461,341.056 49.209,341.218 48.956 C 341.463 48.570,341.565 48.523,341.839 48.670 C 342.278 48.905,342.274 49.500,341.833 49.500 C 341.611 49.500,341.500 49.611,341.500 49.833 C 341.500 50.027,341.611 50.167,341.766 50.167 C 341.912 50.167,342.070 50.017,342.118 49.833 C 342.166 49.650,342.309 49.500,342.436 49.500 C 342.588 49.500,342.667 49.302,342.667 48.917 C 342.667 48.444,342.730 48.333,343.000 48.333 C 343.217 48.333,343.333 48.222,343.333 48.016 C 343.333 47.780,343.247 47.720,343.000 47.785 C 342.817 47.833,342.667 47.976,342.667 48.103 C 342.667 48.427,342.058 48.391,341.930 48.059 C 341.873 47.908,341.933 47.665,342.064 47.518 C 342.195 47.370,342.329 47.063,342.360 46.833 C 342.438 46.264,343.223 46.229,343.303 46.792 C 343.393 47.420,343.833 47.247,343.833 46.583 C 343.833 46.111,343.897 46.000,344.167 46.000 C 344.755 46.000,344.637 44.871,344.042 44.803 C 343.503 44.741,343.312 44.030,343.739 43.675 C 344.079 43.394,344.500 43.571,344.500 43.995 C 344.500 44.185,344.610 44.333,344.750 44.333 C 344.930 44.333,345.000 44.149,345.000 43.672 C 345.000 43.180,344.941 43.033,344.771 43.098 C 344.378 43.249,344.013 42.727,344.150 42.210 C 344.320 41.570,345.000 41.459,345.000 42.072 C 345.000 42.389,345.086 42.500,345.333 42.500 C 345.611 42.500,345.667 42.389,345.667 41.839 C 345.667 41.293,345.619 41.196,345.393 41.282 C 344.793 41.513,344.352 39.802,344.896 39.351 C 345.231 39.072,345.667 39.308,345.667 39.768 C 345.667 40.217,346.074 40.315,346.232 39.903 C 346.440 39.362,346.347 38.172,346.105 38.265 C 345.296 38.575,345.132 37.599,345.197 32.857 C 345.253 28.763,345.357 28.281,346.120 28.574 C 346.347 28.662,346.430 27.446,346.232 26.930 C 346.074 26.518,345.667 26.616,345.667 27.066 C 345.667 27.586,345.166 27.786,344.872 27.384 C 344.463 26.826,344.676 25.759,345.208 25.697 C 345.811 25.628,345.942 23.833,345.344 23.833 C 345.117 23.833,345.007 23.968,344.969 24.292 C 344.931 24.621,344.823 24.750,344.583 24.750 C 344.056 24.750,344.095 23.439,344.625 23.363 C 344.941 23.318,345.000 23.208,345.000 22.655 C 345.000 21.881,344.555 21.715,344.469 22.457 C 344.363 23.378,343.508 23.085,343.503 22.125 C 343.501 21.873,343.423 21.667,343.328 21.667 C 343.061 21.667,342.854 20.953,343.026 20.625 C 343.110 20.465,343.326 20.333,343.506 20.333 C 343.769 20.333,343.833 20.219,343.833 19.750 C 343.833 19.343,343.758 19.167,343.583 19.167 C 343.410 19.167,343.333 18.992,343.333 18.595 C 343.333 18.169,343.248 17.995,343.000 17.917 C 342.817 17.858,342.667 17.703,342.667 17.572 C 342.667 17.440,342.509 17.333,342.316 17.333 C 342.064 17.333,341.993 17.408,342.066 17.597 C 342.121 17.742,342.167 17.892,342.167 17.930 C 342.167 17.969,342.279 18.000,342.417 18.000 C 342.572 18.000,342.667 18.157,342.667 18.417 C 342.667 19.008,342.029 18.957,341.531 18.326 C 341.127 17.815,341.331 17.083,341.878 17.083 C 342.256 17.083,342.228 16.318,341.847 16.218 C 341.582 16.149,341.500 15.995,341.500 15.564 C 341.500 15.174,341.423 15.000,341.250 15.000 C 341.112 15.000,341.000 14.880,341.000 14.734 C 341.000 14.588,340.850 14.430,340.667 14.382 C 340.483 14.334,340.333 14.191,340.333 14.064 C 340.333 13.937,340.221 13.833,340.083 13.833 C 339.946 13.833,339.833 13.714,339.833 13.568 C 339.833 13.422,339.683 13.263,339.500 13.215 C 339.317 13.167,339.167 13.024,339.167 12.897 C 339.167 12.770,339.054 12.667,338.917 12.667 C 338.779 12.667,338.667 12.547,338.667 12.401 C 338.667 12.255,338.517 12.096,338.333 12.048 C 338.150 12.000,338.000 11.857,338.000 11.731 C 338.000 11.604,337.893 11.500,337.761 11.500 C 337.630 11.500,337.475 11.350,337.417 11.167 C 337.358 10.983,337.203 10.833,337.072 10.833 C 336.941 10.833,336.833 10.721,336.833 10.583 C 336.833 10.410,336.660 10.333,336.269 10.333 C 335.846 10.333,335.684 10.250,335.618 10.000 C 335.570 9.817,335.412 9.667,335.266 9.667 C 335.111 9.667,335.000 9.806,335.000 10.000 C 335.000 10.222,335.111 10.333,335.333 10.333 C 335.764 10.333,335.783 10.926,335.359 11.153 C 335.024 11.332,334.667 11.107,334.667 10.717 C 334.667 10.598,334.523 10.500,334.347 10.500 C 333.780 10.500,333.002 9.946,333.001 9.542 C 333.000 9.236,333.092 9.167,333.500 9.167 C 333.833 9.167,334.000 9.250,334.000 9.417 C 334.000 9.554,334.112 9.667,334.250 9.667 C 334.387 9.667,334.500 9.554,334.500 9.417 C 334.500 9.279,334.393 9.167,334.261 9.167 C 334.130 9.167,333.975 9.017,333.917 8.833 C 333.838 8.585,333.664 8.500,333.239 8.500 C 332.841 8.500,332.667 8.424,332.667 8.250 C 332.667 8.075,332.491 8.000,332.083 8.000 C 331.611 8.000,331.500 7.937,331.500 7.667 C 331.500 7.078,330.371 7.196,330.303 7.792 C 330.226 8.461,328.917 8.501,328.917 7.833 C 328.917 7.503,329.011 7.406,329.375 7.364 C 330.125 7.278,329.951 6.833,329.167 6.833 C 328.615 6.833,328.500 6.890,328.500 7.161 C 328.500 7.762,327.493 7.971,327.140 7.444 C 326.947 7.155,327.190 6.833,327.601 6.833 C 327.892 6.833,328.000 6.741,328.000 6.491 C 328.000 5.950,326.275 6.077,326.197 6.625 C 326.093 7.357,324.250 7.397,324.250 6.667 C 324.250 6.336,324.345 6.239,324.708 6.197 C 324.960 6.168,325.167 6.073,325.167 5.985 C 325.167 5.656,324.255 5.501,322.447 5.523 C 321.422 5.535,320.748 5.577,320.948 5.616 L 321.313 5.687 320.960 6.094 C 320.396 6.743,318.333 6.610,318.333 5.925 C 318.333 5.798,318.427 5.657,318.542 5.610 C 318.794 5.509,315.406 5.515,314.875 5.618 M319.375 5.615 C 319.535 5.657,319.798 5.657,319.958 5.615 C 320.119 5.573,319.987 5.539,319.667 5.539 C 319.346 5.539,319.215 5.573,319.375 5.615 M9.167 6.489 C 9.167 6.717,9.301 6.827,9.625 6.864 L 10.083 6.917 10.126 33.447 C 10.167 59.823,10.166 59.978,9.835 60.083 C 9.653 60.141,9.427 60.141,9.335 60.084 C 9.242 60.027,9.167 60.135,9.167 60.323 C 9.167 60.666,9.194 60.667,17.917 60.667 L 26.667 60.667 26.667 52.178 L 26.667 43.690 26.292 43.637 C 25.716 43.555,25.687 42.877,26.252 42.735 C 27.788 42.349,33.000 42.878,33.000 43.419 C 33.000 43.759,36.012 43.716,36.125 43.375 C 36.165 43.256,36.055 43.167,35.868 43.167 C 35.331 43.167,35.054 42.707,35.390 42.372 C 35.971 41.791,37.667 42.157,37.667 42.864 C 37.667 43.135,37.767 43.178,38.290 43.135 C 39.020 43.075,39.285 42.563,38.635 42.471 C 38.070 42.391,38.127 41.801,38.720 41.593 C 39.258 41.403,40.083 41.754,40.083 42.173 C 40.083 42.335,40.297 42.434,40.723 42.469 C 41.265 42.514,41.353 42.476,41.304 42.220 C 41.271 42.049,41.102 41.917,40.914 41.917 C 40.672 41.917,40.583 41.805,40.583 41.500 C 40.583 40.880,41.231 40.918,41.303 41.542 C 41.361 42.045,42.065 42.201,42.467 41.800 C 42.778 41.488,42.705 41.333,42.245 41.333 C 42.013 41.333,41.779 41.220,41.726 41.081 C 41.590 40.728,41.986 40.306,42.347 40.421 C 42.544 40.483,42.709 40.399,42.829 40.175 C 42.945 39.959,43.179 39.833,43.466 39.833 C 43.737 39.833,44.002 39.701,44.125 39.505 C 44.367 39.117,44.764 39.216,44.889 39.695 C 44.945 39.909,45.052 39.987,45.181 39.908 C 45.311 39.827,45.342 39.851,45.266 39.974 C 45.191 40.095,45.271 40.167,45.483 40.167 C 45.824 40.167,46.667 39.449,46.667 39.159 C 46.667 39.072,46.929 39.000,47.250 39.000 C 47.645 39.000,47.833 38.923,47.833 38.761 C 47.833 38.630,47.983 38.475,48.167 38.417 C 48.350 38.358,48.500 38.203,48.500 38.072 C 48.500 37.941,48.612 37.833,48.750 37.833 C 48.887 37.833,49.000 37.726,49.000 37.595 C 49.000 37.463,49.150 37.308,49.333 37.250 C 49.517 37.192,49.667 37.037,49.667 36.905 C 49.667 36.774,49.779 36.667,49.917 36.667 C 50.091 36.667,50.167 36.491,50.167 36.083 C 50.167 35.661,50.240 35.500,50.432 35.500 C 50.578 35.500,50.737 35.350,50.785 35.167 C 50.833 34.983,50.976 34.833,51.103 34.833 C 51.255 34.833,51.333 34.636,51.333 34.250 C 51.333 33.778,51.397 33.667,51.667 33.667 C 51.937 33.667,52.000 33.556,52.000 33.083 C 52.000 32.676,52.075 32.500,52.250 32.500 C 52.425 32.500,52.500 32.324,52.500 31.917 C 52.500 31.457,52.434 31.333,52.187 31.333 C 51.565 31.333,51.357 30.657,51.811 30.110 C 52.105 29.756,52.500 29.949,52.500 30.447 C 52.500 31.085,53.070 30.887,53.134 30.226 C 53.178 29.776,53.116 29.682,52.676 29.528 C 52.091 29.324,51.916 28.082,52.415 27.668 C 52.772 27.372,53.167 27.587,53.167 28.078 C 53.167 28.342,53.260 28.500,53.417 28.500 C 53.621 28.500,53.667 28.213,53.667 26.917 C 53.667 25.609,53.622 25.333,53.413 25.333 C 53.078 25.333,52.756 24.498,52.964 24.167 C 53.049 24.029,53.224 23.917,53.351 23.917 C 53.532 23.917,53.594 23.521,53.631 22.125 C 53.671 20.605,53.639 20.333,53.422 20.333 C 53.282 20.333,53.167 20.475,53.167 20.647 C 53.167 21.011,52.613 21.213,52.347 20.947 C 51.885 20.485,52.196 19.167,52.768 19.167 C 53.255 19.167,53.370 18.114,52.903 17.934 C 52.515 17.786,52.500 17.797,52.500 18.232 C 52.500 18.777,52.070 18.906,51.755 18.456 C 51.339 17.863,51.610 16.917,52.195 16.917 C 52.532 16.917,52.591 15.691,52.260 15.564 C 52.117 15.509,52.000 15.360,52.000 15.232 C 52.000 15.104,51.850 15.000,51.667 15.000 C 51.439 15.000,51.333 15.111,51.333 15.351 C 51.333 15.589,51.411 15.673,51.575 15.610 C 51.838 15.509,52.093 16.047,51.918 16.332 C 51.748 16.606,51.165 16.523,51.049 16.208 C 50.990 16.048,50.842 15.857,50.721 15.783 C 50.599 15.710,50.500 15.484,50.500 15.282 C 50.500 15.079,50.349 14.819,50.164 14.704 C 49.924 14.554,49.856 14.384,49.926 14.107 C 50.000 13.812,49.918 13.652,49.583 13.432 C 49.341 13.273,48.840 12.849,48.468 12.489 C 48.097 12.128,47.727 11.833,47.647 11.833 C 47.566 11.833,47.500 11.608,47.500 11.333 C 47.500 10.889,47.556 10.833,48.000 10.833 C 48.389 10.833,48.500 10.907,48.500 11.167 C 48.500 11.352,48.611 11.500,48.750 11.500 C 48.887 11.500,49.000 11.612,49.000 11.750 C 49.000 11.889,49.148 12.000,49.333 12.000 C 49.549 12.000,49.667 12.111,49.667 12.316 C 49.667 12.489,49.779 12.674,49.917 12.727 C 50.054 12.780,50.167 12.938,50.167 13.078 C 50.167 13.222,50.312 13.333,50.500 13.333 C 50.722 13.333,50.833 13.222,50.833 13.000 C 50.833 12.778,50.722 12.667,50.500 12.667 C 50.278 12.667,50.167 12.556,50.167 12.333 C 50.167 12.150,50.062 12.000,49.934 12.000 C 49.807 12.000,49.659 11.887,49.606 11.750 C 49.554 11.612,49.396 11.500,49.255 11.500 C 49.111 11.500,49.000 11.355,49.000 11.167 C 49.000 10.983,48.896 10.833,48.768 10.833 C 48.640 10.833,48.489 10.712,48.432 10.564 C 48.362 10.380,48.195 10.321,47.903 10.377 C 47.567 10.441,47.444 10.374,47.325 10.063 C 47.243 9.845,47.061 9.667,46.921 9.667 C 46.781 9.667,46.667 9.554,46.667 9.417 C 46.667 9.242,46.491 9.167,46.083 9.167 C 45.611 9.167,45.500 9.103,45.500 8.833 C 45.500 8.221,44.401 8.371,44.275 9.000 C 44.173 9.510,43.756 9.652,43.097 9.399 C 42.634 9.221,42.781 8.669,43.321 8.561 C 43.998 8.425,43.804 8.000,43.066 8.000 C 42.572 8.000,42.500 8.053,42.500 8.422 C 42.500 8.935,42.208 9.071,41.600 8.840 C 41.046 8.629,41.069 8.110,41.636 8.029 C 42.222 7.945,42.032 7.428,41.393 7.366 C 40.941 7.322,40.848 7.384,40.692 7.833 C 40.440 8.556,38.750 8.556,38.750 7.833 C 38.750 7.503,38.845 7.406,39.208 7.364 C 40.293 7.239,39.692 6.833,38.422 6.833 C 37.436 6.833,37.195 6.881,37.265 7.062 C 37.568 7.852,32.635 8.293,31.951 7.538 C 31.441 6.974,31.831 6.796,33.605 6.784 C 35.127 6.773,35.153 6.767,33.950 6.712 C 33.007 6.669,32.625 6.586,32.558 6.410 C 32.390 5.973,9.167 6.052,9.167 6.489 M242.944 6.278 C 242.668 6.554,242.863 6.833,243.334 6.833 L 243.834 6.833 243.792 33.458 L 243.750 60.083 243.282 60.137 C 243.013 60.168,242.841 60.274,242.879 60.387 C 242.987 60.710,272.833 60.752,272.833 60.429 C 272.833 60.298,272.665 60.166,272.458 60.137 C 271.927 60.061,271.969 59.476,272.525 59.209 C 273.037 58.964,274.283 59.278,274.208 59.634 C 274.185 59.744,274.246 59.833,274.343 59.833 C 274.440 59.833,274.471 59.912,274.411 60.009 C 274.339 60.126,274.626 60.167,275.275 60.134 C 276.318 60.080,276.911 59.500,275.924 59.500 C 275.370 59.500,275.168 59.033,275.588 58.726 C 276.216 58.267,277.274 58.754,276.915 59.337 C 276.856 59.431,277.059 59.500,277.397 59.500 C 278.226 59.500,278.487 59.016,277.690 58.956 C 277.233 58.922,277.114 58.576,277.445 58.246 C 277.875 57.815,278.573 57.994,278.637 58.551 C 278.685 58.968,278.749 59.014,279.219 58.968 C 279.899 58.902,280.087 58.333,279.429 58.333 C 279.026 58.333,278.736 57.527,279.125 57.487 C 279.194 57.480,279.389 57.448,279.560 57.416 C 280.031 57.327,280.308 57.490,280.365 57.889 C 280.430 58.346,281.667 58.540,281.667 58.093 C 281.667 57.950,281.779 57.833,281.917 57.833 C 282.056 57.833,282.167 57.685,282.167 57.500 C 282.167 57.230,282.278 57.167,282.750 57.167 C 283.157 57.167,283.333 57.091,283.333 56.917 C 283.333 56.779,283.453 56.667,283.599 56.667 C 283.745 56.667,283.904 56.517,283.952 56.333 C 284.000 56.150,284.148 56.000,284.282 56.000 C 284.571 56.000,284.510 55.475,284.208 55.375 C 284.086 55.334,284.000 55.449,284.000 55.653 C 284.000 55.889,283.893 56.000,283.667 56.000 C 283.444 56.000,283.333 56.111,283.333 56.333 C 283.333 56.714,283.031 56.764,282.606 56.454 C 282.314 56.240,282.375 55.667,282.691 55.667 C 282.776 55.667,283.635 54.873,284.601 53.903 C 286.382 52.113,286.833 51.881,286.833 52.755 C 286.833 53.018,286.764 53.144,286.655 53.076 C 286.557 53.016,286.436 53.124,286.386 53.317 C 286.331 53.525,286.160 53.667,285.961 53.667 C 285.714 53.667,285.650 53.750,285.711 53.987 C 285.775 54.231,285.721 54.293,285.481 54.246 C 285.260 54.204,285.167 54.282,285.167 54.510 C 285.167 54.722,285.052 54.833,284.833 54.833 C 284.605 54.833,284.500 54.944,284.500 55.184 C 284.500 55.436,284.575 55.507,284.764 55.434 C 284.909 55.379,285.059 55.333,285.097 55.333 C 285.135 55.333,285.167 55.221,285.167 55.083 C 285.167 54.946,285.238 54.833,285.326 54.833 C 285.532 54.833,286.333 54.032,286.333 53.826 C 286.333 53.738,286.405 53.667,286.492 53.667 C 287.274 53.667,287.804 51.972,287.056 51.865 C 286.333 51.762,286.383 51.000,287.113 51.000 C 287.478 51.000,287.527 51.060,287.458 51.421 C 287.414 51.652,287.446 51.883,287.530 51.935 C 287.778 52.089,288.167 51.655,288.167 51.224 C 288.167 51.004,288.279 50.780,288.417 50.727 C 288.853 50.560,288.759 49.037,288.309 48.970 C 287.810 48.896,287.532 48.418,287.768 48.042 C 288.051 47.590,288.667 47.562,288.667 48.001 C 288.667 48.950,289.250 48.251,289.295 47.248 C 289.326 46.538,289.291 46.322,289.172 46.500 C 289.050 46.682,289.004 46.691,289.003 46.532 C 289.001 46.412,288.929 46.358,288.842 46.411 C 288.425 46.669,288.075 44.078,288.302 42.417 C 288.405 41.665,288.461 41.578,288.875 41.531 C 289.344 41.477,289.477 41.068,289.232 40.430 C 289.086 40.050,288.667 40.106,288.667 40.505 C 288.667 40.925,288.247 41.107,287.915 40.832 C 287.463 40.457,287.604 39.837,288.167 39.725 C 288.728 39.613,288.955 38.500,288.417 38.500 C 288.248 38.500,288.167 38.332,288.167 37.984 C 288.167 37.609,288.076 37.445,287.833 37.382 C 287.649 37.333,287.500 37.154,287.500 36.981 C 287.500 36.808,287.385 36.667,287.245 36.667 C 287.104 36.667,286.946 36.554,286.894 36.417 C 286.770 36.094,286.397 36.094,286.273 36.417 C 286.207 36.589,286.284 36.667,286.521 36.667 C 286.724 36.667,286.900 36.803,286.952 37.000 C 287.000 37.183,287.143 37.333,287.269 37.333 C 287.628 37.333,287.555 38.113,287.188 38.209 C 286.864 38.294,286.225 37.737,285.860 37.053 C 285.589 36.542,285.617 36.385,286.000 36.285 C 286.411 36.177,286.498 35.000,286.095 35.000 C 285.963 35.000,285.808 34.850,285.750 34.667 C 285.671 34.419,285.498 34.333,285.072 34.333 C 284.675 34.333,284.500 34.257,284.500 34.083 C 284.500 33.946,284.387 33.833,284.250 33.833 C 284.111 33.833,284.000 33.685,284.000 33.500 C 284.000 33.278,283.889 33.167,283.667 33.167 C 283.483 33.167,283.333 33.062,283.333 32.934 C 283.333 32.646,282.971 32.500,282.254 32.500 C 281.917 32.500,281.665 32.403,281.606 32.250 C 281.455 31.855,280.846 31.927,280.950 32.328 C 280.998 32.509,281.159 32.647,281.310 32.635 C 282.155 32.570,282.490 33.024,281.935 33.485 C 281.688 33.690,280.833 33.422,280.833 33.140 C 280.833 33.063,280.618 33.000,280.354 33.000 C 280.090 33.000,279.789 32.897,279.684 32.771 C 279.406 32.436,279.641 32.000,280.101 32.000 C 280.589 32.000,280.638 31.566,280.167 31.417 C 279.983 31.358,279.833 31.203,279.833 31.072 C 279.833 30.426,279.232 30.854,279.217 31.510 C 279.209 31.882,279.166 32.223,279.122 32.267 C 278.899 32.490,277.888 32.503,277.598 32.286 C 277.194 31.985,277.356 31.500,277.860 31.500 C 278.201 31.500,278.207 31.483,277.939 31.287 C 277.477 30.949,277.764 30.452,278.371 30.541 C 278.767 30.599,278.891 30.538,279.010 30.223 C 279.112 29.955,279.291 29.833,279.584 29.833 C 279.819 29.833,280.054 29.721,280.106 29.583 C 280.160 29.444,280.407 29.333,280.664 29.333 C 280.946 29.333,281.215 29.199,281.355 28.989 C 281.651 28.542,282.167 28.719,282.167 29.268 C 282.167 29.553,282.074 29.667,281.839 29.667 C 281.615 29.667,281.541 29.747,281.606 29.917 C 281.659 30.054,281.807 30.167,281.934 30.167 C 282.062 30.167,282.167 30.054,282.167 29.917 C 282.167 29.742,282.343 29.667,282.750 29.667 C 283.222 29.667,283.333 29.603,283.333 29.333 C 283.333 29.111,283.444 29.000,283.667 29.000 C 283.852 29.000,284.000 28.889,284.000 28.750 C 284.000 28.613,284.112 28.500,284.250 28.500 C 284.389 28.500,284.500 28.352,284.500 28.167 C 284.500 27.944,284.611 27.833,284.833 27.833 C 285.017 27.833,285.167 27.762,285.167 27.674 C 285.167 27.468,285.968 26.667,286.174 26.667 C 286.262 26.667,286.333 26.404,286.333 26.083 C 286.333 25.696,286.411 25.500,286.566 25.500 C 286.816 25.500,287.000 25.151,287.000 24.674 C 287.000 24.475,286.832 24.341,286.500 24.275 C 285.972 24.169,285.787 23.617,286.223 23.450 C 286.482 23.351,286.907 23.575,286.938 23.827 C 286.949 23.922,286.968 24.075,286.979 24.167 C 287.046 24.704,287.500 24.269,287.500 23.667 C 287.500 23.131,287.440 23.000,287.193 23.000 C 286.658 23.000,286.500 22.274,286.500 19.815 C 286.500 17.368,286.622 16.833,287.183 16.833 C 287.470 16.833,287.512 16.742,287.468 16.221 C 287.403 15.450,287.067 15.316,286.917 16.001 C 286.764 16.697,286.111 16.659,286.030 15.948 C 285.964 15.378,286.285 14.949,286.697 15.056 C 286.926 15.116,287.000 15.041,287.000 14.748 C 287.000 14.187,286.832 13.833,286.566 13.833 C 286.438 13.833,286.333 13.718,286.333 13.578 C 286.333 13.438,286.221 13.280,286.083 13.227 C 285.946 13.174,285.833 12.995,285.833 12.829 C 285.833 12.349,285.650 12.000,285.399 12.000 C 285.271 12.000,285.167 11.887,285.167 11.750 C 285.167 11.611,285.019 11.500,284.833 11.500 C 284.611 11.500,284.500 11.389,284.500 11.167 C 284.500 10.981,284.389 10.833,284.250 10.833 C 284.111 10.833,284.000 10.981,284.000 11.167 C 284.000 11.352,284.111 11.500,284.250 11.500 C 284.387 11.500,284.500 11.612,284.500 11.750 C 284.500 11.887,284.608 12.000,284.740 12.000 C 285.070 12.000,285.209 12.271,285.083 12.668 C 284.919 13.184,284.564 13.067,283.728 12.219 C 282.929 11.409,282.881 10.917,283.600 10.916 C 283.772 10.916,283.937 10.785,283.968 10.625 C 284.013 10.393,283.907 10.333,283.448 10.333 C 283.012 10.333,282.851 10.252,282.785 10.000 C 282.737 9.817,282.578 9.667,282.432 9.667 C 282.286 9.667,282.167 9.554,282.167 9.417 C 282.167 9.242,281.991 9.167,281.583 9.167 C 281.111 9.167,281.000 9.103,281.000 8.833 C 281.000 8.245,279.871 8.363,279.803 8.958 C 279.742 9.488,279.002 9.693,278.601 9.291 C 278.303 8.994,278.557 8.500,279.008 8.500 C 279.187 8.500,279.333 8.387,279.333 8.250 C 279.333 7.810,278.214 7.921,278.072 8.375 C 277.874 9.011,277.073 9.240,276.684 8.771 C 276.406 8.436,276.641 8.000,277.101 8.000 C 277.389 8.000,277.500 7.907,277.500 7.667 C 277.500 7.374,277.389 7.333,276.583 7.333 C 275.684 7.333,275.667 7.343,275.667 7.814 C 275.667 8.363,275.217 8.536,274.286 8.346 C 273.562 8.198,273.495 7.446,274.199 7.365 C 274.510 7.329,274.620 7.239,274.556 7.073 C 274.396 6.655,272.167 6.737,272.167 7.161 C 272.167 7.711,271.622 7.833,269.167 7.833 C 266.712 7.833,266.167 7.711,266.167 7.161 C 266.167 6.852,266.304 6.831,268.542 6.798 L 270.917 6.762 269.003 6.709 C 267.538 6.668,267.058 6.598,266.953 6.411 C 266.809 6.153,243.200 6.022,242.944 6.278 M348.111 6.278 C 347.780 6.609,347.997 20.167,348.333 20.167 C 348.593 20.167,348.667 20.056,348.667 19.667 L 348.667 19.167 355.801 19.167 C 361.542 19.167,362.997 19.211,363.245 19.393 C 363.630 19.674,363.476 20.167,363.005 20.167 L 362.665 20.167 362.708 40.375 L 362.750 60.583 371.792 60.626 L 380.833 60.670 380.833 40.418 C 380.833 23.328,380.797 20.167,380.604 20.167 C 380.111 20.167,379.962 19.713,380.362 19.432 C 380.693 19.200,381.601 19.167,387.607 19.167 C 394.981 19.167,395.000 19.168,395.000 19.768 C 395.000 20.217,395.407 20.315,395.566 19.903 C 395.698 19.559,395.698 6.775,395.566 6.430 C 395.460 6.155,348.385 6.004,348.111 6.278 M308.445 8.263 C 308.618 8.713,308.107 9.084,307.774 8.750 C 307.623 8.599,307.500 8.369,307.500 8.238 C 307.500 7.909,308.317 7.931,308.445 8.263 M331.500 8.300 C 331.500 8.692,331.186 8.997,330.896 8.886 C 330.465 8.720,330.617 8.000,331.083 8.000 C 331.373 8.000,331.500 8.091,331.500 8.300 M307.070 8.601 C 307.405 8.730,307.413 9.313,307.081 9.441 C 306.754 9.566,306.333 9.213,306.333 8.813 C 306.333 8.494,306.595 8.419,307.070 8.601 M332.636 8.957 C 332.577 9.469,332.060 9.683,331.898 9.262 C 331.744 8.859,331.951 8.500,332.339 8.500 C 332.622 8.500,332.679 8.587,332.636 8.957 M45.500 9.494 C 45.500 9.951,44.933 10.237,44.666 9.915 C 44.372 9.561,44.589 9.167,45.078 9.167 C 45.386 9.167,45.500 9.255,45.500 9.494 M281.000 9.480 C 281.000 9.994,280.538 10.276,280.219 9.957 C 279.862 9.600,280.059 9.167,280.578 9.167 C 280.880 9.167,281.000 9.256,281.000 9.480 M306.167 9.476 C 306.167 9.862,305.212 10.674,304.899 10.554 C 304.581 10.431,304.596 9.667,304.917 9.667 C 305.054 9.667,305.167 9.554,305.167 9.417 C 305.167 9.250,305.333 9.167,305.667 9.167 C 306.043 9.167,306.167 9.243,306.167 9.476 M46.667 10.000 C 46.667 10.219,46.778 10.333,46.990 10.333 C 47.435 10.333,47.572 10.618,47.273 10.918 C 46.953 11.238,46.517 11.237,46.394 10.917 C 46.341 10.779,46.198 10.667,46.077 10.667 C 45.755 10.667,45.581 9.990,45.857 9.815 C 46.265 9.557,46.667 9.648,46.667 10.000 M282.167 10.000 C 282.167 10.185,282.278 10.333,282.417 10.333 C 282.701 10.333,282.758 10.924,282.489 11.090 C 282.392 11.150,282.180 11.079,282.018 10.933 C 281.856 10.787,281.644 10.667,281.546 10.667 C 281.270 10.667,281.140 10.150,281.351 9.896 C 281.644 9.543,282.167 9.610,282.167 10.000 M302.833 10.583 C 302.833 10.755,302.943 10.837,303.125 10.802 C 303.476 10.734,303.454 10.438,303.092 10.363 C 302.941 10.331,302.833 10.423,302.833 10.583 M336.833 11.250 C 336.833 11.387,336.948 11.500,337.089 11.500 C 337.229 11.500,337.387 11.612,337.440 11.750 C 337.492 11.887,337.640 12.000,337.768 12.000 C 337.896 12.000,338.000 12.150,338.000 12.333 C 338.000 12.556,338.111 12.667,338.333 12.667 C 338.517 12.667,338.667 12.771,338.667 12.899 C 338.667 13.027,338.779 13.174,338.917 13.227 C 339.054 13.280,339.167 13.438,339.167 13.578 C 339.167 13.722,339.312 13.833,339.500 13.833 C 339.688 13.833,339.833 13.944,339.833 14.089 C 339.833 14.229,339.946 14.387,340.083 14.440 C 340.221 14.492,340.333 14.680,340.333 14.856 C 340.333 15.292,339.838 15.460,339.583 15.110 C 339.471 14.958,339.329 14.833,339.267 14.833 C 339.204 14.833,338.688 14.353,338.118 13.765 C 335.884 11.459,335.602 11.000,336.417 11.000 C 336.676 11.000,336.833 11.094,336.833 11.250 M302.500 11.796 C 302.500 11.958,302.127 12.502,301.671 13.004 C 301.215 13.506,300.840 13.973,300.837 14.042 C 300.835 14.110,300.770 14.167,300.691 14.167 C 300.613 14.167,300.149 14.544,299.660 15.006 C 299.171 15.468,298.653 15.823,298.510 15.796 C 298.170 15.731,298.055 15.000,298.386 15.000 C 298.519 15.000,298.667 14.850,298.715 14.667 C 298.763 14.483,298.922 14.333,299.068 14.333 C 299.214 14.333,299.333 14.221,299.333 14.083 C 299.333 13.946,299.446 13.833,299.583 13.833 C 299.721 13.833,299.833 13.714,299.833 13.568 C 299.833 13.422,299.983 13.263,300.167 13.215 C 300.350 13.167,300.500 13.024,300.500 12.897 C 300.500 12.770,300.604 12.667,300.731 12.667 C 300.857 12.667,301.000 12.517,301.048 12.333 C 301.096 12.150,301.255 12.000,301.401 12.000 C 301.547 12.000,301.667 11.887,301.667 11.750 C 301.667 11.594,301.824 11.500,302.083 11.500 C 302.371 11.500,302.500 11.591,302.500 11.796 M285.727 13.583 C 285.660 13.758,285.740 13.833,285.993 13.833 C 286.290 13.833,286.346 13.916,286.303 14.292 C 286.230 14.925,285.567 15.031,285.344 14.444 C 285.258 14.218,285.104 13.981,285.002 13.918 C 284.743 13.758,285.115 13.333,285.515 13.333 C 285.720 13.333,285.791 13.417,285.727 13.583 M50.833 14.083 C 50.833 14.221,50.946 14.333,51.083 14.333 C 51.221 14.333,51.333 14.221,51.333 14.083 C 51.333 13.946,51.221 13.833,51.083 13.833 C 50.946 13.833,50.833 13.946,50.833 14.083 M341.500 16.500 C 341.500 16.683,341.504 16.890,341.509 16.958 C 341.524 17.176,340.994 17.202,340.745 16.996 C 340.570 16.850,340.551 16.715,340.676 16.482 C 340.906 16.052,341.500 16.065,341.500 16.500 M297.827 17.076 C 298.096 17.400,297.907 17.667,297.407 17.667 C 297.084 17.667,297.000 17.581,297.000 17.250 C 297.000 16.773,297.490 16.670,297.827 17.076 M264.133 17.700 C 264.454 18.021,264.366 18.319,263.917 18.432 C 263.006 18.660,263.454 19.000,264.667 19.000 C 265.715 19.000,265.833 18.967,265.833 18.673 C 265.833 18.251,266.375 17.962,266.913 18.097 C 267.580 18.265,267.505 19.000,266.821 19.000 C 266.117 19.000,266.202 19.559,266.918 19.639 C 267.192 19.670,267.477 19.802,267.550 19.931 C 267.623 20.061,267.792 20.167,267.925 20.167 C 268.058 20.167,268.167 20.317,268.167 20.500 C 268.167 20.685,268.278 20.833,268.417 20.833 C 268.554 20.833,268.667 20.977,268.667 21.153 C 268.667 21.650,268.846 22.000,269.101 22.000 C 269.236 22.000,269.333 21.830,269.333 21.593 C 269.333 21.107,269.551 20.941,270.001 21.084 C 270.303 21.179,270.333 21.338,270.333 22.811 C 270.333 24.440,270.189 24.895,269.730 24.719 C 269.573 24.659,269.500 24.761,269.500 25.040 C 269.500 25.568,269.035 26.500,268.771 26.500 C 268.200 26.500,267.978 25.749,268.500 25.583 C 268.729 25.510,268.829 25.338,268.820 25.030 C 268.813 24.785,268.769 24.677,268.723 24.792 C 268.677 24.906,268.533 25.000,268.403 25.000 C 268.273 25.000,268.167 25.113,268.167 25.250 C 268.167 25.425,267.991 25.500,267.583 25.500 C 267.111 25.500,267.000 25.563,267.000 25.833 C 267.000 26.103,266.889 26.167,266.417 26.167 C 266.009 26.167,265.833 26.242,265.833 26.417 C 265.833 26.554,265.974 26.667,266.146 26.667 C 266.555 26.667,266.867 27.053,266.735 27.396 C 266.603 27.738,265.780 27.754,265.502 27.419 C 265.389 27.282,265.340 27.057,265.393 26.919 C 265.476 26.701,265.153 26.667,262.995 26.667 L 260.500 26.667 260.500 22.583 C 260.500 19.330,260.456 18.500,260.282 18.500 C 259.797 18.500,259.414 18.055,259.652 17.768 C 259.934 17.428,263.803 17.369,264.133 17.700 M297.239 18.280 C 297.350 18.572,296.481 19.500,296.096 19.500 C 295.915 19.500,295.833 19.344,295.833 19.000 C 295.833 18.667,295.917 18.500,296.083 18.500 C 296.221 18.500,296.333 18.360,296.333 18.190 C 296.333 17.812,297.088 17.887,297.239 18.280 M32.250 19.167 C 32.250 19.472,32.150 19.598,31.875 19.637 C 31.247 19.726,31.420 20.167,32.083 20.167 C 32.556 20.167,32.667 20.230,32.667 20.500 C 32.667 20.814,32.991 20.953,33.211 20.734 C 33.377 20.568,33.148 20.167,32.887 20.167 C 32.486 20.167,32.691 19.425,33.109 19.366 C 33.389 19.326,33.550 19.480,33.849 20.079 C 34.086 20.554,34.374 20.879,34.608 20.938 C 35.160 21.076,35.423 21.441,35.181 21.733 C 34.885 22.089,34.360 21.866,34.301 21.358 C 34.241 20.838,33.167 20.568,33.167 21.073 C 33.167 21.222,33.309 21.333,33.500 21.333 C 33.722 21.333,33.833 21.444,33.833 21.667 C 33.833 21.850,33.941 22.000,34.073 22.000 C 34.221 22.000,34.332 22.206,34.364 22.540 C 34.430 23.217,35.000 23.432,35.000 22.780 C 35.000 22.278,35.465 22.060,35.807 22.402 C 36.108 22.703,35.797 23.199,35.353 23.127 C 34.999 23.070,34.858 24.641,35.198 24.856 C 35.365 24.962,35.367 24.996,35.208 24.997 C 35.062 24.999,35.000 25.346,35.000 26.167 C 35.000 27.197,35.037 27.333,35.313 27.333 C 35.747 27.333,36.049 27.749,35.918 28.164 C 35.668 28.952,34.694 29.616,34.426 29.182 C 34.282 28.949,34.507 28.500,34.768 28.500 C 34.896 28.500,35.000 28.350,35.000 28.167 C 35.000 27.973,34.889 27.833,34.734 27.833 C 34.588 27.833,34.430 27.983,34.382 28.167 C 34.334 28.350,34.191 28.500,34.064 28.500 C 33.937 28.500,33.833 28.604,33.833 28.731 C 33.833 28.857,33.683 29.000,33.500 29.048 C 33.005 29.178,33.075 29.667,33.589 29.667 C 34.449 29.667,33.936 31.135,33.067 31.157 C 32.651 31.168,32.086 30.599,32.250 30.333 C 32.331 30.203,32.146 30.162,31.643 30.198 C 30.800 30.259,30.438 30.833,31.243 30.833 C 31.745 30.833,31.964 31.225,31.665 31.585 C 31.430 31.868,26.447 31.953,26.017 31.681 C 25.711 31.487,25.907 30.993,26.334 30.881 C 26.658 30.797,26.667 30.650,26.667 25.231 L 26.667 19.667 28.583 19.667 C 30.373 19.667,30.500 19.645,30.500 19.342 C 30.500 18.906,30.956 18.659,31.667 18.709 C 32.167 18.744,32.250 18.809,32.250 19.167 M269.012 19.481 C 269.792 20.240,269.830 20.313,269.570 20.572 C 269.227 20.916,268.733 20.839,268.799 20.452 C 268.832 20.260,268.737 20.167,268.507 20.167 C 268.316 20.167,268.167 20.057,268.167 19.917 C 268.167 19.779,268.054 19.667,267.917 19.667 C 267.664 19.667,267.560 18.996,267.778 18.778 C 267.992 18.564,268.183 18.673,269.012 19.481 M343.333 19.480 C 343.333 19.956,342.896 20.260,342.583 20.000 C 342.107 19.604,342.326 19.212,343.042 19.180 C 343.221 19.172,343.333 19.288,343.333 19.480 M318.582 19.939 C 318.734 19.998,318.928 20.228,319.013 20.450 C 319.200 20.942,320.099 20.957,320.062 20.468 C 320.014 19.848,322.011 19.588,322.372 20.167 C 322.502 20.375,322.768 20.503,323.082 20.509 C 323.650 20.520,324.431 21.338,324.271 21.754 C 324.122 22.144,323.333 22.070,323.333 21.667 C 323.333 21.481,323.222 21.333,323.083 21.333 C 322.944 21.333,322.833 21.481,322.833 21.667 C 322.833 21.852,322.944 22.000,323.083 22.000 C 323.221 22.000,323.333 22.104,323.333 22.232 C 323.333 22.807,324.414 22.803,324.699 22.227 C 324.938 21.743,325.220 21.672,325.304 22.074 C 325.336 22.227,325.183 22.399,324.929 22.495 C 324.377 22.705,324.310 23.584,324.833 23.750 C 325.017 23.808,325.167 23.963,325.167 24.095 C 325.167 24.226,325.279 24.333,325.417 24.333 C 325.585 24.333,325.667 24.502,325.667 24.849 C 325.667 25.216,325.758 25.388,325.985 25.448 C 326.159 25.493,326.340 25.674,326.386 25.849 C 326.494 26.264,326.771 26.256,326.882 25.833 C 326.946 25.586,326.887 25.500,326.651 25.500 C 326.206 25.500,326.213 24.737,326.660 24.620 C 326.983 24.536,327.633 25.197,327.876 25.859 C 328.031 26.280,327.616 26.736,327.182 26.622 C 326.847 26.535,326.819 26.580,326.866 27.137 C 326.922 27.816,327.500 28.163,327.500 27.518 C 327.500 27.006,328.104 26.739,328.326 27.154 C 328.705 27.861,328.437 28.466,327.792 28.360 C 327.445 28.303,327.346 30.552,327.685 30.762 C 327.878 30.881,328.197 30.518,328.074 30.319 C 327.951 30.120,328.447 29.823,328.724 29.930 C 329.108 30.077,329.232 31.010,329.063 32.475 C 328.982 33.176,328.966 34.087,329.029 34.500 C 329.204 35.658,329.186 37.320,328.994 37.678 C 328.766 38.104,328.161 38.097,328.048 37.667 C 327.898 37.091,327.500 37.272,327.500 37.917 C 327.500 38.423,327.553 38.500,327.905 38.500 C 328.371 38.500,328.588 38.961,328.426 39.606 C 328.274 40.210,327.603 40.092,327.530 39.448 C 327.447 38.727,326.917 38.916,326.917 39.667 C 326.917 40.113,326.993 40.260,327.250 40.309 C 327.905 40.433,328.101 41.559,327.500 41.750 C 327.315 41.809,327.167 42.002,327.167 42.185 C 327.167 42.590,326.515 43.500,326.225 43.500 C 325.796 43.500,325.628 42.860,325.996 42.630 C 326.357 42.405,326.455 42.000,326.148 42.000 C 325.892 42.000,325.173 42.704,325.170 42.958 C 325.168 43.073,325.017 43.167,324.833 43.167 C 324.650 43.167,324.500 43.271,324.500 43.399 C 324.500 43.527,324.387 43.674,324.250 43.727 C 324.112 43.780,324.000 43.938,324.000 44.078 C 324.000 44.222,323.855 44.333,323.667 44.333 C 323.483 44.333,323.333 44.438,323.333 44.566 C 323.333 44.693,323.221 44.841,323.083 44.894 C 322.946 44.946,322.833 45.104,322.833 45.245 C 322.833 45.425,322.663 45.500,322.250 45.500 C 321.561 45.500,321.431 45.934,322.071 46.095 C 322.578 46.222,322.728 46.582,322.407 46.902 C 322.215 47.095,322.054 47.110,321.664 46.974 C 321.152 46.796,320.979 46.275,321.375 46.106 C 321.490 46.057,321.097 46.032,320.502 46.050 C 319.440 46.083,318.643 46.667,319.660 46.667 C 320.090 46.667,320.277 47.083,319.998 47.419 C 319.759 47.707,319.119 47.742,318.654 47.493 C 318.275 47.290,318.487 46.667,318.935 46.667 C 319.089 46.667,319.169 46.550,319.136 46.375 C 319.028 45.809,317.234 45.868,317.243 46.437 C 317.252 46.994,316.489 47.299,316.088 46.898 C 315.777 46.587,315.929 46.200,316.387 46.135 C 317.034 46.042,316.944 45.500,316.282 45.500 C 315.846 45.500,315.684 45.419,315.618 45.167 C 315.555 44.924,315.391 44.833,315.016 44.833 C 314.668 44.833,314.500 44.752,314.500 44.583 C 314.500 44.446,314.393 44.333,314.261 44.333 C 314.130 44.333,313.975 44.183,313.917 44.000 C 313.858 43.817,313.703 43.667,313.572 43.667 C 313.441 43.667,313.333 43.554,313.333 43.417 C 313.333 43.279,313.186 43.167,313.005 43.167 C 312.782 43.167,312.708 43.247,312.773 43.417 C 312.826 43.554,312.973 43.667,313.101 43.667 C 313.229 43.667,313.333 43.817,313.333 44.000 C 313.333 44.185,313.444 44.333,313.583 44.333 C 313.809 44.333,313.907 44.531,313.853 44.875 C 313.834 44.994,314.350 45.070,314.792 45.012 C 315.167 44.964,315.010 45.275,314.553 45.483 C 313.830 45.813,312.000 44.384,312.000 43.490 C 312.000 43.365,311.796 43.100,311.547 42.901 C 311.155 42.589,311.124 42.502,311.317 42.270 C 311.620 41.904,311.951 41.931,312.169 42.338 C 312.269 42.524,312.416 42.635,312.496 42.586 C 312.576 42.536,312.676 42.628,312.718 42.790 C 312.764 42.967,312.802 42.895,312.814 42.609 C 312.828 42.266,312.741 42.111,312.500 42.048 C 312.250 41.983,312.167 41.821,312.167 41.397 C 312.167 41.007,312.090 40.833,311.917 40.833 C 311.779 40.833,311.667 40.689,311.667 40.514 C 311.667 40.017,311.487 39.667,311.232 39.667 C 311.104 39.667,311.000 39.809,311.000 39.982 C 311.000 40.432,310.476 40.588,310.206 40.219 C 309.881 39.774,310.020 39.279,310.500 39.167 C 311.009 39.048,311.265 36.667,310.769 36.667 C 310.634 36.667,310.499 36.828,310.470 37.025 C 310.396 37.519,309.910 37.810,309.630 37.528 C 309.366 37.262,309.392 34.248,309.661 33.924 C 309.782 33.777,309.788 33.569,309.678 33.280 C 309.381 32.500,309.271 30.387,309.498 29.839 C 309.752 29.225,310.119 29.186,310.333 29.750 C 310.631 30.533,311.000 30.263,311.000 29.262 C 311.000 28.452,310.961 28.351,310.628 28.303 C 310.108 28.229,309.835 27.427,310.204 27.058 C 310.566 26.696,311.000 26.889,311.000 27.411 C 311.000 27.881,311.403 27.994,311.566 27.570 C 311.787 26.992,311.677 26.667,311.258 26.667 C 310.783 26.667,310.506 26.269,310.632 25.768 C 310.753 25.290,311.474 24.637,311.810 24.701 C 312.175 24.771,312.283 25.500,311.928 25.500 C 311.779 25.500,311.667 25.641,311.667 25.828 C 311.667 26.051,311.747 26.126,311.917 26.060 C 312.054 26.008,312.167 25.860,312.167 25.732 C 312.167 25.604,312.278 25.500,312.413 25.500 C 312.689 25.500,312.921 24.803,312.774 24.420 C 312.722 24.284,312.576 24.212,312.450 24.260 C 312.151 24.375,311.768 23.910,311.893 23.585 C 311.946 23.447,312.096 23.333,312.227 23.333 C 312.358 23.333,312.508 23.221,312.560 23.083 C 312.613 22.946,312.794 22.833,312.961 22.833 C 313.129 22.833,313.357 22.743,313.467 22.633 C 313.622 22.478,313.667 22.478,313.667 22.633 C 313.667 22.743,313.592 22.833,313.500 22.833 C 313.408 22.833,313.333 23.023,313.333 23.255 C 313.333 23.487,313.221 23.720,313.083 23.773 C 312.946 23.826,312.833 23.973,312.833 24.101 C 312.833 24.229,312.946 24.333,313.083 24.333 C 313.221 24.333,313.333 24.262,313.333 24.174 C 313.333 23.968,314.134 23.167,314.341 23.167 C 314.428 23.167,314.500 23.059,314.500 22.928 C 314.500 22.797,314.650 22.642,314.833 22.583 C 315.017 22.525,315.167 22.375,315.167 22.249 C 315.167 22.114,315.386 22.000,315.707 21.969 C 316.467 21.895,316.579 21.333,315.834 21.333 C 315.387 21.333,315.318 21.279,315.363 20.960 C 315.441 20.417,315.963 20.381,316.162 20.905 C 316.353 21.406,317.500 21.559,317.500 21.083 C 317.500 20.927,317.342 20.833,317.078 20.833 C 316.587 20.833,316.372 20.438,316.668 20.081 C 316.879 19.827,318.061 19.739,318.582 19.939 M70.278 20.944 C 70.051 21.171,70.177 21.430,70.527 21.456 C 71.259 21.511,71.324 22.155,70.621 22.404 C 70.113 22.583,69.667 22.307,69.667 21.813 C 69.667 21.566,69.543 21.500,69.083 21.500 C 68.676 21.500,68.500 21.575,68.500 21.750 C 68.500 21.890,68.649 22.000,68.839 22.000 C 69.258 22.000,69.440 22.420,69.165 22.752 C 68.680 23.336,67.527 22.797,67.916 22.168 C 67.978 22.067,67.778 22.000,67.411 22.000 C 66.942 22.000,66.782 22.077,66.715 22.333 C 66.649 22.584,66.488 22.667,66.064 22.667 C 65.365 22.667,65.275 23.119,65.958 23.197 C 66.695 23.282,66.626 24.099,65.886 24.043 C 65.449 24.009,65.347 24.067,65.303 24.376 C 65.269 24.616,65.116 24.769,64.875 24.803 C 64.669 24.833,64.500 24.926,64.500 25.012 C 64.500 25.097,64.313 25.167,64.083 25.167 C 63.854 25.167,63.667 25.242,63.667 25.334 C 63.667 26.048,59.327 29.671,59.126 29.125 C 59.011 28.813,59.164 28.500,59.431 28.500 C 59.560 28.500,59.667 28.350,59.667 28.167 C 59.667 27.978,59.778 27.833,59.922 27.833 C 60.062 27.833,60.220 27.721,60.273 27.583 C 60.326 27.446,60.473 27.333,60.601 27.333 C 60.729 27.333,60.833 27.183,60.833 27.000 C 60.833 26.806,60.722 26.667,60.568 26.667 C 60.422 26.667,60.263 26.817,60.215 27.000 C 60.167 27.183,60.024 27.333,59.897 27.333 C 59.770 27.333,59.667 27.437,59.667 27.564 C 59.667 27.691,59.517 27.834,59.333 27.882 C 59.150 27.930,59.000 28.088,59.000 28.234 C 59.000 28.380,58.887 28.500,58.750 28.500 C 58.577 28.500,58.500 28.674,58.500 29.064 C 58.500 29.494,58.418 29.649,58.154 29.718 C 57.945 29.773,57.821 29.929,57.840 30.113 C 57.897 30.663,57.837 30.833,57.583 30.833 C 57.409 30.833,57.333 31.009,57.333 31.417 C 57.333 31.889,57.270 32.000,57.000 32.000 C 56.721 32.000,56.667 32.111,56.667 32.677 C 56.667 33.089,56.732 33.312,56.835 33.249 C 57.450 32.869,58.015 34.085,57.474 34.626 C 57.207 34.893,56.667 34.581,56.667 34.161 C 56.667 33.975,56.554 33.833,56.407 33.833 C 56.208 33.833,56.159 33.981,56.198 34.458 C 56.233 34.880,56.324 35.068,56.477 35.035 C 57.055 34.914,57.423 36.413,56.919 36.832 C 56.587 37.107,56.167 36.925,56.167 36.505 C 56.167 36.278,56.057 36.167,55.833 36.167 C 55.226 36.167,55.354 37.750,55.979 37.968 C 56.605 38.186,56.651 38.510,56.585 42.189 C 56.530 45.268,56.393 45.931,55.839 45.787 C 55.574 45.717,55.543 45.824,55.562 46.727 C 55.585 47.801,56.167 48.472,56.167 47.424 C 56.167 46.890,56.597 46.692,56.963 47.058 C 57.332 47.427,57.059 48.229,56.538 48.303 C 56.236 48.347,56.167 48.464,56.167 48.928 C 56.167 49.609,56.575 49.721,56.735 49.083 C 56.875 48.528,57.457 48.519,57.595 49.070 C 57.765 49.747,57.618 50.079,57.124 50.136 C 56.538 50.204,56.438 51.138,57.000 51.285 C 57.252 51.351,57.333 51.512,57.333 51.948 C 57.333 52.407,57.393 52.513,57.625 52.468 C 57.785 52.437,57.916 52.272,57.916 52.100 C 57.917 51.663,58.426 51.359,58.700 51.633 C 58.977 51.910,58.681 52.397,58.191 52.470 C 57.695 52.544,57.675 53.490,58.167 53.618 C 58.350 53.666,58.500 53.768,58.500 53.844 C 58.500 54.059,59.265 54.833,59.477 54.833 C 59.582 54.833,59.668 54.927,59.670 55.042 C 59.673 55.296,60.392 56.000,60.648 56.000 C 60.750 56.000,60.835 56.094,60.836 56.208 C 60.840 56.462,61.559 57.167,61.815 57.167 C 61.917 57.167,62.001 57.260,62.003 57.375 C 62.008 57.730,62.775 58.333,63.221 58.333 C 63.498 58.333,63.681 58.449,63.750 58.667 C 63.877 59.066,64.444 59.115,64.444 58.727 C 64.444 58.577,64.303 58.417,64.130 58.372 C 63.690 58.257,63.805 57.599,64.277 57.532 C 64.524 57.497,64.673 57.591,64.749 57.831 C 64.830 58.086,64.948 58.153,65.188 58.077 C 65.368 58.019,65.623 58.062,65.754 58.170 C 66.071 58.433,65.780 59.000,65.327 59.000 C 65.147 59.000,65.000 59.112,65.000 59.250 C 65.000 59.425,65.176 59.500,65.583 59.500 C 66.056 59.500,66.167 59.563,66.167 59.833 C 66.167 60.420,67.295 60.304,67.364 59.710 C 67.421 59.215,67.753 59.069,68.430 59.238 C 69.036 59.390,68.970 59.981,68.333 60.108 C 67.442 60.287,67.726 60.667,68.750 60.667 C 69.522 60.667,69.667 60.619,69.667 60.367 C 69.667 59.747,70.519 59.419,70.967 59.867 C 71.362 60.262,71.204 60.667,70.654 60.667 C 70.256 60.667,70.155 60.731,70.199 60.958 C 70.246 61.200,70.448 61.252,71.381 61.261 C 72.142 61.268,72.451 61.217,72.336 61.103 C 71.701 60.467,72.897 60.268,77.417 60.259 C 81.803 60.249,82.283 60.309,82.363 60.875 C 82.442 61.428,84.833 61.556,84.833 61.007 C 84.833 60.784,84.724 60.667,84.518 60.667 C 84.078 60.667,83.964 60.251,84.316 59.932 C 84.863 59.438,86.000 59.713,86.000 60.339 C 86.000 60.625,86.117 60.667,86.917 60.667 C 87.620 60.667,87.833 60.609,87.833 60.417 C 87.833 60.279,87.693 60.167,87.520 60.167 C 87.061 60.167,86.741 59.729,86.985 59.435 C 87.453 58.871,88.322 59.078,88.374 59.767 C 88.413 60.283,89.983 60.351,90.116 59.842 C 90.184 59.582,90.341 59.500,90.769 59.500 C 91.469 59.500,91.559 59.048,90.875 58.969 L 90.417 58.917 90.373 53.730 L 90.329 48.543 90.831 48.442 C 91.979 48.212,91.410 47.833,89.917 47.833 C 88.852 47.833,88.500 47.888,88.500 48.054 C 88.500 48.175,88.224 48.344,87.888 48.429 C 87.132 48.620,86.979 48.957,87.615 49.030 C 88.178 49.094,88.312 49.868,87.778 49.971 C 87.154 50.091,86.667 49.847,86.667 49.413 C 86.667 48.912,85.080 48.765,84.894 49.250 C 84.746 49.634,76.750 49.624,76.602 49.239 C 76.459 48.865,75.417 48.979,75.415 49.369 C 75.412 49.771,75.072 50.063,74.750 49.940 C 74.289 49.763,74.505 49.092,75.042 49.031 C 75.685 48.957,75.613 48.558,74.933 48.431 C 74.621 48.372,74.323 48.214,74.271 48.079 C 74.220 47.944,74.062 47.833,73.922 47.833 C 73.782 47.833,73.667 47.758,73.667 47.667 C 73.667 47.575,73.498 47.331,73.292 47.125 L 72.917 46.750 84.122 46.707 L 95.328 46.664 95.419 46.290 C 95.678 45.228,95.419 36.755,95.125 36.698 C 94.922 36.659,94.833 36.749,94.833 36.993 C 94.833 37.423,94.417 37.610,94.081 37.332 C 93.526 36.871,93.901 34.392,94.502 34.549 C 94.718 34.605,94.781 34.473,94.811 33.893 C 94.854 33.073,94.450 32.844,94.265 33.583 C 94.136 34.097,93.588 34.142,93.330 33.660 C 93.027 33.094,93.284 32.622,93.850 32.705 C 94.319 32.773,94.333 32.754,94.333 32.068 C 94.333 31.201,94.204 30.833,93.899 30.833 C 93.745 30.833,93.667 30.637,93.667 30.250 C 93.667 29.843,93.591 29.667,93.417 29.667 C 93.279 29.667,93.167 29.523,93.167 29.347 C 93.167 28.850,92.987 28.500,92.732 28.500 C 92.604 28.500,92.500 28.385,92.500 28.245 C 92.500 28.104,92.388 27.946,92.250 27.894 C 92.112 27.841,92.000 27.662,92.000 27.496 C 92.000 27.016,91.817 26.667,91.566 26.667 C 91.438 26.667,91.333 26.813,91.333 26.992 C 91.333 27.449,90.824 27.706,90.502 27.411 C 88.346 25.444,87.688 24.417,88.581 24.416 C 88.764 24.416,88.937 24.285,88.968 24.125 C 89.013 23.893,88.907 23.833,88.448 23.833 C 88.012 23.833,87.851 23.752,87.785 23.500 C 87.737 23.317,87.578 23.167,87.432 23.167 C 87.286 23.167,87.167 23.054,87.167 22.917 C 87.167 22.742,86.991 22.667,86.583 22.667 C 86.111 22.667,86.000 22.603,86.000 22.333 C 86.000 21.714,84.901 21.872,84.773 22.510 C 84.678 22.983,84.626 23.017,84.044 22.969 C 83.182 22.897,83.022 22.221,83.828 22.059 C 84.510 21.923,84.384 21.597,83.625 21.532 C 83.113 21.489,83.018 21.536,82.971 21.854 C 82.901 22.335,82.036 22.607,81.688 22.259 C 81.358 21.929,81.579 21.500,82.078 21.500 C 82.389 21.500,82.500 21.412,82.500 21.167 C 82.500 20.865,82.389 20.833,81.333 20.833 C 80.303 20.833,80.167 20.870,80.167 21.146 C 80.167 22.278,72.588 22.358,72.159 21.231 C 72.010 20.837,70.600 20.622,70.278 20.944 M122.500 21.167 C 122.500 21.437,122.389 21.500,121.917 21.500 C 121.509 21.500,121.333 21.575,121.333 21.750 C 121.333 21.887,121.481 22.000,121.661 22.000 C 122.081 22.000,122.393 22.541,122.126 22.808 C 122.020 22.914,121.723 23.000,121.467 23.000 C 121.210 23.000,121.000 23.075,121.000 23.167 C 121.000 23.258,120.850 23.333,120.667 23.333 C 120.271 23.333,120.202 22.753,120.581 22.607 C 120.878 22.493,120.731 22.000,120.399 22.000 C 120.271 22.000,120.167 22.150,120.167 22.333 C 120.167 22.603,120.056 22.667,119.583 22.667 C 119.176 22.667,119.000 22.742,119.000 22.917 C 119.000 23.054,118.880 23.167,118.734 23.167 C 118.588 23.167,118.430 23.317,118.382 23.500 C 118.334 23.683,118.191 23.833,118.064 23.833 C 117.937 23.833,117.833 23.946,117.833 24.083 C 117.833 24.258,117.657 24.333,117.250 24.333 L 116.667 24.333 116.667 23.180 C 116.667 22.546,116.621 21.909,116.566 21.764 C 116.475 21.528,115.541 21.500,107.732 21.500 L 99.000 21.500 99.000 41.083 C 99.000 60.556,99.002 60.667,99.333 60.667 C 99.556 60.667,99.667 60.556,99.667 60.333 C 99.667 60.005,99.778 60.000,107.766 60.000 C 115.724 60.000,115.866 60.006,115.952 60.333 C 116.056 60.731,116.423 60.773,116.566 60.403 C 116.621 60.258,116.667 54.863,116.667 48.414 L 116.667 36.689 116.208 36.636 C 115.666 36.574,115.469 35.945,115.936 35.766 C 116.269 35.638,116.504 35.825,116.569 36.270 C 116.660 36.892,117.167 36.744,117.167 36.096 C 117.167 35.698,117.244 35.500,117.399 35.500 C 117.654 35.500,117.833 35.150,117.833 34.653 C 117.833 34.412,117.951 34.333,118.316 34.333 C 118.601 34.333,118.839 34.226,118.899 34.070 C 119.050 33.676,119.040 33.667,118.500 33.667 C 118.084 33.667,118.000 33.600,118.000 33.268 C 118.000 32.574,119.101 32.630,119.285 33.334 C 119.402 33.781,120.333 33.813,120.333 33.370 C 120.333 33.061,121.096 32.671,121.462 32.793 C 121.940 32.952,121.689 33.667,121.154 33.667 C 120.450 33.667,120.535 34.225,121.251 34.306 C 121.526 34.337,121.810 34.468,121.883 34.598 C 121.957 34.727,122.125 34.833,122.258 34.833 C 122.423 34.833,122.500 35.018,122.500 35.417 C 122.500 35.811,122.577 36.000,122.738 36.000 C 122.869 36.000,123.011 36.131,123.054 36.292 C 123.097 36.452,123.130 36.358,123.126 36.083 C 123.115 35.241,123.152 35.167,123.583 35.167 C 124.191 35.167,124.118 36.530,123.506 36.604 C 123.411 36.616,123.258 36.634,123.167 36.646 C 122.831 36.688,122.974 38.141,123.333 38.333 C 123.617 38.485,123.667 38.460,123.667 38.167 C 123.667 37.743,124.085 37.558,124.418 37.834 C 124.630 38.010,124.670 39.559,124.707 48.978 L 124.750 59.917 132.073 59.960 C 136.101 59.984,139.456 59.944,139.529 59.871 C 139.603 59.797,139.671 54.453,139.682 47.994 C 139.702 35.995,139.744 35.167,140.338 35.167 C 140.642 35.167,140.667 35.048,140.667 33.583 C 140.667 31.973,140.339 31.341,140.066 32.426 C 139.909 33.052,139.308 32.914,139.105 32.205 C 138.892 31.458,139.184 30.833,139.746 30.833 C 140.130 30.833,140.167 30.772,140.167 30.117 C 140.167 29.101,139.575 28.542,139.469 29.458 C 139.392 30.134,138.607 30.125,138.530 29.448 C 138.467 28.900,138.744 28.500,139.187 28.500 C 139.434 28.500,139.500 28.376,139.500 27.917 C 139.500 27.444,139.437 27.333,139.167 27.333 C 138.924 27.333,138.833 27.444,138.833 27.740 C 138.833 27.964,138.765 28.189,138.682 28.241 C 138.387 28.423,138.000 28.126,138.000 27.717 C 138.000 27.490,137.834 27.169,137.630 27.004 C 137.314 26.748,137.293 26.666,137.484 26.436 C 137.790 26.067,138.180 26.098,138.285 26.500 C 138.333 26.683,138.476 26.833,138.603 26.833 C 138.730 26.833,138.833 26.683,138.833 26.500 C 138.833 26.315,138.722 26.167,138.583 26.167 C 138.409 26.167,138.333 25.991,138.333 25.583 C 138.333 25.111,138.270 25.000,138.000 25.000 C 137.778 25.000,137.667 24.889,137.667 24.667 C 137.667 24.481,137.556 24.333,137.417 24.333 C 137.279 24.333,137.167 24.221,137.167 24.083 C 137.167 23.944,137.019 23.833,136.833 23.833 C 136.611 23.833,136.500 23.722,136.500 23.500 C 136.500 23.315,136.389 23.167,136.250 23.167 C 136.112 23.167,136.000 23.054,136.000 22.917 C 136.000 22.778,135.852 22.667,135.667 22.667 C 135.444 22.667,135.333 22.556,135.333 22.333 C 135.333 22.063,135.222 22.000,134.750 22.000 C 134.343 22.000,134.167 21.925,134.167 21.750 C 134.167 21.290,133.055 21.424,132.936 21.898 C 132.749 22.643,131.500 22.644,131.500 21.899 C 131.500 21.565,131.583 21.500,132.012 21.500 C 132.411 21.500,132.512 21.435,132.467 21.208 C 132.386 20.795,130.727 20.773,130.794 21.186 C 130.894 21.799,130.388 21.917,127.683 21.913 C 124.931 21.909,124.333 21.775,124.333 21.161 C 124.333 20.875,124.217 20.833,123.417 20.833 C 122.611 20.833,122.500 20.874,122.500 21.167 M157.167 21.156 C 157.167 21.381,157.301 21.494,157.612 21.531 C 158.148 21.594,158.274 21.869,157.926 22.217 C 157.566 22.577,156.768 22.347,156.697 21.864 C 156.652 21.561,156.534 21.500,155.988 21.500 C 155.214 21.500,155.049 21.945,155.792 22.031 C 156.363 22.096,156.486 22.917,155.924 22.917 C 155.714 22.917,155.564 22.769,155.501 22.500 C 155.368 21.930,154.357 21.789,154.218 22.322 C 154.149 22.585,153.994 22.667,153.564 22.667 C 153.174 22.667,153.000 22.744,153.000 22.917 C 153.000 23.054,152.887 23.167,152.750 23.167 C 152.611 23.167,152.500 23.315,152.500 23.500 C 152.500 23.770,152.389 23.833,151.917 23.833 C 151.531 23.833,151.333 23.912,151.333 24.064 C 151.333 24.191,151.183 24.334,151.000 24.382 C 150.817 24.430,150.667 24.588,150.667 24.734 C 150.667 24.880,150.554 25.000,150.417 25.000 C 150.279 25.000,150.167 25.104,150.167 25.231 C 150.167 25.357,150.017 25.500,149.833 25.548 C 149.650 25.596,149.500 25.755,149.500 25.901 C 149.500 26.047,149.396 26.167,149.268 26.167 C 148.811 26.167,148.811 26.709,149.268 27.185 C 149.748 27.686,149.550 28.651,148.917 28.893 C 148.780 28.946,148.665 29.123,148.662 29.286 C 148.655 29.777,147.788 30.703,147.455 30.575 C 147.035 30.414,147.072 29.667,147.500 29.667 C 147.862 29.667,147.909 29.544,147.683 29.187 C 147.517 28.925,147.167 29.075,147.167 29.407 C 147.167 29.528,147.017 29.667,146.833 29.715 C 146.270 29.862,146.372 30.796,146.958 30.864 C 147.373 30.912,147.417 30.980,147.417 31.581 C 147.417 32.456,146.917 32.623,146.644 31.839 C 146.420 31.198,146.101 31.263,146.032 31.963 C 145.998 32.303,145.868 32.519,145.657 32.586 C 145.178 32.739,145.176 34.333,145.655 34.333 C 146.162 34.333,146.456 34.742,146.370 35.328 C 146.273 35.987,145.456 36.025,145.363 35.375 C 145.241 34.515,144.833 34.984,144.833 35.984 C 144.833 36.852,144.869 36.959,145.135 36.890 C 145.795 36.717,146.207 40.316,145.585 40.832 C 145.250 41.110,144.833 40.923,144.833 40.493 C 144.833 40.249,144.745 40.159,144.542 40.198 C 144.291 40.247,144.250 40.454,144.250 41.667 C 144.250 42.879,144.291 43.087,144.542 43.135 C 144.711 43.168,144.833 43.090,144.833 42.949 C 144.833 42.533,145.292 42.258,145.583 42.500 C 146.230 43.037,145.813 47.053,145.136 46.793 C 144.944 46.720,144.883 46.875,144.854 47.516 C 144.814 48.403,145.114 48.644,145.419 47.969 C 145.658 47.439,145.940 47.420,146.262 47.912 C 146.674 48.540,146.413 49.397,145.786 49.469 C 145.288 49.527,145.135 50.235,145.533 50.633 C 145.841 50.941,146.000 50.873,146.000 50.434 C 146.000 49.921,146.500 49.713,146.787 50.106 C 147.197 50.666,146.932 51.333,146.300 51.333 C 146.068 51.333,146.000 51.466,146.000 51.917 C 146.000 52.313,146.077 52.500,146.239 52.500 C 146.388 52.500,146.499 52.706,146.531 53.040 C 146.592 53.671,147.167 53.942,147.167 53.340 C 147.167 52.953,147.525 52.743,147.926 52.897 C 148.274 53.031,147.975 53.580,147.554 53.582 C 147.323 53.583,147.238 53.734,147.198 54.208 C 147.162 54.641,147.214 54.833,147.367 54.833 C 147.487 54.833,147.680 54.983,147.795 55.167 C 148.057 55.587,148.333 55.597,148.333 55.186 C 148.333 55.012,148.184 54.833,148.000 54.785 C 147.728 54.714,147.693 54.625,147.810 54.307 C 148.025 53.725,148.397 53.751,148.878 54.380 C 149.331 54.975,149.295 55.255,148.750 55.357 C 148.008 55.496,148.554 57.167,149.342 57.167 C 149.429 57.167,149.500 57.286,149.500 57.432 C 149.500 57.578,149.650 57.737,149.833 57.785 C 150.017 57.833,150.167 57.976,150.167 58.103 C 150.167 58.230,150.270 58.333,150.397 58.333 C 150.524 58.333,150.668 58.489,150.718 58.678 C 150.834 59.123,151.945 59.094,151.873 58.647 C 151.816 58.299,152.256 57.935,152.581 58.059 C 152.720 58.113,152.833 58.307,152.833 58.491 C 152.833 58.768,152.913 58.809,153.301 58.731 C 153.615 58.669,153.841 58.725,153.988 58.902 C 154.109 59.048,154.339 59.167,154.500 59.167 C 154.661 59.167,154.886 59.279,155.000 59.417 C 155.260 59.729,154.956 60.167,154.480 60.167 C 154.307 60.167,154.167 60.279,154.167 60.417 C 154.167 60.597,154.352 60.667,154.833 60.667 C 155.425 60.667,155.500 60.622,155.500 60.268 C 155.500 59.668,156.263 59.453,156.731 59.921 C 157.072 60.263,156.892 60.667,156.399 60.667 C 156.111 60.667,156.000 60.760,156.000 61.000 C 156.000 61.268,156.111 61.333,156.570 61.333 C 157.332 61.333,157.665 61.189,157.556 60.905 C 157.387 60.466,158.348 60.290,161.016 60.269 C 163.724 60.249,164.228 60.364,164.127 60.981 C 164.063 61.373,165.224 61.364,165.299 60.971 C 165.335 60.787,165.223 60.674,164.970 60.638 C 164.442 60.563,164.401 60.109,164.899 59.843 C 165.441 59.553,165.833 59.721,165.833 60.245 C 165.833 60.613,165.905 60.667,166.399 60.667 C 167.110 60.667,167.368 60.212,166.701 60.135 C 165.857 60.037,166.071 59.175,166.941 59.169 C 167.137 59.168,167.341 59.054,167.394 58.917 C 167.547 58.518,168.135 58.609,168.197 59.042 C 168.307 59.819,169.986 59.352,169.997 58.542 C 169.999 58.415,170.229 58.333,170.583 58.333 C 170.933 58.333,171.171 58.250,171.179 58.125 C 171.185 58.010,171.216 57.617,171.247 57.250 C 171.278 56.883,171.267 56.715,171.223 56.875 C 171.115 57.267,170.548 57.247,170.421 56.847 C 170.347 56.615,170.526 56.315,171.073 55.752 C 171.951 54.849,172.228 54.892,172.076 55.907 C 172.018 56.297,172.055 57.177,172.158 57.863 C 172.373 59.276,172.215 60.000,171.692 60.000 C 171.473 60.000,171.344 59.845,171.275 59.500 C 171.120 58.724,170.632 58.830,170.698 59.625 C 170.730 60.008,170.836 60.250,170.972 60.250 C 171.233 60.250,171.667 60.798,171.667 61.128 C 171.667 61.572,170.662 62.412,170.358 62.221 C 169.928 61.952,169.903 61.333,170.322 61.333 C 170.561 61.333,170.667 61.226,170.667 60.982 C 170.667 60.730,170.592 60.660,170.403 60.732 C 170.258 60.788,170.108 60.833,170.070 60.833 C 170.031 60.833,170.000 60.946,170.000 61.083 C 170.000 61.221,169.887 61.333,169.750 61.333 C 169.577 61.333,169.500 61.507,169.500 61.897 C 169.500 62.321,169.417 62.483,169.167 62.548 C 168.983 62.596,168.833 62.755,168.833 62.901 C 168.833 63.056,168.973 63.167,169.167 63.167 C 169.352 63.167,169.500 63.056,169.500 62.917 C 169.500 62.592,170.148 62.590,170.272 62.914 C 170.401 63.251,169.045 64.500,168.549 64.500 C 168.339 64.500,168.167 64.598,168.167 64.717 C 168.167 65.107,167.809 65.332,167.474 65.153 C 167.044 64.923,167.070 64.333,167.510 64.333 C 167.719 64.333,167.808 64.261,167.738 64.148 C 167.675 64.046,167.727 63.897,167.854 63.817 C 168.018 63.713,167.959 63.671,167.644 63.669 C 167.344 63.667,167.178 63.772,167.118 64.000 C 167.055 64.243,166.891 64.333,166.516 64.333 C 166.168 64.333,166.000 64.415,166.000 64.583 C 166.000 64.758,165.824 64.833,165.417 64.833 C 164.944 64.833,164.833 64.897,164.833 65.167 C 164.833 65.411,164.944 65.500,165.250 65.500 C 165.582 65.500,165.667 65.584,165.667 65.913 C 165.667 66.700,164.089 66.626,163.881 65.829 C 163.770 65.408,161.833 65.322,161.833 65.738 C 161.833 65.870,162.002 66.001,162.208 66.030 C 162.743 66.106,162.811 66.763,162.301 66.932 C 161.726 67.122,159.649 67.140,159.125 66.959 C 158.534 66.755,158.508 66.213,159.083 66.068 C 159.922 65.858,159.563 65.500,158.512 65.500 C 157.618 65.500,157.518 65.535,157.470 65.869 C 157.400 66.356,156.508 66.633,155.901 66.357 C 155.343 66.102,155.429 65.602,156.043 65.531 C 156.370 65.493,156.500 65.384,156.500 65.147 C 156.500 64.587,154.800 64.759,154.666 65.333 C 154.603 65.602,154.453 65.750,154.242 65.750 C 153.673 65.750,153.805 64.929,154.385 64.863 C 155.124 64.778,154.813 64.431,153.861 64.279 C 153.292 64.188,153.000 64.061,153.000 63.904 C 153.000 63.744,152.810 63.667,152.417 63.667 C 152.030 63.667,151.833 63.589,151.833 63.435 C 151.833 63.303,151.584 63.157,151.250 63.094 C 150.901 63.029,150.667 62.888,150.667 62.742 C 150.667 62.553,150.410 62.500,149.500 62.500 L 148.333 62.500 148.333 67.333 L 148.333 72.167 164.250 72.167 C 173.004 72.167,180.167 72.103,180.167 72.026 C 180.167 71.832,182.096 69.871,182.926 69.220 C 183.621 68.675,184.156 68.688,183.942 69.244 C 183.884 69.396,183.760 69.474,183.668 69.417 C 183.571 69.358,183.500 69.502,183.500 69.758 C 183.500 70.095,183.564 70.178,183.764 70.101 C 183.909 70.046,184.059 70.000,184.097 70.000 C 184.135 70.000,184.167 69.887,184.167 69.750 C 184.167 69.612,184.279 69.500,184.417 69.500 C 184.590 69.500,184.667 69.326,184.667 68.936 C 184.667 68.512,184.750 68.351,185.000 68.285 C 185.183 68.237,185.333 68.078,185.333 67.932 C 185.333 67.778,185.194 67.667,185.000 67.667 C 184.778 67.667,184.667 67.778,184.667 68.000 C 184.667 68.431,184.074 68.449,183.847 68.026 C 183.668 67.691,183.893 67.333,184.283 67.333 C 184.403 67.333,184.500 67.180,184.500 66.993 C 184.500 66.516,185.167 65.667,185.542 65.667 C 185.786 65.667,185.844 65.769,185.803 66.125 C 185.773 66.383,185.659 66.565,185.542 66.542 C 185.427 66.519,185.333 66.650,185.333 66.833 C 185.333 67.019,185.444 67.167,185.583 67.167 C 185.721 67.167,185.833 67.059,185.833 66.928 C 185.833 66.797,185.983 66.642,186.167 66.583 C 186.401 66.509,186.500 66.331,186.500 65.984 C 186.500 65.698,186.606 65.449,186.750 65.394 C 187.156 65.238,187.099 63.667,186.687 63.667 C 186.051 63.667,185.889 63.011,186.371 62.385 C 186.585 62.107,187.000 62.305,187.000 62.684 C 187.000 62.889,187.117 63.000,187.333 63.000 C 187.603 63.000,187.667 62.889,187.667 62.417 C 187.667 61.913,187.613 61.833,187.268 61.833 C 186.596 61.833,186.358 60.287,186.999 60.084 C 187.395 59.958,187.667 60.097,187.667 60.427 C 187.667 60.751,188.106 60.733,188.232 60.403 C 188.527 59.634,188.346 58.657,187.927 58.762 C 187.171 58.952,187.162 58.734,187.208 39.813 L 187.250 22.083 187.787 22.000 C 188.166 21.941,188.286 21.855,188.193 21.707 C 188.090 21.542,186.271 21.506,179.656 21.540 L 171.250 21.583 171.199 22.375 C 171.152 23.112,170.667 23.605,170.667 22.917 C 170.667 22.744,170.493 22.667,170.103 22.667 C 169.679 22.667,169.517 22.584,169.452 22.333 C 169.404 22.150,169.245 22.000,169.099 22.000 C 168.953 22.000,168.833 21.887,168.833 21.750 C 168.833 21.569,168.648 21.500,168.167 21.500 C 167.692 21.500,167.500 21.570,167.500 21.744 C 167.500 22.033,166.996 22.333,166.511 22.333 C 166.255 22.333,166.167 22.227,166.167 21.917 C 166.167 21.562,166.243 21.500,166.684 21.500 C 167.088 21.500,167.180 21.442,167.101 21.236 C 167.046 21.091,167.000 20.941,167.000 20.903 C 167.000 20.772,165.917 20.838,165.687 20.984 C 165.561 21.064,165.509 21.213,165.572 21.315 C 165.794 21.674,164.738 21.880,162.489 21.916 C 159.936 21.958,159.113 21.789,159.030 21.208 C 158.955 20.678,157.167 20.627,157.167 21.156 M321.667 21.083 C 321.667 21.221,321.779 21.333,321.917 21.333 C 322.054 21.333,322.167 21.221,322.167 21.083 C 322.167 20.946,322.054 20.833,321.917 20.833 C 321.779 20.833,321.667 20.946,321.667 21.083 M343.833 21.154 C 343.833 21.393,343.940 21.500,344.179 21.500 C 344.606 21.500,344.558 20.948,344.123 20.865 C 343.923 20.826,343.833 20.916,343.833 21.154 M314.986 21.375 C 315.163 21.843,315.075 22.000,314.639 22.000 C 314.404 22.000,314.328 22.078,314.394 22.250 C 314.457 22.415,314.388 22.500,314.189 22.500 C 313.701 22.500,313.670 22.337,314.028 21.650 C 314.409 20.920,314.774 20.815,314.986 21.375 M123.500 21.903 C 123.500 22.363,123.217 22.524,122.792 22.305 C 122.284 22.044,122.424 21.500,123.000 21.500 C 123.418 21.500,123.500 21.566,123.500 21.903 M194.167 21.739 C 194.167 21.876,194.363 22.000,194.625 22.031 L 195.083 22.083 195.126 35.217 C 195.169 48.393,195.145 49.000,194.595 49.000 C 194.131 49.000,193.970 50.555,194.417 50.727 C 194.558 50.781,194.667 50.731,194.667 50.610 C 194.667 50.493,194.779 50.251,194.917 50.074 C 195.483 49.341,196.078 50.776,195.594 51.705 C 195.369 52.137,195.379 52.171,195.803 52.373 C 196.494 52.702,196.520 53.471,195.845 53.606 C 195.395 53.696,195.333 53.776,195.333 54.271 C 195.333 54.858,195.764 55.087,195.922 54.583 C 195.965 54.446,196.036 54.218,196.081 54.076 C 196.199 53.701,196.833 54.076,196.833 54.521 C 196.833 54.709,197.000 54.998,197.203 55.163 C 197.519 55.419,197.540 55.501,197.349 55.731 C 197.083 56.051,196.500 56.090,196.500 55.787 C 196.500 55.670,196.350 55.446,196.167 55.289 C 195.846 55.014,195.833 55.019,195.833 55.434 C 195.833 55.724,195.942 55.893,196.167 55.952 C 196.417 56.017,196.500 56.179,196.500 56.603 C 196.500 56.981,196.579 57.167,196.739 57.167 C 196.870 57.167,197.025 57.317,197.083 57.500 C 197.142 57.683,197.297 57.833,197.428 57.833 C 197.559 57.833,197.667 57.946,197.667 58.083 C 197.667 58.222,197.815 58.333,198.000 58.333 C 198.222 58.333,198.333 58.444,198.333 58.667 C 198.333 58.852,198.444 59.000,198.583 59.000 C 198.721 59.000,198.833 59.112,198.833 59.250 C 198.833 59.389,198.981 59.500,199.167 59.500 C 199.352 59.500,199.500 59.389,199.500 59.250 C 199.500 59.111,199.352 59.000,199.167 59.000 C 198.944 59.000,198.833 58.889,198.833 58.667 C 198.833 58.481,198.722 58.333,198.583 58.333 C 198.446 58.333,198.333 58.221,198.333 58.083 C 198.333 57.944,198.185 57.833,198.000 57.833 C 197.778 57.833,197.667 57.722,197.667 57.500 C 197.667 57.315,197.556 57.167,197.417 57.167 C 197.261 57.167,197.167 57.009,197.167 56.750 C 197.167 56.459,197.258 56.333,197.469 56.333 C 197.798 56.333,199.833 58.185,199.833 58.484 C 199.833 58.584,200.040 58.668,200.292 58.670 C 200.833 58.673,201.552 59.356,201.469 59.787 C 201.437 59.951,201.265 60.083,201.083 60.084 C 200.902 60.084,200.729 60.215,200.698 60.375 C 200.653 60.613,200.764 60.667,201.306 60.667 C 201.880 60.667,201.958 60.624,201.884 60.343 C 201.783 59.958,202.759 59.593,203.125 59.878 C 203.546 60.207,203.369 60.667,202.821 60.667 C 202.091 60.667,202.207 61.229,202.952 61.302 C 203.524 61.357,204.231 61.073,204.090 60.844 C 203.847 60.451,204.604 60.287,206.877 60.237 C 209.856 60.172,210.398 60.269,210.469 60.881 C 210.540 61.484,212.131 61.588,212.285 61.000 C 212.351 60.750,212.512 60.667,212.936 60.667 C 213.326 60.667,213.500 60.590,213.500 60.417 C 213.500 60.279,213.359 60.167,213.187 60.167 C 212.677 60.167,212.390 59.705,212.705 59.390 C 213.025 59.070,213.580 59.316,213.582 59.779 C 213.584 60.246,214.495 60.304,214.615 59.846 C 214.684 59.582,214.839 59.500,215.269 59.500 C 215.660 59.500,215.833 59.423,215.833 59.250 C 215.833 59.112,215.941 59.000,216.072 59.000 C 216.203 59.000,216.358 58.850,216.417 58.667 C 216.475 58.483,216.630 58.333,216.761 58.333 C 216.893 58.333,217.000 58.230,217.000 58.103 C 217.000 57.976,217.150 57.833,217.333 57.785 C 217.517 57.737,217.667 57.578,217.667 57.432 C 217.667 57.278,217.527 57.167,217.333 57.167 C 217.111 57.167,217.000 57.278,217.000 57.500 C 217.000 57.720,216.889 57.833,216.672 57.833 C 216.449 57.833,216.374 57.913,216.440 58.083 C 216.505 58.254,216.430 58.333,216.204 58.333 C 216.008 58.333,215.835 58.475,215.781 58.681 C 215.723 58.906,215.583 59.008,215.389 58.971 C 214.996 58.895,214.890 58.325,215.233 58.133 C 215.380 58.051,215.500 57.907,215.500 57.814 C 215.500 57.495,217.572 55.667,217.933 55.667 C 218.342 55.667,218.310 56.456,217.895 56.615 C 217.590 56.732,217.602 57.167,217.911 57.167 C 218.106 57.167,218.164 57.507,218.203 58.875 L 218.250 60.583 227.042 60.626 L 235.833 60.670 235.833 41.083 L 235.833 21.497 227.042 21.540 L 218.250 21.583 218.207 32.697 L 218.164 43.811 218.617 43.864 C 219.136 43.924,219.430 44.813,219.253 45.782 C 219.087 46.686,218.177 46.694,218.169 45.792 C 218.168 45.631,218.054 45.500,217.917 45.500 C 217.471 45.500,217.597 46.482,218.066 46.660 C 218.748 46.920,218.647 47.207,217.455 48.390 C 216.411 49.425,216.251 49.525,215.791 49.433 C 214.862 49.247,214.474 48.592,215.208 48.451 C 215.415 48.411,215.208 48.373,214.750 48.367 C 214.095 48.357,213.997 48.387,214.292 48.505 C 214.967 48.777,214.613 49.283,213.640 49.438 C 212.977 49.544,211.928 48.751,212.029 48.222 C 212.116 47.761,212.833 47.712,212.833 48.167 C 212.833 48.417,212.921 48.508,213.123 48.469 C 213.449 48.406,213.633 47.833,213.327 47.833 C 213.062 47.833,212.340 47.135,212.336 46.875 C 212.330 46.430,211.690 46.657,211.636 47.124 C 211.576 47.643,211.059 47.848,210.894 47.418 C 210.769 47.091,211.137 46.335,211.399 46.383 C 211.663 46.431,211.639 44.963,211.375 44.875 C 211.244 44.831,211.167 44.967,211.167 45.241 C 211.167 45.744,210.776 45.965,210.415 45.665 C 210.199 45.486,210.167 43.908,210.167 33.730 L 210.167 22.000 210.667 22.000 C 211.000 22.000,211.167 21.917,211.167 21.750 C 211.167 21.531,210.111 21.500,202.667 21.500 C 195.397 21.500,194.167 21.535,194.167 21.739 M294.003 21.958 C 294.004 22.284,294.047 22.350,294.151 22.187 C 294.236 22.051,294.384 22.011,294.510 22.089 C 294.664 22.185,294.692 22.140,294.612 21.930 C 294.550 21.770,294.500 21.608,294.500 21.570 C 294.500 21.531,294.387 21.500,294.250 21.500 C 294.088 21.500,294.001 21.661,294.003 21.958 M134.167 22.236 C 134.167 22.949,133.725 23.221,133.333 22.750 C 133.168 22.551,133.168 22.449,133.333 22.250 C 133.596 21.933,134.167 21.924,134.167 22.236 M168.833 22.333 C 168.833 22.517,168.938 22.667,169.066 22.667 C 169.378 22.667,169.519 23.081,169.287 23.313 C 169.006 23.594,168.793 23.543,168.290 23.077 C 167.779 22.603,167.745 22.488,168.033 22.200 C 168.355 21.878,168.833 21.957,168.833 22.333 M171.988 23.833 C 171.972 24.750,171.916 25.500,171.863 25.500 C 171.065 25.500,169.331 23.498,169.930 23.268 C 170.412 23.083,170.667 23.163,170.667 23.500 C 170.667 23.722,170.778 23.833,171.000 23.833 C 171.289 23.833,171.333 23.722,171.333 23.000 C 171.333 22.271,171.376 22.167,171.675 22.167 C 171.998 22.167,172.015 22.255,171.988 23.833 M67.667 23.066 C 67.667 23.559,67.263 23.739,66.921 23.398 C 66.490 22.966,66.636 22.667,67.278 22.667 C 67.577 22.667,67.667 22.759,67.667 23.066 M85.970 23.042 C 85.888 23.617,85.167 23.665,85.167 23.095 C 85.167 22.746,85.246 22.667,85.595 22.667 C 85.944 22.667,86.013 22.736,85.970 23.042 M135.333 22.917 C 135.333 23.056,135.481 23.167,135.667 23.167 C 135.889 23.167,136.000 23.278,136.000 23.500 C 136.000 23.685,136.111 23.833,136.250 23.833 C 136.387 23.833,136.500 23.946,136.500 24.083 C 136.500 24.222,136.648 24.333,136.833 24.333 C 137.056 24.333,137.167 24.444,137.167 24.667 C 137.167 24.852,137.278 25.000,137.417 25.000 C 137.572 25.000,137.667 25.157,137.667 25.417 C 137.667 26.171,137.063 25.912,135.742 24.591 C 134.421 23.270,134.162 22.667,134.917 22.667 C 135.176 22.667,135.333 22.761,135.333 22.917 M155.167 23.066 C 155.167 23.720,154.525 23.776,154.291 23.141 C 154.162 22.791,154.289 22.667,154.778 22.667 C 155.077 22.667,155.167 22.759,155.167 23.066 M326.667 23.764 C 326.667 24.064,326.201 24.382,325.919 24.274 C 325.780 24.221,325.667 24.066,325.667 23.930 C 325.667 23.794,325.535 23.606,325.375 23.511 C 325.144 23.375,325.129 23.309,325.302 23.195 C 325.567 23.020,326.667 23.479,326.667 23.764 M64.333 23.500 C 64.333 23.683,64.229 23.833,64.101 23.833 C 63.973 23.833,63.826 23.946,63.773 24.083 C 63.708 24.253,63.782 24.333,64.005 24.333 C 64.186 24.333,64.333 24.221,64.333 24.083 C 64.333 23.929,64.490 23.833,64.740 23.833 C 65.043 23.833,65.140 23.749,65.121 23.500 C 65.104 23.271,64.976 23.167,64.715 23.167 C 64.444 23.167,64.333 23.264,64.333 23.500 M87.167 23.481 C 87.167 23.653,87.312 23.832,87.489 23.879 C 87.827 23.967,87.806 24.561,87.457 24.777 C 87.099 24.998,86.141 23.581,86.444 23.278 C 86.684 23.038,87.167 23.174,87.167 23.481 M119.900 23.433 C 120.107 23.972,118.491 25.505,118.078 25.162 C 117.759 24.897,117.762 24.333,118.083 24.333 C 118.221 24.333,118.333 24.221,118.333 24.083 C 118.333 23.944,118.481 23.833,118.667 23.833 C 118.889 23.833,119.000 23.722,119.000 23.500 C 119.000 23.086,119.745 23.030,119.900 23.433 M153.965 23.589 C 154.024 23.999,153.143 24.711,152.759 24.564 C 152.427 24.436,152.420 23.833,152.750 23.833 C 152.892 23.833,153.000 23.684,153.000 23.489 C 153.000 23.003,153.895 23.096,153.965 23.589 M268.778 23.944 C 268.566 24.156,268.664 24.537,268.906 24.444 C 269.037 24.393,269.182 24.442,269.226 24.551 C 269.271 24.660,269.313 24.544,269.320 24.292 C 269.333 23.859,269.046 23.676,268.778 23.944 M294.133 24.200 C 294.243 24.310,294.333 24.610,294.333 24.867 C 294.333 25.533,293.580 25.549,293.453 24.886 C 293.303 24.097,293.665 23.732,294.133 24.200 M36.408 24.490 C 36.824 24.950,36.556 25.750,35.986 25.750 C 35.652 25.750,35.574 25.656,35.530 25.197 C 35.444 24.293,35.898 23.927,36.408 24.490 M62.583 24.667 C 62.525 24.850,62.370 25.000,62.239 25.000 C 62.107 25.000,62.000 25.104,62.000 25.231 C 62.000 25.357,61.850 25.500,61.667 25.548 C 61.483 25.596,61.333 25.755,61.333 25.901 C 61.333 26.056,61.473 26.167,61.667 26.167 C 61.889 26.167,62.000 26.056,62.000 25.833 C 62.000 25.611,62.111 25.500,62.333 25.500 C 62.519 25.500,62.667 25.389,62.667 25.250 C 62.667 25.105,62.818 25.000,63.028 25.000 C 63.226 25.000,63.340 24.951,63.279 24.890 C 63.219 24.830,63.253 24.680,63.355 24.557 C 63.502 24.380,63.452 24.333,63.115 24.333 C 62.836 24.333,62.653 24.448,62.583 24.667 M88.952 24.667 C 88.887 24.914,88.947 25.000,89.182 25.000 C 89.357 25.000,89.500 25.113,89.500 25.250 C 89.500 25.389,89.648 25.500,89.833 25.500 C 90.056 25.500,90.167 25.611,90.167 25.833 C 90.167 26.019,90.278 26.167,90.417 26.167 C 90.554 26.167,90.667 26.271,90.667 26.399 C 90.667 26.650,91.072 26.873,91.234 26.711 C 91.453 26.491,91.314 26.167,91.000 26.167 C 90.778 26.167,90.667 26.056,90.667 25.833 C 90.667 25.648,90.556 25.500,90.417 25.500 C 90.279 25.500,90.167 25.387,90.167 25.250 C 90.167 25.111,90.019 25.000,89.833 25.000 C 89.611 25.000,89.500 24.889,89.500 24.667 C 89.500 24.483,89.396 24.333,89.269 24.333 C 89.143 24.333,89.000 24.483,88.952 24.667 M152.138 24.724 C 152.200 25.044,152.144 25.117,150.883 26.375 C 149.946 27.310,149.500 27.404,149.500 26.667 C 149.500 26.278,149.574 26.167,149.833 26.167 C 150.056 26.167,150.167 26.056,150.167 25.833 C 150.167 25.648,150.278 25.500,150.417 25.500 C 150.554 25.500,150.667 25.387,150.667 25.250 C 150.667 25.113,150.808 25.000,150.981 25.000 C 151.159 25.000,151.334 24.850,151.385 24.652 C 151.497 24.227,152.052 24.280,152.138 24.724 M286.070 24.601 C 286.411 24.732,286.411 25.314,286.070 25.445 C 285.659 25.602,285.223 25.084,285.493 24.758 C 285.739 24.462,285.721 24.467,286.070 24.601 M117.556 25.906 C 117.600 26.019,117.420 26.331,117.158 26.598 C 116.240 27.531,115.962 27.677,115.751 27.335 C 115.654 27.178,115.760 27.002,116.346 26.350 C 116.491 26.189,116.655 25.938,116.711 25.792 C 116.826 25.491,117.428 25.572,117.556 25.906 M285.640 26.401 C 285.684 26.632,285.630 26.688,285.434 26.613 C 285.233 26.536,285.167 26.613,285.167 26.922 C 285.167 27.222,285.077 27.333,284.833 27.333 C 284.648 27.333,284.500 27.444,284.500 27.583 C 284.500 27.721,284.387 27.833,284.250 27.833 C 284.111 27.833,284.000 27.981,284.000 28.167 C 284.000 28.389,283.889 28.500,283.667 28.500 C 283.481 28.500,283.333 28.611,283.333 28.750 C 283.333 28.887,283.218 29.000,283.078 29.000 C 282.765 29.000,282.530 28.462,282.803 28.371 C 282.912 28.335,283.000 28.193,283.000 28.056 C 283.000 27.787,284.186 26.540,284.743 26.223 C 285.211 25.956,285.568 26.027,285.640 26.401 M60.833 26.399 C 60.833 26.641,61.236 26.875,61.389 26.722 C 61.437 26.674,61.437 26.529,61.387 26.400 C 61.271 26.098,60.833 26.096,60.833 26.399 M267.902 26.438 C 267.959 26.587,267.922 26.810,267.819 26.934 C 267.566 27.239,267.000 26.935,267.000 26.494 C 267.000 26.082,267.747 26.036,267.902 26.438 M148.833 27.167 C 148.833 27.258,148.721 27.333,148.583 27.333 C 148.446 27.333,148.333 27.446,148.333 27.583 C 148.333 27.721,148.229 27.833,148.101 27.833 C 147.849 27.833,147.659 28.197,147.680 28.639 C 147.688 28.812,147.725 28.838,147.777 28.708 C 147.823 28.594,147.967 28.500,148.097 28.500 C 148.227 28.500,148.333 28.350,148.333 28.167 C 148.333 27.944,148.444 27.833,148.667 27.833 C 148.911 27.833,149.000 27.722,149.000 27.417 C 149.000 27.188,148.962 27.000,148.917 27.000 C 148.871 27.000,148.833 27.075,148.833 27.167 M91.894 28.250 C 91.946 28.387,92.104 28.500,92.245 28.500 C 92.595 28.500,92.577 29.268,92.224 29.404 C 91.867 29.541,90.923 28.607,91.060 28.251 C 91.184 27.927,91.769 27.926,91.894 28.250 M32.667 29.907 C 32.667 30.249,33.012 30.417,33.174 30.154 C 33.250 30.032,33.274 29.873,33.229 29.800 C 33.089 29.573,32.667 29.653,32.667 29.907 M59.333 29.917 C 59.577 30.210,59.300 30.667,58.878 30.667 C 58.700 30.667,58.659 30.779,58.730 31.064 C 58.862 31.588,58.450 31.971,58.083 31.667 C 57.737 31.379,57.771 30.896,58.167 30.500 C 58.350 30.317,58.500 30.054,58.500 29.917 C 58.500 29.779,58.641 29.667,58.813 29.667 C 58.985 29.667,59.219 29.779,59.333 29.917 M93.107 29.919 C 93.199 30.158,92.911 30.670,92.688 30.664 C 92.360 30.656,92.142 30.341,92.243 30.021 C 92.373 29.611,92.962 29.542,93.107 29.919 M280.487 30.208 C 280.349 30.660,280.396 30.846,280.636 30.799 C 281.000 30.729,281.112 30.167,280.762 30.167 C 280.618 30.167,280.494 30.185,280.487 30.208 M93.637 31.294 C 93.700 31.740,93.273 31.962,92.918 31.668 C 92.734 31.515,92.716 31.385,92.848 31.139 C 93.074 30.716,93.568 30.813,93.637 31.294 M74.633 31.200 C 74.953 31.519,74.876 32.000,74.506 32.000 C 74.085 32.000,73.774 31.459,74.041 31.192 C 74.284 30.950,74.384 30.951,74.633 31.200 M78.083 31.512 C 78.083 31.761,77.973 31.933,77.791 31.968 C 77.416 32.041,77.233 31.572,77.506 31.242 C 77.795 30.894,78.083 31.029,78.083 31.512 M276.570 31.101 C 276.891 31.225,276.916 31.599,276.610 31.717 C 276.276 31.845,275.937 31.571,276.054 31.267 C 276.168 30.968,276.198 30.959,276.570 31.101 M52.000 32.079 C 52.000 32.403,51.726 32.541,51.332 32.416 C 50.961 32.298,50.902 31.998,51.192 31.708 C 51.429 31.471,52.000 31.733,52.000 32.079 M79.534 32.205 C 80.158 32.903,80.123 33.560,79.458 33.636 C 78.863 33.705,78.745 34.833,79.333 34.833 C 79.580 34.833,79.667 34.722,79.667 34.406 C 79.667 34.037,79.730 33.985,80.125 34.031 C 80.800 34.108,80.741 35.304,80.057 35.402 C 79.657 35.460,79.502 36.667,79.895 36.667 C 80.396 36.667,80.727 37.178,80.422 37.482 C 80.147 37.757,72.531 37.912,71.509 37.663 C 71.013 37.543,70.789 36.861,71.064 36.309 C 71.343 35.750,71.797 35.713,71.929 36.239 C 72.134 37.056,72.500 36.743,72.500 35.750 C 72.500 34.978,72.453 34.833,72.200 34.833 C 71.808 34.833,71.503 34.520,71.614 34.230 C 71.780 33.798,72.500 33.950,72.500 34.417 C 72.500 34.722,72.589 34.833,72.833 34.833 C 73.103 34.833,73.167 34.722,73.167 34.250 C 73.167 33.843,73.242 33.667,73.417 33.667 C 73.554 33.667,73.667 33.554,73.667 33.417 C 73.667 33.279,73.786 33.167,73.932 33.167 C 74.078 33.167,74.237 33.017,74.285 32.833 C 74.333 32.650,74.476 32.500,74.603 32.500 C 74.730 32.500,74.833 32.387,74.833 32.250 C 74.833 32.050,75.083 32.000,76.083 32.000 C 77.083 32.000,77.333 32.050,77.333 32.250 C 77.333 32.425,77.509 32.500,77.917 32.500 C 78.389 32.500,78.500 32.563,78.500 32.833 C 78.500 33.230,78.921 33.280,79.066 32.901 C 79.134 32.724,79.057 32.607,78.834 32.548 C 78.356 32.424,78.403 31.667,78.888 31.667 C 78.979 31.667,79.270 31.909,79.534 32.205 M58.167 32.250 C 58.332 32.449,58.332 32.551,58.167 32.750 C 57.750 33.252,57.157 32.868,57.394 32.250 C 57.446 32.112,57.595 32.000,57.724 32.000 C 57.854 32.000,58.053 32.112,58.167 32.250 M73.392 32.628 C 73.286 32.695,73.174 32.938,73.142 33.167 C 73.062 33.736,72.277 33.771,72.197 33.208 C 72.167 33.002,72.224 32.824,72.322 32.813 C 72.750 32.762,72.812 32.743,72.931 32.625 C 72.999 32.556,73.174 32.501,73.319 32.503 C 73.495 32.504,73.519 32.546,73.392 32.628 M51.070 32.768 C 51.456 32.916,51.415 33.667,51.020 33.667 C 50.544 33.667,50.240 33.229,50.500 32.917 C 50.738 32.630,50.721 32.634,51.070 32.768 M146.905 32.946 C 147.044 33.307,146.641 33.710,146.280 33.572 C 146.126 33.513,146.000 33.285,146.000 33.066 C 146.000 32.585,146.730 32.489,146.905 32.946 M166.638 33.083 C 166.700 33.144,166.750 33.282,166.750 33.389 C 166.750 33.496,166.862 33.583,167.000 33.583 C 167.137 33.583,167.234 33.497,167.214 33.391 C 167.145 33.029,167.750 32.749,168.458 32.814 C 168.968 32.861,168.681 33.667,168.154 33.667 C 167.428 33.667,167.539 34.229,168.279 34.301 C 168.717 34.344,168.844 34.273,169.030 33.885 C 169.300 33.322,169.729 33.271,169.803 33.793 C 169.847 34.098,169.759 34.190,169.345 34.273 C 168.780 34.386,168.638 34.833,169.167 34.833 C 169.389 34.833,169.500 34.944,169.500 35.167 C 169.500 35.350,169.604 35.500,169.732 35.500 C 169.860 35.500,170.008 35.612,170.060 35.750 C 170.221 36.168,170.667 36.046,170.667 35.583 C 170.667 35.255,170.751 35.167,171.066 35.167 C 171.487 35.167,171.717 35.507,171.565 35.904 C 171.513 36.041,171.624 36.222,171.829 36.331 C 172.126 36.490,172.176 36.647,172.134 37.285 C 172.078 38.138,171.628 38.632,171.331 38.167 C 171.222 37.995,171.171 38.319,171.169 39.198 C 171.168 39.945,171.242 40.527,171.348 40.592 C 171.478 40.673,171.478 40.755,171.348 40.885 C 171.247 40.987,171.167 41.673,171.167 42.439 L 171.167 43.811 171.625 43.864 C 172.040 43.912,172.083 43.980,172.083 44.581 C 172.083 45.455,171.580 45.623,171.288 44.847 C 171.025 44.152,170.667 44.181,170.667 44.897 C 170.667 45.321,170.584 45.483,170.333 45.548 C 170.091 45.612,170.000 45.776,170.000 46.151 C 170.000 46.498,169.918 46.667,169.750 46.667 C 169.612 46.667,169.500 46.786,169.500 46.932 C 169.500 47.078,169.350 47.237,169.167 47.285 C 168.744 47.396,168.729 47.833,169.147 47.833 C 169.326 47.833,169.501 47.683,169.553 47.483 C 169.603 47.291,169.716 47.177,169.803 47.231 C 169.891 47.285,170.003 47.174,170.053 46.984 C 170.158 46.581,170.624 46.606,170.889 47.028 C 171.032 47.254,170.916 47.453,170.275 48.085 C 169.449 48.899,169.065 48.963,168.971 48.302 C 168.901 47.804,167.792 47.723,167.698 48.208 C 167.655 48.435,167.756 48.500,168.154 48.500 C 168.724 48.500,168.871 48.956,168.422 49.329 C 168.102 49.595,166.844 49.389,166.714 49.048 C 166.629 48.827,166.600 48.828,166.471 49.058 C 166.162 49.610,164.639 49.603,164.427 49.049 C 164.293 48.701,164.488 48.511,165.024 48.467 C 165.715 48.409,165.448 47.833,164.731 47.833 C 164.352 47.833,164.167 47.755,164.167 47.595 C 164.167 47.463,164.017 47.308,163.833 47.250 C 163.599 47.176,163.500 46.998,163.500 46.650 C 163.500 46.365,163.394 46.116,163.250 46.060 C 163.105 46.005,163.000 45.755,163.000 45.467 C 163.000 45.109,162.906 44.944,162.667 44.882 C 162.391 44.809,162.333 44.654,162.333 43.981 C 162.333 43.124,161.912 42.775,161.803 43.542 C 161.769 43.781,161.616 43.936,161.381 43.969 C 160.881 44.040,160.809 43.673,160.868 41.333 L 160.917 39.417 161.333 39.417 C 161.639 39.417,161.764 39.517,161.803 39.792 C 161.937 40.736,162.333 40.159,162.333 39.019 C 162.333 38.012,162.374 37.862,162.667 37.785 C 162.909 37.722,163.000 37.558,163.000 37.182 C 163.000 36.835,163.082 36.667,163.250 36.667 C 163.425 36.667,163.500 36.491,163.500 36.083 C 163.500 35.661,163.573 35.500,163.766 35.500 C 163.912 35.500,164.070 35.350,164.118 35.167 C 164.166 34.983,164.301 34.833,164.418 34.833 C 164.535 34.833,164.674 34.721,164.727 34.583 C 164.783 34.437,165.033 34.333,165.328 34.333 C 165.606 34.333,165.833 34.302,165.833 34.264 C 165.833 34.225,165.879 34.075,165.934 33.930 C 166.013 33.725,165.922 33.667,165.518 33.667 C 164.976 33.667,164.724 32.954,165.208 32.791 C 165.451 32.710,166.474 32.919,166.638 33.083 M283.333 33.518 C 283.333 33.771,283.408 33.840,283.599 33.767 C 283.776 33.699,283.893 33.776,283.952 33.999 C 284.000 34.183,284.143 34.333,284.269 34.333 C 284.404 34.333,284.500 34.506,284.500 34.750 C 284.500 35.390,283.904 35.280,283.147 34.500 C 282.331 33.659,282.287 33.167,283.028 33.167 C 283.227 33.167,283.333 33.288,283.333 33.518 M123.029 33.837 C 123.323 34.131,123.493 34.443,123.438 34.587 C 123.312 34.916,122.500 34.913,122.500 34.583 C 122.500 34.446,122.388 34.333,122.250 34.333 C 122.099 34.333,122.000 34.179,122.000 33.944 C 122.000 33.180,122.337 33.145,123.029 33.837 M164.637 33.794 C 164.669 34.018,164.585 34.208,164.428 34.269 C 164.284 34.324,164.167 34.473,164.167 34.601 C 164.167 34.729,164.017 34.833,163.833 34.833 C 163.611 34.833,163.500 34.944,163.500 35.167 C 163.500 35.568,163.125 35.601,162.755 35.231 C 162.507 34.983,162.549 34.898,163.285 34.157 C 164.136 33.299,164.550 33.188,164.637 33.794 M117.611 33.924 C 117.611 34.199,117.240 34.253,117.083 34.000 C 117.027 33.908,117.025 33.762,117.079 33.674 C 117.218 33.448,117.611 33.633,117.611 33.924 M50.803 34.458 C 50.844 34.744,50.774 34.833,50.512 34.833 C 50.322 34.833,50.167 34.937,50.167 35.064 C 50.167 35.300,49.593 35.538,49.426 35.371 C 49.067 35.011,49.845 33.954,50.411 34.035 C 50.616 34.064,50.771 34.231,50.803 34.458 M117.136 35.042 C 117.178 35.409,117.121 35.500,116.850 35.500 C 116.482 35.500,116.165 35.047,116.290 34.699 C 116.436 34.288,117.079 34.549,117.136 35.042 M285.716 35.105 C 285.877 35.266,285.519 35.833,285.258 35.833 C 284.996 35.833,284.845 35.518,284.959 35.208 C 285.039 34.991,285.534 34.923,285.716 35.105 M162.967 36.105 C 163.032 36.557,162.530 36.768,162.193 36.431 C 161.986 36.224,161.982 36.139,162.166 35.918 C 162.460 35.564,162.904 35.668,162.967 36.105 M49.548 36.333 C 49.501 36.515,49.371 36.607,49.234 36.554 C 49.081 36.496,49.000 36.580,49.000 36.796 C 49.000 36.988,48.859 37.165,48.667 37.215 C 48.483 37.263,48.333 37.422,48.333 37.568 C 48.333 37.898,47.856 37.919,47.731 37.595 C 47.636 37.346,48.287 36.333,48.543 36.333 C 48.624 36.333,48.800 36.224,48.933 36.090 C 49.250 35.774,49.653 35.933,49.548 36.333 M170.667 36.899 C 170.667 37.214,171.118 37.368,171.225 37.089 C 171.326 36.826,171.199 36.667,170.889 36.667 C 170.767 36.667,170.667 36.771,170.667 36.899 M162.303 37.376 C 162.345 37.742,162.288 37.833,162.017 37.833 C 161.583 37.833,161.271 37.295,161.546 37.021 C 161.863 36.703,162.246 36.883,162.303 37.376 M46.667 38.583 C 46.667 38.714,46.517 38.901,46.335 38.999 C 46.153 39.097,46.021 39.265,46.043 39.372 C 46.079 39.546,45.875 39.589,45.333 39.521 C 45.024 39.482,45.164 38.973,45.614 38.496 C 46.081 38.001,46.667 38.050,46.667 38.583 M265.998 38.248 C 266.295 38.605,266.080 39.000,265.589 39.000 C 265.339 39.000,265.167 39.095,265.167 39.232 C 265.167 39.897,267.621 39.874,267.697 39.208 C 267.767 38.601,268.271 38.536,269.057 39.033 C 269.750 39.473,269.829 40.048,269.208 40.137 C 268.928 40.176,268.833 40.107,268.833 39.861 C 268.833 39.613,268.750 39.553,268.500 39.618 C 268.137 39.713,268.035 40.167,268.377 40.167 C 268.492 40.167,268.680 40.317,268.795 40.500 C 268.909 40.683,269.174 40.833,269.384 40.833 C 269.667 40.833,269.805 40.969,269.924 41.364 C 270.131 42.052,270.461 42.154,270.530 41.552 C 270.583 41.085,271.300 40.742,271.358 41.155 C 271.429 41.658,271.384 41.743,271.000 41.832 C 270.494 41.951,270.293 42.931,270.739 43.102 C 271.071 43.229,271.077 43.601,270.750 43.727 C 270.574 43.795,270.500 44.070,270.500 44.661 C 270.500 45.267,270.436 45.500,270.268 45.500 C 270.013 45.500,269.833 45.850,269.833 46.347 C 269.833 46.590,269.715 46.667,269.342 46.667 C 269.071 46.667,268.790 46.761,268.717 46.877 C 268.643 46.993,268.358 47.164,268.083 47.256 C 267.472 47.462,267.413 47.909,267.997 47.914 C 268.432 47.917,268.668 48.399,268.377 48.690 C 268.139 48.928,267.692 48.680,267.635 48.278 C 267.569 47.815,265.833 47.616,265.833 48.071 C 265.833 48.212,266.021 48.374,266.250 48.432 C 266.823 48.575,266.835 49.285,266.267 49.427 C 265.706 49.568,259.960 49.445,259.716 49.286 C 259.430 49.101,259.642 48.668,260.106 48.491 L 260.500 48.342 260.500 43.671 C 260.500 39.815,260.460 39.000,260.270 39.000 C 259.864 39.000,259.595 38.538,259.833 38.250 C 260.138 37.882,265.693 37.881,265.998 38.248 M288.119 38.772 C 288.188 38.981,287.735 39.500,287.483 39.500 C 287.259 39.500,287.111 39.052,287.231 38.738 C 287.344 38.445,288.020 38.471,288.119 38.772 M270.586 40.486 C 270.355 40.716,270.302 40.718,270.170 40.506 C 269.948 40.146,270.300 39.765,270.614 40.025 C 270.817 40.194,270.813 40.259,270.586 40.486 M44.571 40.128 C 44.282 40.326,44.150 40.833,44.389 40.833 C 44.663 40.833,45.000 40.493,45.000 40.217 C 45.000 39.976,44.841 39.943,44.571 40.128 M172.732 40.264 C 173.006 40.978,172.674 41.681,172.130 41.539 C 171.831 41.461,171.689 40.366,171.944 40.111 C 172.150 39.905,172.630 39.998,172.732 40.264 M311.591 41.023 C 311.784 41.631,310.948 42.160,310.723 41.572 C 310.586 41.217,310.988 40.506,311.265 40.612 C 311.387 40.659,311.534 40.844,311.591 41.023 M43.232 40.958 C 42.954 41.236,42.955 41.253,43.242 41.308 C 43.408 41.340,43.607 41.265,43.686 41.141 C 44.019 40.616,43.702 40.488,43.232 40.958 M326.363 41.111 C 326.444 41.529,326.833 41.587,326.833 41.181 C 326.833 40.976,326.726 40.833,326.571 40.833 C 326.416 40.833,326.331 40.947,326.363 41.111 M271.994 42.489 C 272.425 43.295,272.155 44.667,271.566 44.667 C 271.152 44.667,271.136 44.619,271.136 43.333 C 271.136 42.256,271.164 42.167,271.494 42.167 C 271.674 42.167,271.899 42.312,271.994 42.489 M162.333 45.417 C 162.333 45.750,162.250 45.833,161.917 45.833 C 161.513 45.833,161.328 45.395,161.611 45.111 C 161.895 44.828,162.333 45.013,162.333 45.417 M343.804 45.568 C 343.851 45.964,343.805 46.019,343.472 45.972 C 343.035 45.909,342.849 45.365,343.192 45.148 C 343.541 44.927,343.745 45.067,343.804 45.568 M171.452 45.819 C 171.694 46.206,171.373 46.569,170.938 46.402 C 170.618 46.279,170.575 45.731,170.875 45.610 C 171.213 45.474,171.244 45.485,171.452 45.819 M271.316 45.729 C 271.594 46.064,271.357 46.527,270.937 46.467 C 270.447 46.397,270.322 45.500,270.802 45.500 C 270.980 45.500,271.211 45.603,271.316 45.729 M315.667 45.813 C 315.667 46.327,315.205 46.609,314.886 46.290 C 314.529 45.934,314.726 45.500,315.245 45.500 C 315.546 45.500,315.667 45.589,315.667 45.813 M323.738 45.780 C 323.901 46.203,323.424 46.616,323.092 46.340 C 322.950 46.222,322.833 45.985,322.833 45.813 C 322.833 45.409,323.586 45.382,323.738 45.780 M294.031 46.290 C 294.115 46.724,294.667 46.773,294.667 46.346 C 294.667 46.107,294.560 46.000,294.321 46.000 C 294.083 46.000,293.993 46.090,294.031 46.290 M162.969 46.544 C 163.035 46.889,162.554 47.121,162.300 46.867 C 162.046 46.613,162.278 46.132,162.623 46.198 C 162.782 46.229,162.938 46.384,162.969 46.544 M72.500 47.000 C 72.500 47.222,72.611 47.333,72.833 47.333 C 73.019 47.333,73.167 47.444,73.167 47.583 C 73.167 47.721,73.279 47.833,73.417 47.833 C 73.556 47.833,73.667 47.981,73.667 48.167 C 73.667 48.352,73.778 48.500,73.917 48.500 C 74.219 48.500,74.262 49.274,73.965 49.373 C 73.698 49.462,71.521 47.307,71.619 47.051 C 71.685 46.878,71.944 46.753,72.375 46.686 C 72.444 46.675,72.500 46.817,72.500 47.000 M216.875 47.101 C 216.669 47.336,216.500 47.588,216.500 47.661 C 216.500 47.735,216.342 47.836,216.149 47.886 C 215.751 47.990,215.801 48.389,216.222 48.471 C 216.409 48.507,216.500 48.412,216.500 48.179 C 216.500 47.939,216.607 47.833,216.851 47.833 C 217.095 47.833,217.173 47.757,217.106 47.583 C 217.041 47.413,217.115 47.333,217.339 47.333 C 217.556 47.333,217.667 47.220,217.667 47.000 C 217.667 46.543,217.325 46.587,216.875 47.101 M270.725 47.078 C 270.841 47.380,270.619 47.535,270.265 47.399 C 269.984 47.292,269.928 47.127,270.111 46.944 C 270.303 46.753,270.627 46.823,270.725 47.078 M294.579 47.167 C 294.625 47.396,294.663 47.640,294.664 47.708 C 294.670 48.007,295.167 47.801,295.167 47.500 C 295.167 47.317,295.060 47.167,294.931 47.167 C 294.801 47.167,294.650 47.073,294.595 46.958 C 294.541 46.844,294.534 46.938,294.579 47.167 M269.667 47.769 C 269.667 48.058,269.574 48.167,269.328 48.167 C 268.959 48.167,268.744 47.806,268.889 47.430 C 269.040 47.036,269.667 47.310,269.667 47.769 M163.500 47.583 C 163.500 47.721,163.604 47.833,163.732 47.833 C 164.103 47.833,164.223 48.380,163.903 48.614 C 163.401 48.981,162.342 47.880,162.778 47.444 C 162.987 47.235,163.500 47.333,163.500 47.583 M165.881 48.436 C 166.008 48.564,167.333 48.556,167.462 48.427 C 167.513 48.375,167.156 48.333,166.667 48.333 C 166.178 48.333,165.824 48.380,165.881 48.436 M89.333 48.928 C 89.333 49.277,89.264 49.347,88.958 49.303 C 88.383 49.222,88.335 48.500,88.905 48.500 C 89.254 48.500,89.333 48.579,89.333 48.928 M297.475 49.680 C 297.690 49.952,297.823 50.286,297.771 50.421 C 297.647 50.744,297.000 50.741,297.000 50.417 C 297.000 50.278,296.852 50.167,296.667 50.167 C 296.429 50.167,296.333 50.056,296.333 49.778 C 296.333 49.001,296.900 48.953,297.475 49.680 M85.833 50.095 C 85.833 50.721,84.409 50.853,83.708 50.293 C 83.267 49.940,83.493 49.685,84.292 49.634 C 85.523 49.555,85.833 49.648,85.833 50.095 M77.722 49.904 C 77.843 50.220,77.545 50.447,76.833 50.578 C 76.134 50.707,75.591 50.392,75.759 49.954 C 75.904 49.577,77.580 49.534,77.722 49.904 M288.012 49.958 C 288.019 50.027,288.056 50.252,288.094 50.457 C 288.147 50.739,288.093 50.820,287.874 50.786 C 287.085 50.663,286.832 49.833,287.583 49.833 C 287.813 49.833,288.006 49.890,288.012 49.958 M58.167 50.498 C 58.498 50.709,58.192 51.229,57.691 51.303 C 57.391 51.348,57.333 51.274,57.333 50.845 C 57.333 50.305,57.655 50.171,58.167 50.498 M298.788 51.583 C 299.082 51.904,299.400 52.167,299.495 52.167 C 299.589 52.167,299.667 52.228,299.667 52.304 C 299.667 52.379,300.304 53.081,301.083 53.864 C 302.569 55.357,302.876 56.000,302.103 56.000 C 301.844 56.000,301.675 55.882,301.617 55.662 C 301.568 55.476,301.428 55.345,301.306 55.370 C 301.184 55.396,301.104 55.316,301.130 55.194 C 301.155 55.072,301.031 54.933,300.854 54.887 C 300.676 54.840,300.491 54.652,300.443 54.468 C 300.392 54.272,300.277 54.182,300.167 54.250 C 300.055 54.319,299.940 54.224,299.886 54.017 C 299.836 53.824,299.691 53.667,299.564 53.667 C 299.437 53.667,299.333 53.554,299.333 53.417 C 299.333 53.279,299.214 53.167,299.068 53.167 C 298.922 53.167,298.763 53.017,298.715 52.833 C 298.667 52.650,298.533 52.500,298.417 52.500 C 298.301 52.500,298.166 52.350,298.118 52.167 C 298.070 51.983,297.912 51.833,297.766 51.833 C 297.619 51.833,297.500 51.696,297.500 51.528 C 297.500 50.798,298.090 50.823,298.788 51.583 M147.417 52.002 C 147.417 52.297,147.315 52.431,147.063 52.467 C 146.658 52.525,146.423 51.977,146.724 51.676 C 147.029 51.371,147.417 51.553,147.417 52.002 M194.669 52.258 C 194.667 52.751,194.915 53.167,195.212 53.167 C 195.291 53.167,195.331 52.998,195.299 52.792 C 195.268 52.585,195.145 52.437,195.025 52.462 C 194.906 52.488,194.847 52.447,194.893 52.371 C 194.940 52.296,194.909 52.125,194.825 51.992 C 194.712 51.814,194.671 51.884,194.669 52.258 M60.093 53.691 C 60.634 54.254,61.155 54.871,61.250 55.063 C 61.345 55.254,61.597 55.497,61.809 55.603 C 62.310 55.852,63.520 57.189,63.447 57.412 C 63.350 57.706,62.667 57.720,62.667 57.428 C 62.667 57.283,62.527 57.167,62.353 57.167 C 62.174 57.167,61.999 57.016,61.947 56.817 C 61.897 56.624,61.776 56.516,61.678 56.576 C 61.576 56.639,61.500 56.555,61.500 56.380 C 61.500 56.022,60.946 55.500,60.566 55.500 C 60.421 55.500,60.263 55.350,60.215 55.167 C 60.167 54.983,60.024 54.833,59.897 54.833 C 59.770 54.833,59.667 54.714,59.667 54.568 C 59.667 54.422,59.517 54.263,59.333 54.215 C 59.150 54.167,59.000 54.024,59.000 53.897 C 59.000 53.770,58.887 53.667,58.750 53.667 C 58.239 53.667,58.482 52.752,59.013 52.680 C 59.066 52.673,59.552 53.128,60.093 53.691 M150.269 56.458 C 150.667 56.894,150.994 57.337,150.996 57.444 C 150.998 57.551,151.088 57.668,151.197 57.704 C 151.309 57.742,151.346 57.894,151.282 58.060 C 151.179 58.329,151.143 58.325,150.804 58.008 C 150.602 57.820,150.372 57.667,150.292 57.667 C 150.212 57.667,150.193 57.592,150.250 57.500 C 150.307 57.408,150.161 57.260,149.927 57.170 C 149.692 57.081,149.500 56.931,149.500 56.837 C 149.500 56.744,149.387 56.667,149.250 56.667 C 148.998 56.667,148.893 55.996,149.111 55.778 C 149.337 55.552,149.563 55.685,150.269 56.458 M303.975 56.180 C 304.431 56.758,304.344 57.217,303.792 57.133 C 303.586 57.101,303.434 56.988,303.455 56.881 C 303.476 56.774,303.345 56.640,303.163 56.582 C 302.791 56.464,302.736 56.164,303.033 55.867 C 303.335 55.565,303.544 55.635,303.975 56.180 M334.500 56.839 C 334.500 57.056,334.387 57.167,334.167 57.167 C 333.983 57.167,333.833 57.271,333.833 57.399 C 333.833 57.734,333.391 57.854,333.165 57.581 C 332.854 57.207,333.755 56.113,334.184 56.343 C 334.358 56.436,334.500 56.659,334.500 56.839 M282.137 56.792 C 282.177 57.075,282.107 57.167,281.850 57.167 C 281.631 57.167,281.542 57.248,281.598 57.395 C 281.646 57.521,281.562 57.671,281.411 57.729 C 280.805 57.962,280.644 57.409,281.125 56.741 C 281.487 56.237,282.062 56.266,282.137 56.792 M305.504 57.261 C 305.723 57.837,305.725 57.833,305.245 57.833 C 304.798 57.833,304.567 57.499,304.727 57.083 C 304.878 56.689,305.326 56.791,305.504 57.261 M169.970 57.958 C 170.004 58.200,169.937 58.333,169.781 58.333 C 169.648 58.333,169.498 58.489,169.448 58.680 C 169.383 58.929,169.249 59.011,168.972 58.972 C 168.444 58.896,168.391 58.392,168.861 57.919 C 169.348 57.429,169.897 57.448,169.970 57.958 M332.637 57.958 C 332.680 58.264,332.610 58.333,332.262 58.333 C 331.913 58.333,331.833 58.254,331.833 57.905 C 331.833 57.335,332.555 57.383,332.637 57.958 M307.792 58.192 C 308.059 58.459,307.748 59.000,307.327 59.000 C 307.096 59.000,307.000 58.887,307.000 58.611 C 307.000 58.001,307.393 57.793,307.792 58.192 M90.167 59.184 C 90.167 59.454,90.075 59.512,89.710 59.469 C 89.211 59.412,88.978 58.886,89.350 58.657 C 89.662 58.463,90.167 58.789,90.167 59.184 M214.667 59.173 C 214.667 59.425,214.553 59.500,214.167 59.500 C 213.634 59.500,213.475 59.092,213.859 58.708 C 214.126 58.441,214.667 58.752,214.667 59.173 M308.972 58.792 C 309.190 59.217,309.030 59.500,308.569 59.500 C 308.127 59.500,308.014 59.053,308.367 58.700 C 308.641 58.426,308.795 58.449,308.972 58.792 M67.074 58.818 C 67.254 59.109,66.962 59.500,66.566 59.500 C 66.179 59.500,66.001 59.054,66.278 58.778 C 66.440 58.615,66.965 58.642,67.074 58.818 M151.833 59.238 C 151.833 59.409,151.984 59.500,152.264 59.500 C 152.786 59.500,152.729 59.109,152.195 59.030 C 151.955 58.995,151.833 59.065,151.833 59.238 M330.333 59.250 C 330.333 59.389,330.481 59.500,330.667 59.500 C 330.852 59.500,331.000 59.389,331.000 59.250 C 331.000 59.111,330.852 59.000,330.667 59.000 C 330.481 59.000,330.333 59.111,330.333 59.250 M152.992 59.734 C 153.164 60.200,153.667 60.298,153.667 59.865 C 153.667 59.653,153.526 59.512,153.265 59.462 C 152.916 59.395,152.880 59.431,152.992 59.734 M167.667 59.833 C 167.667 60.229,168.087 60.281,168.232 59.903 C 168.379 59.521,168.367 59.500,168.000 59.500 C 167.778 59.500,167.667 59.611,167.667 59.833 M200.031 59.790 C 200.115 60.224,200.667 60.273,200.667 59.846 C 200.667 59.607,200.560 59.500,200.321 59.500 C 200.083 59.500,199.993 59.590,200.031 59.790 M212.133 59.867 C 212.494 60.228,212.373 60.667,211.911 60.667 C 211.420 60.667,211.205 60.272,211.502 59.915 C 211.751 59.614,211.872 59.605,212.133 59.867 M140.000 60.417 C 140.000 60.556,140.148 60.667,140.333 60.667 C 140.519 60.667,140.667 60.556,140.667 60.417 C 140.667 60.278,140.519 60.167,140.333 60.167 C 140.148 60.167,140.000 60.278,140.000 60.417 M150.667 63.405 C 150.667 63.826,150.164 64.206,149.899 63.985 C 149.465 63.625,149.615 63.167,150.167 63.167 C 150.489 63.167,150.667 63.251,150.667 63.405 M168.333 63.506 C 168.333 63.795,168.383 63.818,168.671 63.664 C 169.032 63.471,168.972 63.167,168.573 63.167 C 168.441 63.167,168.333 63.319,168.333 63.506 M151.774 63.919 C 151.886 64.210,151.561 64.667,151.241 64.667 C 150.989 64.667,150.762 64.084,150.916 63.835 C 151.075 63.577,151.665 63.635,151.774 63.919 M153.328 64.676 C 152.945 65.392,152.000 65.371,152.000 64.646 C 152.000 64.386,152.128 64.333,152.756 64.333 C 153.467 64.333,153.501 64.354,153.328 64.676 M186.470 64.958 C 186.513 65.260,186.443 65.333,186.113 65.333 C 185.701 65.333,185.412 64.944,185.599 64.642 C 185.786 64.339,186.414 64.568,186.470 64.958 M166.945 65.096 C 167.119 65.551,166.562 65.967,166.227 65.632 C 165.886 65.291,166.043 64.833,166.500 64.833 C 166.689 64.833,166.889 64.952,166.945 65.096 M182.937 70.256 C 182.881 70.404,182.947 70.554,183.093 70.610 C 183.419 70.735,183.568 70.585,183.442 70.257 C 183.316 69.927,183.064 69.927,182.937 70.256 M182.333 71.000 C 182.333 71.185,182.222 71.333,182.083 71.333 C 181.946 71.333,181.833 71.446,181.833 71.583 C 181.833 71.722,181.685 71.833,181.500 71.833 C 181.317 71.833,181.167 71.908,181.167 72.000 C 181.167 72.092,181.317 72.167,181.500 72.167 C 181.683 72.167,181.833 72.092,181.833 72.000 C 181.833 71.908,181.946 71.833,182.083 71.833 C 182.221 71.833,182.333 71.730,182.333 71.603 C 182.333 71.476,182.483 71.333,182.667 71.285 C 182.850 71.237,183.000 71.078,183.000 70.932 C 183.000 70.778,182.861 70.667,182.667 70.667 C 182.444 70.667,182.333 70.778,182.333 71.000 " stroke="none" fill="#fcfcfc" fill-rule="evenodd"></path><path id="path2" d="M319.000 5.896 C 319.000 6.214,319.515 6.378,320.076 6.237 C 320.721 6.075,320.496 5.758,319.695 5.699 C 319.167 5.660,319.000 5.707,319.000 5.896 M313.637 6.355 C 313.486 6.723,313.802 7.000,314.372 7.000 C 314.881 7.000,315.164 6.597,314.865 6.298 C 314.737 6.170,314.712 6.221,314.779 6.476 C 314.859 6.784,314.802 6.833,314.364 6.833 C 313.965 6.833,313.845 6.753,313.802 6.458 C 313.758 6.157,313.725 6.137,313.637 6.355 M324.563 6.409 C 324.422 6.778,324.638 7.000,325.135 6.997 C 325.812 6.994,326.077 6.773,325.858 6.395 C 325.689 6.104,325.676 6.108,325.672 6.458 C 325.668 6.750,325.570 6.833,325.231 6.833 C 324.877 6.833,324.811 6.771,324.882 6.500 C 324.981 6.120,324.705 6.041,324.563 6.409 M32.197 7.208 C 32.249 7.575,32.300 7.584,34.417 7.594 L 36.583 7.604 34.500 7.511 C 32.651 7.427,32.419 7.384,32.440 7.125 C 32.453 6.965,32.391 6.833,32.303 6.833 C 32.215 6.833,32.167 7.002,32.197 7.208 M36.785 7.169 C 36.737 7.351,36.758 7.500,36.831 7.500 C 37.027 7.500,37.176 7.025,37.012 6.924 C 36.934 6.876,36.832 6.986,36.785 7.169 M243.000 6.988 C 243.000 7.086,243.112 7.167,243.250 7.167 C 243.471 7.167,243.500 10.206,243.500 33.518 C 243.500 56.617,243.470 59.857,243.255 59.775 C 243.121 59.723,242.962 59.759,242.904 59.855 C 242.838 59.961,242.949 60.006,243.190 59.972 L 243.583 59.917 243.583 33.419 C 243.583 8.316,243.568 6.918,243.292 6.865 C 243.131 6.834,243.000 6.889,243.000 6.988 M266.723 7.167 L 266.750 7.583 268.935 7.630 C 271.180 7.677,272.000 7.532,272.000 7.087 C 272.000 6.948,271.925 6.833,271.833 6.833 C 271.742 6.833,271.667 6.938,271.667 7.066 C 271.667 7.685,266.909 7.743,266.776 7.125 C 266.705 6.795,266.699 6.799,266.723 7.167 M311.177 7.008 C 311.163 7.360,311.490 7.660,311.770 7.552 C 312.029 7.453,312.088 6.833,311.839 6.833 C 311.750 6.833,311.717 6.938,311.767 7.066 C 311.816 7.195,311.775 7.350,311.677 7.411 C 311.578 7.472,311.428 7.348,311.342 7.136 C 311.250 6.906,311.184 6.855,311.177 7.008 M327.437 7.090 C 327.326 7.381,327.703 7.586,328.083 7.440 C 328.221 7.387,328.333 7.229,328.333 7.089 C 328.333 6.750,327.567 6.750,327.437 7.090 M9.915 33.417 C 9.915 47.900,9.934 53.800,9.958 46.529 C 9.982 39.257,9.982 27.407,9.958 20.195 C 9.934 12.984,9.915 18.933,9.915 33.417 M39.184 7.486 C 38.806 7.725,39.100 8.169,39.620 8.144 C 40.036 8.124,40.043 8.114,39.692 8.047 C 39.404 7.992,39.323 7.889,39.385 7.653 C 39.431 7.477,39.457 7.334,39.443 7.336 C 39.428 7.337,39.312 7.405,39.184 7.486 M40.123 7.433 C 40.068 7.488,40.066 7.644,40.118 7.780 C 40.195 7.982,40.239 7.987,40.354 7.806 C 40.600 7.418,40.423 7.133,40.123 7.433 M274.156 7.596 C 273.933 7.865,274.157 8.162,274.583 8.162 C 274.675 8.162,274.645 8.095,274.517 8.014 C 274.389 7.933,274.331 7.747,274.387 7.600 C 274.517 7.262,274.435 7.260,274.156 7.596 M275.379 7.657 C 275.438 7.882,275.366 8.004,275.146 8.055 C 274.912 8.108,274.928 8.122,275.206 8.106 C 275.602 8.082,275.880 7.333,275.492 7.333 C 275.378 7.333,275.330 7.471,275.379 7.657 M329.375 7.455 C 328.943 7.606,329.163 8.000,329.679 8.000 C 330.066 8.000,330.178 7.933,330.137 7.724 C 330.082 7.442,329.748 7.324,329.375 7.455 M309.333 7.738 C 309.333 7.892,309.476 8.000,309.681 8.000 C 310.087 8.000,310.029 7.611,309.611 7.529 C 309.447 7.498,309.333 7.583,309.333 7.738 M41.677 8.274 C 41.666 8.668,42.090 8.926,42.270 8.634 C 42.340 8.521,42.309 8.495,42.191 8.568 C 42.074 8.640,41.936 8.534,41.842 8.302 C 41.692 7.928,41.687 7.927,41.677 8.274 M276.944 8.111 C 276.883 8.172,276.833 8.322,276.833 8.444 C 276.833 8.766,277.773 8.730,277.899 8.403 C 278.035 8.047,278.028 8.000,277.833 8.000 C 277.742 8.000,277.667 8.112,277.667 8.250 C 277.667 8.387,277.594 8.500,277.505 8.500 C 277.416 8.500,277.387 8.387,277.440 8.250 C 277.537 7.998,277.163 7.893,276.944 8.111 M330.936 8.260 C 330.804 8.603,330.942 8.792,331.163 8.571 C 331.249 8.485,331.258 8.314,331.183 8.193 C 331.076 8.019,331.023 8.034,330.936 8.260 M43.424 8.720 C 43.259 9.090,43.542 9.417,43.905 9.277 C 44.197 9.166,44.268 8.500,43.989 8.500 C 43.887 8.500,43.856 8.642,43.917 8.833 C 43.975 9.017,43.948 9.167,43.856 9.167 C 43.765 9.167,43.660 8.998,43.624 8.792 C 43.565 8.453,43.546 8.446,43.424 8.720 M278.967 8.696 C 278.838 9.013,279.223 9.421,279.493 9.255 C 279.706 9.123,279.725 8.500,279.516 8.500 C 279.433 8.500,279.404 8.650,279.452 8.833 C 279.500 9.017,279.460 9.167,279.364 9.167 C 279.268 9.167,279.165 8.998,279.135 8.792 C 279.090 8.482,279.061 8.465,278.967 8.696 M306.667 8.917 C 306.667 9.054,306.742 9.167,306.833 9.167 C 306.925 9.167,307.000 9.054,307.000 8.917 C 307.000 8.779,306.925 8.667,306.833 8.667 C 306.742 8.667,306.667 8.779,306.667 8.917 M332.107 8.782 C 331.919 8.970,331.992 9.167,332.250 9.167 C 332.387 9.167,332.500 9.096,332.500 9.010 C 332.500 8.800,332.240 8.649,332.107 8.782 M305.440 9.282 C 305.241 9.482,305.332 9.833,305.583 9.833 C 305.721 9.833,305.833 9.725,305.833 9.593 C 305.833 9.315,305.595 9.127,305.440 9.282 M333.264 9.441 C 333.133 9.783,333.244 9.903,333.573 9.777 C 333.720 9.721,333.786 9.571,333.729 9.423 C 333.601 9.089,333.396 9.097,333.264 9.441 M44.833 9.583 C 44.833 9.721,44.908 9.833,45.000 9.833 C 45.092 9.833,45.167 9.721,45.167 9.583 C 45.167 9.446,45.092 9.333,45.000 9.333 C 44.908 9.333,44.833 9.446,44.833 9.583 M280.333 9.597 C 280.333 9.892,280.692 9.840,280.795 9.531 C 280.831 9.422,280.742 9.333,280.597 9.333 C 280.452 9.333,280.333 9.452,280.333 9.597 M46.292 9.782 C 45.947 9.872,45.896 10.333,46.231 10.333 C 46.357 10.333,46.500 10.183,46.548 10.000 C 46.596 9.817,46.624 9.675,46.609 9.686 C 46.595 9.697,46.452 9.740,46.292 9.782 M281.500 10.056 C 281.500 10.365,281.660 10.492,281.922 10.391 C 282.201 10.284,282.047 9.833,281.732 9.833 C 281.604 9.833,281.500 9.933,281.500 10.056 M303.500 10.750 C 303.500 10.922,303.609 11.003,303.792 10.968 C 304.143 10.901,304.121 10.605,303.759 10.529 C 303.608 10.498,303.500 10.590,303.500 10.750 M335.000 10.750 C 335.000 10.887,335.075 11.000,335.167 11.000 C 335.258 11.000,335.333 10.887,335.333 10.750 C 335.333 10.612,335.258 10.500,335.167 10.500 C 335.075 10.500,335.000 10.612,335.000 10.750 M47.771 11.256 C 47.714 11.404,47.780 11.554,47.927 11.610 C 48.253 11.735,48.402 11.585,48.276 11.257 C 48.149 10.927,47.897 10.927,47.771 11.256 M283.333 11.319 C 283.333 11.419,283.446 11.500,283.583 11.500 C 283.722 11.500,283.833 11.648,283.833 11.833 C 283.833 12.056,283.944 12.167,284.167 12.167 C 284.352 12.167,284.500 12.278,284.500 12.417 C 284.500 12.554,284.612 12.667,284.750 12.667 C 284.887 12.667,285.000 12.589,285.000 12.495 C 285.000 12.400,284.887 12.280,284.750 12.227 C 284.612 12.174,284.500 12.039,284.500 11.926 C 284.500 11.751,284.292 11.606,283.458 11.200 C 283.390 11.166,283.333 11.220,283.333 11.319 M48.444 11.611 C 48.218 11.837,48.343 12.167,48.655 12.167 C 48.846 12.167,48.998 12.300,49.030 12.496 C 49.066 12.715,49.154 12.780,49.295 12.692 C 49.458 12.590,49.429 12.469,49.170 12.171 C 48.985 11.957,48.833 11.719,48.833 11.641 C 48.833 11.473,48.601 11.455,48.444 11.611 M336.833 11.917 C 336.833 12.054,336.900 12.167,336.982 12.167 C 337.064 12.167,337.174 12.054,337.227 11.917 C 337.285 11.764,337.227 11.667,337.078 11.667 C 336.943 11.667,336.833 11.779,336.833 11.917 M337.333 12.352 C 337.333 12.608,338.038 13.327,338.292 13.330 C 338.406 13.332,338.500 13.448,338.500 13.589 C 338.500 13.729,338.669 13.906,338.875 13.983 C 339.081 14.059,339.218 14.188,339.179 14.269 C 339.139 14.350,339.223 14.439,339.365 14.466 C 339.512 14.495,339.662 14.368,339.713 14.175 C 339.762 13.987,339.741 13.871,339.666 13.917 C 339.426 14.065,338.978 13.798,339.069 13.562 C 339.126 13.413,339.035 13.333,338.809 13.333 C 338.548 13.333,338.482 13.253,338.545 13.012 C 338.602 12.793,338.559 12.718,338.408 12.776 C 338.287 12.823,338.053 12.705,337.890 12.514 C 337.563 12.132,337.333 12.065,337.333 12.352 M300.606 13.083 C 300.554 13.221,300.396 13.333,300.255 13.333 C 300.111 13.333,300.000 13.478,300.000 13.667 C 300.000 13.861,300.111 14.000,300.266 14.000 C 300.412 14.000,300.570 13.850,300.618 13.667 C 300.666 13.483,300.809 13.333,300.936 13.333 C 301.063 13.333,301.167 13.221,301.167 13.083 C 301.167 12.946,301.062 12.833,300.934 12.833 C 300.807 12.833,300.659 12.946,300.606 13.083 M285.773 13.949 C 285.574 14.148,285.666 14.500,285.917 14.500 C 286.054 14.500,286.167 14.392,286.167 14.260 C 286.167 13.981,285.929 13.793,285.773 13.949 M299.360 14.333 C 298.972 14.858,298.900 15.167,299.167 15.167 C 299.258 15.167,299.333 15.017,299.333 14.833 C 299.333 14.611,299.444 14.500,299.667 14.500 C 299.850 14.500,300.000 14.392,300.000 14.260 C 300.000 13.812,299.721 13.844,299.360 14.333 M50.730 14.742 C 50.679 14.875,50.684 15.059,50.741 15.151 C 50.902 15.412,51.333 15.167,51.333 14.816 C 51.333 14.446,50.866 14.389,50.730 14.742 M286.542 15.339 C 286.128 15.505,286.090 15.628,286.339 16.000 C 286.483 16.215,286.534 16.203,286.705 15.917 C 286.873 15.635,287.032 15.143,286.944 15.177 C 286.929 15.183,286.748 15.256,286.542 15.339 M51.333 15.995 C 51.333 16.218,51.413 16.292,51.583 16.227 C 51.721 16.174,51.833 16.027,51.833 15.899 C 51.833 15.771,51.721 15.667,51.583 15.667 C 51.446 15.667,51.333 15.814,51.333 15.995 M340.833 16.667 C 340.833 16.758,340.946 16.833,341.083 16.833 C 341.221 16.833,341.333 16.758,341.333 16.667 C 341.333 16.575,341.221 16.500,341.083 16.500 C 340.946 16.500,340.833 16.575,340.833 16.667 M297.090 17.155 C 296.967 17.355,297.281 17.552,297.503 17.415 C 297.689 17.300,297.567 17.000,297.333 17.000 C 297.252 17.000,297.143 17.070,297.090 17.155 M51.944 17.278 C 51.726 17.496,51.839 17.634,52.167 17.548 C 52.350 17.500,52.500 17.395,52.500 17.314 C 52.500 17.142,52.106 17.116,51.944 17.278 M286.833 17.333 C 286.833 17.425,286.941 17.500,287.073 17.500 C 287.206 17.500,287.360 17.425,287.417 17.333 C 287.473 17.242,287.365 17.167,287.177 17.167 C 286.988 17.167,286.833 17.242,286.833 17.333 M259.930 17.811 C 259.881 17.890,260.008 18.095,260.212 18.265 C 260.416 18.435,260.490 18.468,260.375 18.337 C 260.092 18.015,260.113 17.872,260.458 17.782 C 260.684 17.723,260.667 17.701,260.385 17.686 C 260.184 17.675,259.980 17.732,259.930 17.811 M263.308 17.786 C 263.596 17.841,263.677 17.944,263.615 18.180 C 263.569 18.356,263.599 18.500,263.682 18.500 C 263.765 18.500,263.833 18.313,263.833 18.083 C 263.833 17.734,263.759 17.670,263.375 17.689 C 262.959 17.710,262.953 17.719,263.308 17.786 M286.701 19.778 C 286.682 20.985,286.712 22.091,286.768 22.236 C 286.873 22.511,287.500 22.610,287.500 22.352 C 287.500 22.270,287.369 22.214,287.208 22.227 C 286.947 22.248,286.907 22.005,286.826 19.917 L 286.736 17.583 286.701 19.778 M51.758 18.042 C 51.879 18.359,52.500 18.449,52.500 18.149 C 52.500 18.047,52.397 18.004,52.270 18.052 C 52.144 18.101,51.952 18.053,51.844 17.945 C 51.693 17.796,51.673 17.818,51.758 18.042 M342.110 18.240 C 341.994 18.543,342.190 18.692,342.474 18.516 C 342.637 18.415,342.630 18.344,342.444 18.189 C 342.256 18.034,342.185 18.045,342.110 18.240 M266.546 18.667 C 266.531 18.857,266.623 19.000,266.760 19.000 C 266.892 19.000,267.000 18.850,267.000 18.667 C 267.000 18.483,266.903 18.333,266.785 18.333 C 266.667 18.333,266.560 18.483,266.546 18.667 M296.000 18.917 C 296.000 19.054,296.112 19.167,296.250 19.167 C 296.387 19.167,296.500 19.054,296.500 18.917 C 296.500 18.779,296.387 18.667,296.250 18.667 C 296.112 18.667,296.000 18.779,296.000 18.917 M31.017 18.986 C 30.746 19.157,30.890 19.673,31.203 19.654 C 31.358 19.644,31.362 19.618,31.218 19.559 C 30.949 19.450,31.139 19.000,31.454 19.000 C 31.623 19.000,31.677 19.109,31.618 19.333 C 31.508 19.757,31.767 19.768,31.991 19.350 C 32.232 18.900,31.554 18.646,31.017 18.986 M52.398 19.571 C 52.213 20.053,52.409 20.582,52.792 20.637 C 52.998 20.666,53.167 20.617,53.167 20.527 C 53.167 20.438,53.017 20.404,52.833 20.452 C 52.554 20.525,52.500 20.457,52.500 20.031 C 52.500 19.637,52.584 19.507,52.875 19.451 L 53.250 19.379 52.870 19.356 C 52.661 19.344,52.448 19.440,52.398 19.571 M342.667 19.569 C 342.667 19.715,342.785 19.833,342.931 19.833 C 343.225 19.833,343.174 19.475,342.865 19.372 C 342.756 19.335,342.667 19.424,342.667 19.569 M355.875 19.458 L 362.833 19.504 362.836 19.877 C 362.838 20.171,362.871 20.198,362.993 20.006 C 363.401 19.361,363.071 19.332,355.855 19.373 L 348.917 19.413 355.875 19.458 M380.684 19.486 C 380.529 19.584,380.497 19.736,380.588 19.942 C 380.714 20.224,380.731 20.218,380.791 19.875 L 380.857 19.500 387.767 19.500 L 394.677 19.500 394.828 19.875 C 394.977 20.246,394.979 20.246,394.989 19.893 C 394.995 19.696,394.881 19.490,394.736 19.434 C 394.317 19.274,380.942 19.322,380.684 19.486 M33.000 19.833 C 33.000 20.017,33.075 20.167,33.167 20.167 C 33.258 20.167,33.333 20.017,33.333 19.833 C 33.333 19.650,33.258 19.500,33.167 19.500 C 33.075 19.500,33.000 19.650,33.000 19.833 M268.222 19.750 C 268.222 19.887,268.313 20.000,268.424 20.000 C 268.535 20.000,268.719 20.112,268.833 20.250 C 269.068 20.532,269.500 20.586,269.500 20.333 C 269.500 20.242,269.350 20.167,269.167 20.167 C 268.944 20.167,268.833 20.056,268.833 19.833 C 268.833 19.621,268.722 19.500,268.528 19.500 C 268.360 19.500,268.222 19.612,268.222 19.750 M295.333 20.149 C 295.333 20.333,295.766 20.512,295.896 20.382 C 295.948 20.330,295.951 20.222,295.902 20.143 C 295.785 19.954,295.333 19.958,295.333 20.149 M317.121 20.140 C 316.854 20.246,316.849 20.290,317.074 20.587 C 317.319 20.912,317.323 20.912,317.328 20.554 C 317.331 20.352,317.462 20.157,317.625 20.115 C 317.823 20.063,317.836 20.036,317.667 20.031 C 317.529 20.027,317.283 20.076,317.121 20.140 M320.809 20.108 C 320.465 20.204,320.273 20.833,320.588 20.833 C 320.710 20.833,320.858 20.683,320.917 20.500 C 321.043 20.102,321.770 20.042,321.887 20.420 C 321.943 20.598,321.958 20.585,321.940 20.378 C 321.914 20.080,321.372 19.951,320.809 20.108 M318.167 20.495 C 318.167 20.718,318.247 20.792,318.417 20.727 C 318.554 20.674,318.667 20.527,318.667 20.399 C 318.667 20.271,318.554 20.167,318.417 20.167 C 318.279 20.167,318.167 20.314,318.167 20.495 M343.167 20.833 C 343.167 21.074,343.271 21.161,343.542 21.147 C 343.824 21.133,343.844 21.109,343.625 21.052 C 343.465 21.010,343.333 20.912,343.333 20.833 C 343.333 20.755,343.465 20.657,343.625 20.615 C 343.844 20.558,343.824 20.534,343.542 20.519 C 343.271 20.505,343.167 20.593,343.167 20.833 M72.500 21.053 C 72.500 21.434,72.940 21.697,73.448 21.620 C 73.897 21.553,73.894 21.549,73.375 21.525 C 73.026 21.509,72.833 21.415,72.833 21.260 C 72.833 21.128,72.758 20.973,72.667 20.917 C 72.575 20.860,72.500 20.921,72.500 21.053 M79.667 21.167 C 79.667 21.444,79.547 21.504,78.958 21.525 C 78.425 21.544,78.368 21.568,78.728 21.621 C 79.469 21.732,80.000 21.541,80.000 21.163 C 80.000 20.982,79.925 20.833,79.833 20.833 C 79.742 20.833,79.667 20.983,79.667 21.167 M124.755 21.058 C 124.582 21.447,124.902 21.670,125.583 21.637 L 126.083 21.613 125.552 21.547 C 125.163 21.498,125.003 21.382,124.956 21.115 C 124.897 20.778,124.881 20.774,124.755 21.058 M130.300 20.923 C 130.239 20.983,130.228 21.133,130.275 21.255 C 130.335 21.412,130.170 21.498,129.722 21.544 L 129.083 21.611 129.714 21.639 C 130.134 21.657,130.375 21.585,130.438 21.422 C 130.551 21.126,130.453 20.769,130.300 20.923 M159.167 20.988 C 159.167 21.387,159.722 21.666,160.470 21.640 L 161.250 21.614 160.417 21.515 C 159.744 21.436,159.593 21.360,159.632 21.125 C 159.661 20.952,159.577 20.833,159.424 20.833 C 159.282 20.833,159.167 20.903,159.167 20.988 M322.833 21.010 C 322.833 21.107,322.758 21.140,322.667 21.083 C 322.575 21.027,322.500 21.068,322.500 21.175 C 322.500 21.283,322.616 21.324,322.764 21.268 C 322.909 21.212,323.134 21.167,323.264 21.167 C 323.394 21.167,323.500 21.092,323.500 21.000 C 323.500 20.908,323.350 20.833,323.167 20.833 C 322.983 20.833,322.833 20.913,322.833 21.010 M164.833 21.250 C 164.833 21.433,164.622 21.507,164.042 21.527 C 163.394 21.549,163.352 21.566,163.815 21.622 C 164.571 21.715,165.167 21.549,165.167 21.247 C 165.167 21.111,165.092 21.000,165.000 21.000 C 164.908 21.000,164.833 21.112,164.833 21.250 M294.667 21.167 C 294.667 21.258,294.798 21.339,294.958 21.345 C 295.213 21.355,295.209 21.373,294.928 21.483 C 294.689 21.576,294.660 21.643,294.817 21.740 C 295.097 21.913,295.404 21.592,295.277 21.261 C 295.168 20.976,294.667 20.898,294.667 21.167 M34.633 21.533 C 34.789 21.689,34.878 21.689,35.033 21.533 C 35.189 21.378,35.144 21.333,34.833 21.333 C 34.522 21.333,34.478 21.378,34.633 21.533 M269.410 21.511 C 269.349 21.609,269.334 21.723,269.376 21.765 C 269.492 21.881,270.000 21.651,270.000 21.482 C 270.000 21.274,269.543 21.296,269.410 21.511 M323.500 21.396 C 323.500 21.431,323.612 21.553,323.750 21.667 C 323.955 21.837,324.000 21.825,324.000 21.604 C 324.000 21.455,323.887 21.333,323.750 21.333 C 323.612 21.333,323.500 21.362,323.500 21.396 M70.295 21.903 C 70.240 22.189,70.282 22.278,70.443 22.217 C 70.696 22.120,70.743 21.734,70.519 21.595 C 70.438 21.545,70.337 21.684,70.295 21.903 M75.877 21.620 C 76.131 21.658,76.506 21.657,76.711 21.617 C 76.916 21.578,76.708 21.546,76.250 21.548 C 75.792 21.549,75.624 21.581,75.877 21.620 M81.944 21.611 C 81.700 21.856,81.856 22.167,82.222 22.167 C 82.696 22.167,82.839 22.042,82.721 21.734 C 82.628 21.492,82.140 21.415,81.944 21.611 M122.922 21.716 C 122.851 21.880,122.839 22.061,122.896 22.118 C 123.065 22.288,123.202 22.050,123.124 21.721 C 123.055 21.430,123.046 21.430,122.922 21.716 M127.127 21.618 C 127.334 21.658,127.634 21.656,127.794 21.615 C 127.953 21.573,127.783 21.540,127.417 21.542 C 127.050 21.544,126.920 21.578,127.127 21.618 M131.944 21.611 C 131.700 21.856,131.856 22.167,132.222 22.167 C 132.696 22.167,132.839 22.042,132.721 21.734 C 132.628 21.492,132.140 21.415,131.944 21.611 M156.862 21.778 C 156.933 22.145,157.583 22.195,157.583 21.833 C 157.583 21.696,157.408 21.558,157.194 21.528 C 156.891 21.485,156.817 21.541,156.862 21.778 M166.442 21.745 C 166.390 21.879,166.404 22.024,166.474 22.067 C 166.681 22.195,167.051 21.885,166.928 21.685 C 166.769 21.428,166.553 21.454,166.442 21.745 M343.833 22.177 C 343.833 22.737,343.952 22.791,344.268 22.375 C 344.584 21.959,344.551 21.741,344.167 21.712 C 343.903 21.693,343.833 21.790,343.833 22.177 M68.030 22.373 C 68.059 22.579,68.215 22.772,68.376 22.802 C 68.740 22.872,68.950 22.380,68.670 22.114 C 68.506 21.958,68.486 21.996,68.576 22.292 C 68.662 22.577,68.622 22.667,68.408 22.667 C 68.210 22.667,68.153 22.569,68.215 22.333 C 68.263 22.150,68.229 22.000,68.139 22.000 C 68.050 22.000,68.001 22.168,68.030 22.373 M83.826 22.348 C 83.675 22.628,83.714 22.667,84.146 22.667 C 84.510 22.667,84.627 22.595,84.596 22.389 C 84.539 21.995,84.029 21.968,83.826 22.348 M120.879 22.333 C 120.898 22.581,121.024 22.667,121.369 22.667 C 121.868 22.667,121.952 22.519,121.633 22.200 C 121.309 21.875,120.851 21.956,120.879 22.333 M187.502 22.329 C 187.129 23.027,187.360 58.152,187.740 58.430 C 187.995 58.617,188.091 58.622,188.194 58.458 C 188.279 58.323,188.216 58.232,188.015 58.199 C 187.505 58.116,187.494 57.749,187.531 41.676 C 187.575 22.868,187.589 22.213,187.968 22.113 C 188.230 22.044,188.229 22.037,187.964 22.019 C 187.807 22.009,187.599 22.148,187.502 22.329 M194.541 22.105 C 194.813 22.185,194.834 22.994,194.876 35.220 L 194.920 48.250 194.918 35.169 C 194.917 22.211,194.914 22.088,194.583 22.054 C 194.326 22.027,194.316 22.039,194.541 22.105 M210.444 22.111 C 210.283 22.272,210.313 45.043,210.474 45.297 C 210.549 45.415,210.735 45.463,210.888 45.404 C 211.282 45.254,211.236 45.013,210.833 45.118 C 210.502 45.205,210.500 45.123,210.500 33.698 C 210.500 22.879,210.517 22.187,210.792 22.115 C 211.025 22.054,211.031 22.035,210.819 22.019 C 210.674 22.009,210.506 22.050,210.444 22.111 M133.587 22.327 C 133.446 22.555,133.571 22.727,133.818 22.642 C 133.918 22.608,133.931 22.490,133.849 22.357 C 133.745 22.190,133.677 22.182,133.587 22.327 M155.754 22.327 C 155.613 22.555,155.738 22.727,155.984 22.642 C 156.085 22.608,156.098 22.490,156.015 22.357 C 155.911 22.190,155.844 22.182,155.754 22.327 M168.167 22.417 C 168.167 22.554,168.314 22.667,168.495 22.667 C 168.718 22.667,168.792 22.587,168.727 22.417 C 168.674 22.279,168.527 22.167,168.399 22.167 C 168.271 22.167,168.167 22.279,168.167 22.417 M35.167 22.667 C 35.167 22.758,35.279 22.833,35.417 22.833 C 35.554 22.833,35.667 22.758,35.667 22.667 C 35.667 22.575,35.554 22.500,35.417 22.500 C 35.279 22.500,35.167 22.575,35.167 22.667 M67.089 22.882 C 67.017 23.047,67.006 23.228,67.063 23.285 C 67.232 23.454,67.368 23.216,67.291 22.888 C 67.221 22.597,67.212 22.597,67.089 22.882 M154.585 22.830 C 154.518 22.940,154.537 23.104,154.629 23.196 C 154.846 23.413,155.019 23.134,154.843 22.849 C 154.741 22.683,154.679 22.679,154.585 22.830 M294.278 22.903 C 294.229 23.033,294.295 23.180,294.427 23.231 C 294.585 23.292,294.667 23.212,294.667 22.995 C 294.667 22.616,294.412 22.555,294.278 22.903 M270.025 23.530 C 270.007 23.853,269.896 23.995,269.625 24.042 C 269.286 24.102,269.279 24.121,269.553 24.243 C 269.968 24.428,270.208 24.141,270.121 23.562 L 270.050 23.083 270.025 23.530 M135.333 23.589 C 135.333 23.723,135.446 23.833,135.583 23.833 C 135.722 23.833,135.833 23.981,135.833 24.167 C 135.833 24.385,135.944 24.500,136.155 24.500 C 136.346 24.500,136.498 24.633,136.530 24.829 C 136.571 25.080,136.642 25.119,136.833 24.993 C 137.052 24.848,137.047 24.799,136.792 24.603 C 136.631 24.481,136.500 24.294,136.500 24.190 C 136.500 24.085,136.385 24.000,136.245 24.000 C 136.104 24.000,135.949 23.893,135.899 23.763 C 135.769 23.425,135.333 23.291,135.333 23.589 M153.278 23.444 C 153.068 23.655,153.167 23.833,153.495 23.833 C 153.718 23.833,153.792 23.753,153.727 23.583 C 153.624 23.316,153.458 23.264,153.278 23.444 M170.000 23.589 C 170.000 23.723,170.112 23.833,170.250 23.833 C 170.387 23.833,170.500 23.766,170.500 23.684 C 170.500 23.603,170.387 23.492,170.250 23.440 C 170.098 23.381,170.000 23.439,170.000 23.589 M119.167 23.647 C 119.167 23.728,119.009 23.836,118.816 23.886 C 118.451 23.982,118.449 24.344,118.813 24.465 C 118.928 24.504,119.063 24.377,119.114 24.184 C 119.164 23.991,119.309 23.833,119.436 23.833 C 119.563 23.833,119.667 23.758,119.667 23.667 C 119.667 23.575,119.554 23.500,119.417 23.500 C 119.279 23.500,119.167 23.566,119.167 23.647 M312.167 23.833 C 312.167 23.925,312.279 24.000,312.417 24.000 C 312.554 24.000,312.667 23.925,312.667 23.833 C 312.667 23.742,312.554 23.667,312.417 23.667 C 312.279 23.667,312.167 23.742,312.167 23.833 M344.434 23.930 C 344.265 24.371,344.318 24.500,344.667 24.500 C 344.911 24.500,345.000 24.389,345.000 24.083 C 345.000 23.618,344.596 23.509,344.434 23.930 M64.452 24.167 C 64.500 24.350,64.643 24.500,64.769 24.500 C 64.896 24.500,65.000 24.350,65.000 24.167 C 65.000 23.950,64.889 23.833,64.682 23.833 C 64.447 23.833,64.387 23.919,64.452 24.167 M87.167 24.250 C 87.167 24.387,87.242 24.500,87.333 24.500 C 87.425 24.500,87.500 24.387,87.500 24.250 C 87.500 24.113,87.425 24.000,87.333 24.000 C 87.242 24.000,87.167 24.113,87.167 24.250 M170.538 24.198 C 170.641 24.507,171.000 24.558,171.000 24.264 C 171.000 24.119,170.881 24.000,170.736 24.000 C 170.591 24.000,170.502 24.089,170.538 24.198 M53.365 24.314 C 53.249 24.385,53.203 24.569,53.262 24.722 C 53.378 25.024,53.667 25.104,53.667 24.833 C 53.667 24.742,53.573 24.666,53.458 24.664 C 53.317 24.662,53.329 24.612,53.495 24.507 C 53.630 24.421,53.703 24.314,53.657 24.268 C 53.611 24.222,53.480 24.243,53.365 24.314 M35.583 24.667 C 35.525 24.762,35.668 24.833,35.917 24.833 C 36.188 24.833,36.311 24.902,36.241 25.015 C 36.179 25.114,35.969 25.155,35.773 25.106 C 35.422 25.018,35.421 25.020,35.748 25.264 C 36.166 25.576,36.640 25.119,36.310 24.722 C 36.092 24.460,35.728 24.432,35.583 24.667 M293.615 24.608 C 293.397 24.825,293.501 25.000,293.847 25.000 C 294.041 25.000,294.165 24.913,294.128 24.802 C 294.047 24.559,293.769 24.453,293.615 24.608 M151.500 24.833 C 151.500 24.925,151.612 25.000,151.750 25.000 C 151.887 25.000,152.000 24.925,152.000 24.833 C 152.000 24.742,151.887 24.667,151.750 24.667 C 151.612 24.667,151.500 24.742,151.500 24.833 M285.667 25.000 C 285.667 25.092,285.779 25.167,285.917 25.167 C 286.054 25.167,286.167 25.092,286.167 25.000 C 286.167 24.908,286.054 24.833,285.917 24.833 C 285.779 24.833,285.667 24.908,285.667 25.000 M311.500 25.083 C 311.500 25.236,311.581 25.334,311.679 25.301 C 311.778 25.269,311.858 25.170,311.858 25.083 C 311.858 24.996,311.778 24.898,311.679 24.865 C 311.581 24.832,311.500 24.931,311.500 25.083 M326.449 24.940 C 326.293 25.095,326.481 25.333,326.760 25.333 C 326.892 25.333,327.000 25.221,327.000 25.083 C 327.000 24.832,326.648 24.741,326.449 24.940 M62.724 25.300 C 62.675 25.485,62.492 25.673,62.317 25.719 C 62.108 25.774,62.033 25.893,62.100 26.068 C 62.233 26.413,62.667 26.412,62.667 26.068 C 62.667 25.922,62.820 25.762,63.008 25.713 C 63.200 25.663,63.328 25.512,63.300 25.367 C 63.223 24.971,62.822 24.925,62.724 25.300 M88.932 25.271 C 88.792 25.634,88.804 25.667,89.073 25.667 C 89.417 25.667,89.501 25.450,89.247 25.216 C 89.076 25.058,89.009 25.069,88.932 25.271 M150.855 25.131 C 150.905 25.465,150.809 25.667,150.601 25.667 C 150.319 25.667,150.119 26.117,150.341 26.254 C 150.560 26.390,150.833 26.197,150.833 25.907 C 150.833 25.775,150.946 25.667,151.083 25.667 C 151.407 25.667,151.408 25.231,151.085 25.107 C 150.949 25.055,150.845 25.066,150.855 25.131 M137.031 25.344 C 137.071 25.464,137.203 25.595,137.323 25.635 C 137.448 25.677,137.510 25.615,137.469 25.490 C 137.429 25.369,137.297 25.238,137.177 25.198 C 137.052 25.156,136.990 25.219,137.031 25.344 M310.896 25.743 C 310.752 26.118,310.923 26.441,311.319 26.545 C 311.511 26.595,311.625 26.568,311.574 26.484 C 311.522 26.401,311.372 26.333,311.240 26.333 C 310.853 26.333,310.965 26.029,311.375 25.966 L 311.750 25.909 311.373 25.697 C 311.055 25.519,310.979 25.526,310.896 25.743 M89.500 26.000 C 89.500 26.183,89.604 26.333,89.732 26.333 C 89.860 26.333,90.010 26.452,90.066 26.597 C 90.190 26.921,90.540 26.831,90.594 26.461 C 90.620 26.284,90.549 26.222,90.390 26.283 C 90.236 26.343,90.113 26.247,90.054 26.022 C 89.936 25.572,89.500 25.555,89.500 26.000 M327.000 25.833 C 326.798 25.964,326.822 25.995,327.125 25.997 C 327.331 25.999,327.500 26.070,327.500 26.155 C 327.500 26.240,327.331 26.343,327.125 26.382 C 326.811 26.443,326.827 26.458,327.220 26.477 C 327.613 26.496,327.681 26.441,327.637 26.138 C 327.574 25.715,327.350 25.607,327.000 25.833 M344.860 26.464 C 344.832 27.047,345.206 27.361,345.535 27.031 C 345.663 26.903,345.616 26.878,345.369 26.942 C 345.078 27.018,345.013 26.944,344.955 26.475 L 344.887 25.917 344.860 26.464 M149.667 26.583 C 149.667 26.721,149.779 26.833,149.917 26.833 C 150.054 26.833,150.167 26.721,150.167 26.583 C 150.167 26.446,150.054 26.333,149.917 26.333 C 149.779 26.333,149.667 26.446,149.667 26.583 M293.125 26.443 C 293.410 26.504,293.500 26.640,293.500 27.012 C 293.500 27.404,293.426 27.502,293.125 27.512 C 292.769 27.523,292.767 27.530,293.083 27.656 C 293.493 27.820,293.710 27.512,293.636 26.871 C 293.595 26.521,293.488 26.410,293.167 26.389 C 292.799 26.365,292.795 26.372,293.125 26.443 M284.500 26.781 C 284.500 26.919,284.350 27.070,284.167 27.118 C 283.982 27.167,283.833 27.346,283.833 27.519 C 283.833 27.692,283.721 27.833,283.583 27.833 C 283.446 27.833,283.333 27.946,283.333 28.083 C 283.333 28.460,283.489 28.391,284.094 27.750 C 284.397 27.429,284.716 27.167,284.804 27.167 C 285.126 27.167,285.141 26.699,284.822 26.615 C 284.609 26.560,284.500 26.616,284.500 26.781 M265.623 27.017 C 265.698 27.303,266.233 27.545,266.407 27.371 C 266.641 27.137,266.458 26.865,266.024 26.801 C 265.639 26.745,265.562 26.786,265.623 27.017 M138.333 27.597 C 138.333 28.116,138.694 28.063,138.775 27.533 C 138.812 27.294,138.745 27.167,138.582 27.167 C 138.426 27.167,138.333 27.326,138.333 27.597 M310.333 27.667 C 310.333 27.991,310.418 28.167,310.573 28.167 C 310.900 28.167,311.002 27.961,310.889 27.529 C 310.745 26.976,310.333 27.078,310.333 27.667 M327.708 27.444 C 327.367 27.581,327.472 27.809,327.833 27.715 C 328.017 27.667,328.167 27.562,328.167 27.481 C 328.167 27.322,328.037 27.311,327.708 27.444 M35.333 27.706 L 35.750 27.891 35.373 27.957 C 35.165 27.994,35.038 28.094,35.091 28.179 C 35.149 28.273,35.311 28.268,35.504 28.165 C 35.909 27.948,35.750 27.496,35.274 27.511 C 34.941 27.520,34.945 27.534,35.333 27.706 M60.387 27.734 C 60.496 28.017,59.890 28.217,59.760 27.941 C 59.710 27.836,59.712 27.919,59.763 28.126 C 59.825 28.377,59.770 28.535,59.595 28.602 C 59.308 28.712,59.232 29.167,59.500 29.167 C 59.592 29.167,59.667 29.054,59.667 28.917 C 59.667 28.778,59.815 28.667,60.000 28.667 C 60.188 28.667,60.333 28.556,60.333 28.411 C 60.333 28.271,60.446 28.113,60.583 28.060 C 60.917 27.932,60.904 27.500,60.566 27.500 C 60.404 27.500,60.333 27.593,60.387 27.734 M327.833 28.097 C 327.440 28.315,327.437 28.329,327.774 28.331 C 327.970 28.332,328.174 28.221,328.227 28.083 C 328.280 27.946,328.306 27.841,328.286 27.850 C 328.266 27.859,328.063 27.970,327.833 28.097 M52.397 28.240 C 52.347 28.372,52.340 28.616,52.383 28.782 C 52.433 28.975,52.468 28.914,52.481 28.614 C 52.497 28.214,52.553 28.161,52.854 28.257 C 53.093 28.332,53.171 28.309,53.094 28.185 C 52.932 27.922,52.506 27.956,52.397 28.240 M148.545 28.333 C 148.388 28.517,148.171 28.667,148.064 28.667 C 147.758 28.667,147.659 29.128,147.942 29.237 C 148.262 29.360,148.500 29.219,148.500 28.907 C 148.500 28.775,148.612 28.667,148.750 28.667 C 148.889 28.667,149.000 28.519,149.000 28.333 C 149.000 28.150,148.962 28.000,148.915 28.000 C 148.868 28.000,148.702 28.150,148.545 28.333 M91.833 28.917 C 91.833 29.054,91.946 29.167,92.083 29.167 C 92.221 29.167,92.333 29.054,92.333 28.917 C 92.333 28.779,92.221 28.667,92.083 28.667 C 91.946 28.667,91.833 28.779,91.833 28.917 M138.833 28.819 C 138.833 28.903,138.927 29.010,139.042 29.056 C 139.208 29.124,139.208 29.143,139.042 29.154 C 138.818 29.168,138.745 29.667,138.967 29.667 C 139.202 29.667,139.500 29.276,139.500 28.967 C 139.500 28.778,139.377 28.667,139.167 28.667 C 138.983 28.667,138.833 28.735,138.833 28.819 M345.611 29.111 C 345.550 29.172,345.501 29.303,345.503 29.403 C 345.504 29.502,345.573 29.476,345.657 29.344 C 345.782 29.146,345.853 29.142,346.071 29.323 C 346.291 29.506,346.333 29.498,346.333 29.270 C 346.333 29.004,345.830 28.893,345.611 29.111 M292.265 29.475 C 292.209 29.566,292.305 29.599,292.485 29.552 C 292.697 29.497,292.833 29.571,292.892 29.776 C 292.969 30.044,292.976 30.041,292.947 29.752 C 292.911 29.400,292.432 29.206,292.265 29.475 M345.405 33.333 C 345.405 35.396,345.429 36.240,345.458 35.208 C 345.487 34.177,345.487 32.490,345.458 31.458 C 345.429 30.427,345.405 31.271,345.405 33.333 M147.333 30.083 C 147.333 30.221,147.446 30.333,147.583 30.333 C 147.721 30.333,147.833 30.221,147.833 30.083 C 147.833 29.946,147.721 29.833,147.583 29.833 C 147.446 29.833,147.333 29.946,147.333 30.083 M309.578 30.185 C 309.473 30.514,309.585 31.968,309.778 32.780 C 309.895 33.274,310.500 33.232,310.500 32.730 C 310.500 32.456,310.423 32.385,310.191 32.445 C 309.932 32.513,309.865 32.398,309.774 31.740 C 309.595 30.430,309.635 30.169,310.042 30.005 L 310.417 29.854 310.053 29.844 C 309.824 29.837,309.648 29.963,309.578 30.185 M58.667 30.167 C 58.667 30.258,58.779 30.333,58.917 30.333 C 59.054 30.333,59.167 30.258,59.167 30.167 C 59.167 30.075,59.054 30.000,58.917 30.000 C 58.779 30.000,58.667 30.075,58.667 30.167 M92.417 30.167 C 92.360 30.258,92.468 30.333,92.657 30.333 C 92.846 30.333,93.000 30.258,93.000 30.167 C 93.000 30.075,92.892 30.000,92.760 30.000 C 92.628 30.000,92.473 30.075,92.417 30.167 M279.696 30.443 C 279.726 30.594,279.887 30.739,280.055 30.763 C 280.266 30.794,280.330 30.731,280.263 30.557 C 280.210 30.419,280.167 30.275,280.167 30.236 C 280.167 30.198,280.049 30.167,279.904 30.167 C 279.750 30.167,279.664 30.280,279.696 30.443 M293.033 31.375 C 293.001 32.611,292.935 32.762,292.458 32.686 C 292.390 32.676,292.333 32.742,292.333 32.833 C 292.333 32.925,292.437 33.000,292.563 33.000 C 293.031 33.000,293.182 32.544,293.124 31.307 L 293.066 30.083 293.033 31.375 M51.933 30.456 C 51.672 30.717,51.850 31.166,52.208 31.147 C 52.491 31.133,52.511 31.109,52.292 31.052 C 52.131 31.010,52.000 30.912,52.000 30.833 C 52.000 30.755,52.131 30.665,52.292 30.632 C 52.556 30.579,52.558 30.563,52.308 30.465 C 52.157 30.405,51.988 30.401,51.933 30.456 M328.105 30.587 C 328.027 30.791,328.069 30.808,328.320 30.674 C 328.675 30.484,328.824 30.711,328.846 31.472 C 328.854 31.717,328.899 31.819,328.947 31.699 C 329.125 31.254,328.831 30.333,328.510 30.333 C 328.341 30.333,328.158 30.448,328.105 30.587 M278.000 30.903 C 278.000 31.048,278.119 31.167,278.264 31.167 C 278.409 31.167,278.498 31.078,278.462 30.969 C 278.359 30.660,278.000 30.608,278.000 30.903 M31.081 31.158 C 31.173 31.450,31.087 31.489,30.217 31.543 L 29.250 31.604 30.167 31.633 C 31.205 31.665,31.560 31.516,31.404 31.112 C 31.254 30.720,30.955 30.763,31.081 31.158 M26.375 31.110 C 26.085 31.227,26.114 31.500,26.417 31.500 C 26.554 31.500,26.667 31.387,26.667 31.250 C 26.667 31.113,26.648 31.006,26.625 31.013 C 26.602 31.020,26.490 31.064,26.375 31.110 M139.322 31.445 C 139.058 32.141,139.706 32.777,140.074 32.182 C 140.125 32.099,140.025 32.068,139.852 32.113 C 139.462 32.216,139.319 32.006,139.448 31.515 C 139.517 31.250,139.637 31.164,139.856 31.221 C 140.027 31.266,140.167 31.234,140.167 31.151 C 140.167 30.787,139.482 31.026,139.322 31.445 M146.500 31.139 C 146.500 31.229,146.650 31.263,146.833 31.215 C 147.020 31.166,147.167 31.210,147.167 31.314 C 147.167 31.416,147.054 31.500,146.917 31.500 C 146.779 31.500,146.667 31.580,146.667 31.679 C 146.667 31.777,146.798 31.832,146.958 31.802 C 147.396 31.717,147.329 31.095,146.875 31.030 C 146.669 31.001,146.500 31.050,146.500 31.139 M93.000 31.333 C 93.000 31.425,93.112 31.500,93.250 31.500 C 93.388 31.500,93.500 31.425,93.500 31.333 C 93.500 31.242,93.388 31.167,93.250 31.167 C 93.112 31.167,93.000 31.242,93.000 31.333 M74.167 31.597 C 74.167 31.742,74.256 31.831,74.365 31.795 C 74.674 31.692,74.725 31.333,74.431 31.333 C 74.285 31.333,74.167 31.452,74.167 31.597 M77.667 31.583 C 77.667 31.721,77.742 31.833,77.833 31.833 C 77.925 31.833,78.000 31.721,78.000 31.583 C 78.000 31.446,77.925 31.333,77.833 31.333 C 77.742 31.333,77.667 31.446,77.667 31.583 M277.778 31.738 C 277.667 32.027,278.073 32.398,278.369 32.279 C 278.497 32.228,278.457 32.188,278.272 32.180 C 278.045 32.170,277.985 32.076,278.048 31.833 C 278.147 31.455,277.917 31.374,277.778 31.738 M280.095 32.262 C 279.735 32.622,279.760 32.667,280.323 32.667 C 280.710 32.667,280.807 32.597,280.788 32.333 C 280.757 31.934,280.455 31.902,280.095 32.262 M328.686 32.458 C 328.667 33.003,328.285 33.224,328.110 32.792 C 328.064 32.677,328.020 32.827,328.013 33.125 C 328.003 33.556,328.067 33.667,328.326 33.667 C 328.674 33.667,328.941 32.830,328.785 32.225 C 328.739 32.046,328.697 32.144,328.686 32.458 M57.500 32.500 C 57.500 32.592,57.612 32.667,57.750 32.667 C 57.887 32.667,58.000 32.592,58.000 32.500 C 58.000 32.408,57.887 32.333,57.750 32.333 C 57.612 32.333,57.500 32.408,57.500 32.500 M281.444 32.611 C 281.196 32.860,281.341 33.333,281.667 33.333 C 281.907 33.333,281.995 33.229,281.981 32.958 C 281.966 32.676,281.942 32.656,281.885 32.875 C 281.843 33.035,281.731 33.167,281.635 33.167 C 281.539 33.167,281.500 33.017,281.548 32.833 C 281.641 32.478,281.621 32.434,281.444 32.611 M93.611 32.778 C 93.199 33.190,93.638 33.765,94.100 33.420 C 94.402 33.194,94.399 33.188,94.042 33.278 C 93.594 33.391,93.553 33.206,93.958 32.899 C 94.210 32.708,94.214 32.677,93.986 32.672 C 93.841 32.669,93.672 32.717,93.611 32.778 M79.282 32.950 C 78.924 33.043,78.995 33.394,79.389 33.471 C 79.576 33.507,79.667 33.412,79.667 33.179 C 79.667 32.989,79.648 32.842,79.625 32.853 C 79.602 32.863,79.448 32.907,79.282 32.950 M146.205 33.031 C 146.308 33.340,146.667 33.392,146.667 33.097 C 146.667 32.952,146.548 32.833,146.403 32.833 C 146.258 32.833,146.169 32.922,146.205 33.031 M50.699 33.179 C 50.731 33.278,50.830 33.358,50.917 33.358 C 51.004 33.358,51.102 33.278,51.135 33.179 C 51.168 33.081,51.069 33.000,50.917 33.000 C 50.764 33.000,50.666 33.081,50.699 33.179 M72.500 33.250 C 72.500 33.403,72.581 33.501,72.679 33.468 C 72.778 33.435,72.858 33.337,72.858 33.250 C 72.858 33.163,72.778 33.065,72.679 33.032 C 72.581 32.999,72.500 33.097,72.500 33.250 M118.241 33.181 C 118.069 33.459,118.456 33.778,118.685 33.548 C 118.878 33.356,118.757 33.000,118.500 33.000 C 118.419 33.000,118.303 33.082,118.241 33.181 M120.944 33.111 C 120.748 33.308,120.826 33.667,121.066 33.667 C 121.259 33.667,121.500 33.336,121.500 33.070 C 121.500 32.957,121.066 32.990,120.944 33.111 M165.297 33.092 C 165.062 33.327,165.397 33.667,165.863 33.667 C 166.244 33.667,166.345 33.600,166.302 33.375 C 166.248 33.086,165.510 32.879,165.297 33.092 M167.500 33.333 C 167.340 33.631,167.373 33.667,167.810 33.667 C 168.224 33.667,168.500 33.428,168.500 33.070 C 168.500 32.831,167.649 33.055,167.500 33.333 M57.042 33.438 C 57.486 33.569,57.419 34.061,56.973 33.945 C 56.633 33.856,56.629 33.867,56.895 34.133 C 57.144 34.382,57.198 34.386,57.339 34.167 C 57.578 33.794,57.456 33.425,57.081 33.386 C 56.821 33.360,56.813 33.371,57.042 33.438 M122.192 33.825 C 122.228 33.935,122.313 34.019,122.379 34.012 C 122.578 33.992,122.540 33.763,122.325 33.692 C 122.215 33.655,122.155 33.715,122.192 33.825 M164.106 33.917 C 164.054 34.054,163.904 34.167,163.773 34.167 C 163.441 34.167,163.302 34.619,163.599 34.733 C 163.756 34.793,163.900 34.679,164.001 34.413 C 164.088 34.186,164.235 34.000,164.329 34.000 C 164.423 34.000,164.500 33.925,164.500 33.833 C 164.500 33.576,164.214 33.636,164.106 33.917 M169.167 33.823 C 169.167 34.103,169.462 34.172,169.561 33.916 C 169.619 33.764,169.560 33.667,169.411 33.667 C 169.277 33.667,169.167 33.737,169.167 33.823 M283.333 34.167 C 283.333 34.381,283.418 34.500,283.542 34.458 C 283.656 34.420,283.750 34.289,283.750 34.167 C 283.750 34.044,283.656 33.913,283.542 33.875 C 283.418 33.834,283.333 33.952,283.333 34.167 M328.000 34.354 C 328.000 34.801,328.036 34.845,328.254 34.663 C 328.635 34.347,328.690 34.509,328.721 36.027 C 328.749 37.360,328.735 37.416,328.383 37.404 C 328.182 37.398,328.055 37.454,328.101 37.529 C 328.798 38.657,329.266 36.183,328.730 34.208 C 328.566 33.604,328.000 33.717,328.000 34.354 M310.133 34.113 C 309.804 34.200,309.733 34.405,309.586 35.699 C 309.471 36.708,309.664 37.333,310.089 37.333 C 310.223 37.333,310.333 37.258,310.333 37.167 C 310.333 37.075,310.229 37.000,310.101 37.000 C 309.753 37.000,309.655 36.574,309.774 35.566 C 309.866 34.780,309.921 34.672,310.190 34.757 C 310.437 34.836,310.500 34.769,310.500 34.428 C 310.500 34.193,310.481 34.009,310.458 34.019 C 310.435 34.030,310.289 34.072,310.133 34.113 M50.167 34.486 C 50.167 34.691,50.274 34.833,50.429 34.833 C 50.584 34.833,50.669 34.720,50.637 34.555 C 50.556 34.137,50.167 34.080,50.167 34.486 M71.865 34.346 C 71.898 34.444,71.996 34.525,72.083 34.525 C 72.170 34.525,72.269 34.444,72.301 34.346 C 72.334 34.247,72.236 34.167,72.083 34.167 C 71.931 34.167,71.832 34.247,71.865 34.346 M79.781 34.274 C 79.563 34.493,79.668 34.833,79.958 34.845 C 80.208 34.855,80.202 34.878,79.917 35.000 C 79.602 35.135,79.605 35.144,79.969 35.155 C 80.292 35.165,80.347 35.094,80.303 34.721 C 80.250 34.276,79.997 34.059,79.781 34.274 M122.667 34.333 C 122.667 34.425,122.779 34.500,122.917 34.500 C 123.054 34.500,123.167 34.425,123.167 34.333 C 123.167 34.242,123.054 34.167,122.917 34.167 C 122.779 34.167,122.667 34.242,122.667 34.333 M145.333 34.505 C 145.333 34.594,145.483 34.667,145.667 34.667 C 145.863 34.667,146.000 34.778,146.000 34.936 C 146.000 35.120,145.898 35.179,145.679 35.122 C 145.450 35.062,145.384 35.106,145.450 35.277 C 145.597 35.659,146.083 35.459,146.083 35.017 C 146.083 34.759,145.953 34.573,145.708 34.483 C 145.482 34.399,145.333 34.408,145.333 34.505 M116.500 35.000 C 116.500 35.092,116.612 35.167,116.750 35.167 C 116.888 35.167,117.000 35.092,117.000 35.000 C 117.000 34.908,116.888 34.833,116.750 34.833 C 116.612 34.833,116.500 34.908,116.500 35.000 M162.917 35.000 C 162.973 35.092,163.128 35.167,163.260 35.167 C 163.392 35.167,163.500 35.092,163.500 35.000 C 163.500 34.908,163.346 34.833,163.157 34.833 C 162.968 34.833,162.860 34.908,162.917 35.000 M56.167 35.500 C 56.167 35.592,56.317 35.667,56.500 35.667 C 56.683 35.667,56.833 35.592,56.833 35.500 C 56.833 35.408,56.683 35.333,56.500 35.333 C 56.317 35.333,56.167 35.408,56.167 35.500 M123.278 35.444 C 123.217 35.506,123.167 35.693,123.167 35.861 C 123.167 36.236,123.593 36.267,123.733 35.902 C 123.895 35.479,123.570 35.153,123.278 35.444 M94.032 36.083 C 93.997 36.954,94.188 37.267,94.605 37.024 C 94.898 36.854,94.895 36.843,94.551 36.838 C 94.243 36.834,94.176 36.722,94.122 36.125 L 94.058 35.417 94.032 36.083 M140.083 35.806 C 140.037 35.851,140.009 36.158,140.019 36.486 C 140.030 36.815,140.073 36.951,140.115 36.790 C 140.157 36.628,140.261 36.539,140.346 36.591 C 140.431 36.643,140.506 36.588,140.513 36.468 C 140.520 36.348,140.549 36.131,140.577 35.986 C 140.625 35.742,140.275 35.614,140.083 35.806 M292.333 35.815 C 292.333 35.896,292.465 35.953,292.625 35.940 C 292.870 35.920,292.925 36.088,292.967 36.995 C 293.035 38.434,292.913 38.893,292.492 38.783 C 292.313 38.736,292.208 38.766,292.260 38.849 C 292.419 39.107,292.813 39.015,292.994 38.678 C 293.235 38.228,293.214 36.114,292.967 35.867 C 292.733 35.633,292.333 35.600,292.333 35.815 M56.833 36.044 C 56.833 36.190,56.665 36.343,56.458 36.382 L 56.083 36.455 56.464 36.477 C 56.830 36.499,57.151 36.095,56.937 35.882 C 56.880 35.825,56.833 35.898,56.833 36.044 M115.967 36.200 C 116.122 36.356,116.211 36.356,116.367 36.200 C 116.522 36.044,116.478 36.000,116.167 36.000 C 115.856 36.000,115.811 36.044,115.967 36.200 M71.260 36.296 C 71.061 36.494,71.182 37.015,71.500 37.333 C 71.814 37.647,72.054 37.667,75.625 37.664 C 80.202 37.662,80.804 37.541,79.875 36.812 C 79.608 36.603,79.604 36.609,79.823 36.888 C 80.241 37.420,79.759 37.492,75.742 37.492 C 72.115 37.492,71.884 37.473,71.617 37.161 C 71.236 36.716,71.258 36.441,71.667 36.548 C 71.850 36.596,72.000 36.576,72.000 36.504 C 72.000 36.341,71.387 36.169,71.260 36.296 M171.430 36.927 C 171.141 37.216,171.116 37.341,171.268 37.736 C 171.490 38.314,172.000 37.915,172.000 37.163 C 172.000 36.725,171.740 36.618,171.430 36.927 M286.333 37.089 C 286.333 37.358,286.594 37.419,286.739 37.184 C 286.790 37.102,286.719 36.992,286.582 36.939 C 286.431 36.881,286.333 36.940,286.333 37.089 M140.539 37.667 C 140.539 37.987,140.573 38.119,140.615 37.958 C 140.657 37.798,140.657 37.535,140.615 37.375 C 140.573 37.215,140.539 37.346,140.539 37.667 M161.667 37.333 C 161.667 37.425,161.817 37.500,162.000 37.500 C 162.183 37.500,162.333 37.425,162.333 37.333 C 162.333 37.242,162.183 37.167,162.000 37.167 C 161.817 37.167,161.667 37.242,161.667 37.333 M171.833 37.417 C 171.833 37.554,171.721 37.667,171.583 37.667 C 171.446 37.667,171.333 37.554,171.333 37.417 C 171.333 37.279,171.446 37.167,171.583 37.167 C 171.721 37.167,171.833 37.279,171.833 37.417 M145.125 37.537 C 145.466 37.701,145.500 37.834,145.500 39.014 C 145.500 40.228,145.476 40.314,145.125 40.376 C 144.782 40.436,144.776 40.453,145.058 40.578 C 145.516 40.782,145.661 40.417,145.664 39.055 C 145.667 37.615,145.574 37.330,145.107 37.345 C 144.752 37.356,144.752 37.357,145.125 37.537 M286.833 37.702 C 286.833 37.866,286.937 38.000,287.064 38.000 C 287.191 38.000,287.329 37.866,287.372 37.702 C 287.426 37.496,287.356 37.405,287.142 37.405 C 286.957 37.405,286.833 37.524,286.833 37.702 M345.503 37.448 C 345.498 37.809,345.861 37.878,346.141 37.571 C 346.400 37.286,346.399 37.282,346.112 37.498 C 345.852 37.695,345.786 37.694,345.657 37.489 C 345.561 37.339,345.504 37.324,345.503 37.448 M123.756 38.157 C 123.693 38.259,123.792 38.333,123.990 38.333 C 124.333 38.333,124.333 38.342,124.336 49.125 C 124.338 59.520,124.382 60.961,124.680 60.478 C 124.754 60.359,124.744 60.177,124.658 60.073 C 124.566 59.962,124.485 55.438,124.460 48.987 C 124.420 38.994,124.394 38.083,124.141 38.035 C 123.989 38.005,123.815 38.061,123.756 38.157 M139.872 48.958 C 139.851 55.031,139.890 60.000,139.958 60.000 C 140.072 60.000,140.070 51.986,139.955 41.833 C 139.930 39.679,139.893 42.885,139.872 48.958 M55.500 38.315 C 55.500 38.396,55.631 38.453,55.792 38.440 C 56.010 38.422,56.109 38.585,56.185 39.083 C 56.277 39.690,56.288 39.703,56.310 39.222 C 56.323 38.932,56.288 38.575,56.232 38.430 C 56.127 38.155,55.500 38.056,55.500 38.315 M260.223 38.428 C 260.168 38.572,260.203 38.770,260.302 38.869 C 260.430 38.997,260.455 38.946,260.388 38.691 C 260.295 38.337,260.318 38.333,262.917 38.333 C 265.457 38.333,265.536 38.344,265.452 38.667 C 265.347 39.069,265.587 39.115,265.738 38.722 C 265.918 38.251,265.508 38.172,262.870 38.169 C 260.709 38.167,260.308 38.206,260.223 38.428 M327.500 38.672 C 327.500 38.761,327.650 38.833,327.833 38.833 C 328.017 38.833,328.167 38.908,328.167 39.000 C 328.167 39.092,328.001 39.167,327.798 39.167 C 327.451 39.167,327.446 39.184,327.710 39.448 C 328.035 39.773,328.141 39.715,328.205 39.180 C 328.236 38.912,328.137 38.754,327.875 38.654 C 327.646 38.566,327.500 38.573,327.500 38.672 M45.438 38.966 C 45.277 39.226,45.636 39.597,45.845 39.388 C 45.951 39.282,45.987 39.114,45.926 39.015 C 45.794 38.802,45.554 38.778,45.438 38.966 M267.766 39.103 C 267.705 39.260,267.739 39.470,267.842 39.570 C 267.977 39.701,268.013 39.664,267.972 39.434 C 267.942 39.260,268.022 39.081,268.152 39.036 C 268.314 38.980,268.354 39.039,268.282 39.227 C 268.224 39.377,268.255 39.500,268.351 39.500 C 268.629 39.500,268.440 38.926,268.144 38.869 C 267.996 38.840,267.826 38.946,267.766 39.103 M310.267 39.432 C 310.090 39.894,310.652 40.261,310.907 39.849 C 310.958 39.766,310.840 39.740,310.645 39.791 C 310.387 39.858,310.311 39.819,310.371 39.650 C 310.416 39.522,310.576 39.427,310.726 39.440 C 310.877 39.453,311.000 39.396,311.000 39.315 C 311.000 39.056,310.373 39.156,310.267 39.432 M268.935 39.762 C 268.865 39.945,268.918 40.008,269.112 39.970 C 269.264 39.941,269.420 39.823,269.458 39.708 C 269.560 39.402,269.053 39.454,268.935 39.762 M344.904 39.910 C 344.847 40.135,344.840 40.416,344.887 40.535 C 344.935 40.653,344.980 40.539,344.987 40.280 C 344.998 39.872,345.048 39.826,345.374 39.929 C 345.706 40.035,345.722 40.018,345.520 39.774 C 345.203 39.392,345.024 39.432,344.904 39.910 M161.111 39.778 C 160.854 40.035,160.990 43.507,161.261 43.611 C 161.405 43.666,161.607 43.626,161.711 43.522 C 161.852 43.382,161.806 43.333,161.533 43.333 C 161.180 43.333,161.167 43.273,161.167 41.667 C 161.167 40.296,161.211 40.000,161.417 40.000 C 161.554 40.000,161.667 39.925,161.667 39.833 C 161.667 39.646,161.282 39.607,161.111 39.778 M56.322 39.875 C 56.231 40.212,56.266 41.720,56.369 41.875 C 56.447 41.994,56.494 41.599,56.477 40.958 C 56.453 40.038,56.392 39.616,56.322 39.875 M287.908 40.015 C 287.747 40.275,288.077 40.545,288.441 40.452 C 288.695 40.386,288.684 40.369,288.375 40.353 C 288.169 40.342,288.000 40.264,288.000 40.178 C 288.000 40.093,288.169 39.991,288.375 39.951 C 288.750 39.879,288.750 39.879,288.385 39.856 C 288.184 39.844,287.969 39.915,287.908 40.015 M43.682 40.458 C 43.805 40.619,43.927 40.781,43.953 40.819 C 43.979 40.858,44.000 40.726,44.000 40.528 C 44.000 40.306,43.896 40.167,43.730 40.167 C 43.498 40.167,43.491 40.209,43.682 40.458 M171.917 40.500 C 171.860 40.592,171.973 40.667,172.167 40.667 C 172.361 40.667,172.475 40.738,172.421 40.826 C 172.367 40.914,172.200 40.938,172.051 40.881 C 171.869 40.811,171.819 40.841,171.899 40.972 C 172.175 41.418,172.756 41.093,172.566 40.598 C 172.452 40.302,172.074 40.245,171.917 40.500 M327.030 40.778 C 327.059 40.931,327.177 41.087,327.292 41.125 C 327.598 41.227,327.546 40.720,327.238 40.602 C 327.055 40.532,326.992 40.585,327.030 40.778 M42.038 40.863 C 42.166 41.248,42.663 41.437,42.836 41.167 C 43.094 40.760,43.029 40.667,42.486 40.667 C 42.166 40.667,41.997 40.741,42.038 40.863 M292.922 40.991 C 292.860 41.092,292.955 41.167,293.145 41.167 C 293.327 41.167,293.514 41.298,293.560 41.458 C 293.609 41.628,293.632 41.576,293.614 41.335 C 293.582 40.906,293.118 40.674,292.922 40.991 M310.940 41.250 C 310.873 41.423,310.951 41.500,311.192 41.500 C 311.483 41.500,311.507 41.459,311.333 41.250 C 311.219 41.112,311.106 41.000,311.081 41.000 C 311.056 41.000,310.992 41.112,310.940 41.250 M270.875 41.277 C 270.585 41.394,270.614 41.667,270.917 41.667 C 271.054 41.667,271.167 41.554,271.167 41.417 C 271.167 41.279,271.148 41.173,271.125 41.180 C 271.102 41.187,270.990 41.231,270.875 41.277 M40.667 41.490 C 40.667 41.770,40.962 41.839,41.061 41.582 C 41.119 41.431,41.060 41.333,40.911 41.333 C 40.777 41.333,40.667 41.404,40.667 41.490 M288.875 41.681 C 288.631 41.773,288.504 41.956,288.511 42.203 L 288.521 42.583 288.676 42.198 C 288.761 41.985,288.901 41.855,288.987 41.909 C 289.073 41.962,289.194 41.924,289.255 41.825 C 289.417 41.563,289.301 41.519,288.875 41.681 M326.367 41.803 C 326.397 41.955,326.558 42.106,326.725 42.138 C 326.941 42.180,327.014 42.112,326.973 41.906 C 326.942 41.746,326.781 41.595,326.615 41.571 C 326.412 41.541,326.331 41.617,326.367 41.803 M38.729 41.911 C 38.677 42.046,38.674 42.252,38.721 42.370 C 38.768 42.487,38.813 42.420,38.820 42.221 C 38.827 42.021,38.965 41.823,39.125 41.782 C 39.398 41.710,39.398 41.704,39.120 41.686 C 38.956 41.675,38.781 41.777,38.729 41.911 M39.500 42.157 C 39.500 42.346,39.575 42.500,39.667 42.500 C 39.758 42.500,39.833 42.392,39.833 42.260 C 39.833 42.128,39.758 41.973,39.667 41.917 C 39.575 41.860,39.500 41.968,39.500 42.157 M292.967 42.033 C 293.122 42.189,293.211 42.189,293.367 42.033 C 293.522 41.878,293.478 41.833,293.167 41.833 C 292.856 41.833,292.811 41.878,292.967 42.033 M344.448 42.108 C 344.271 42.285,344.313 42.801,344.515 42.926 C 344.614 42.987,344.783 42.943,344.890 42.828 C 345.041 42.663,345.020 42.640,344.792 42.720 C 344.594 42.790,344.500 42.738,344.500 42.560 C 344.500 42.389,344.592 42.333,344.764 42.399 C 344.926 42.461,345.002 42.424,344.962 42.302 C 344.881 42.059,344.602 41.953,344.448 42.108 M35.723 42.595 C 35.668 42.738,35.712 42.944,35.821 43.053 C 35.974 43.205,35.993 43.180,35.902 42.942 C 35.829 42.750,35.873 42.577,36.017 42.486 C 36.191 42.376,36.196 42.338,36.036 42.336 C 35.919 42.334,35.778 42.451,35.723 42.595 M36.615 42.450 C 36.828 42.491,37.006 42.672,37.044 42.885 C 37.103 43.222,37.119 43.226,37.245 42.942 C 37.403 42.587,37.108 42.327,36.583 42.359 C 36.285 42.377,36.289 42.386,36.615 42.450 M271.262 42.648 C 271.211 42.729,271.320 42.834,271.502 42.882 C 271.694 42.932,271.833 43.110,271.833 43.304 C 271.833 43.844,271.657 44.152,271.403 44.055 C 271.273 44.005,271.167 44.039,271.167 44.131 C 271.167 44.544,271.685 44.475,271.850 44.040 C 272.167 43.205,271.660 42.003,271.262 42.648 M144.994 42.840 C 144.801 42.963,144.827 42.995,145.119 42.997 C 145.471 43.000,145.490 43.076,145.542 44.625 L 145.597 46.250 145.632 44.645 C 145.668 42.969,145.508 42.515,144.994 42.840 M326.024 42.818 C 325.856 42.922,325.848 42.990,325.993 43.079 C 326.222 43.221,326.394 43.095,326.309 42.849 C 326.274 42.748,326.157 42.735,326.024 42.818 M26.458 42.948 C 26.111 43.039,26.071 43.428,26.396 43.552 C 26.538 43.607,26.617 43.534,26.604 43.362 C 26.586 43.123,26.835 43.070,28.333 42.991 L 30.083 42.899 28.417 42.885 C 27.500 42.878,26.619 42.906,26.458 42.948 M30.274 43.039 C 30.317 43.109,30.611 43.167,30.927 43.167 C 31.290 43.167,31.500 43.247,31.500 43.386 C 31.500 43.518,31.694 43.606,31.983 43.606 C 32.548 43.606,32.515 43.209,31.940 43.089 C 31.246 42.944,30.196 42.912,30.274 43.039 M288.372 43.500 C 288.372 43.821,288.406 43.952,288.448 43.792 C 288.490 43.631,288.490 43.369,288.448 43.208 C 288.406 43.048,288.372 43.179,288.372 43.500 M293.700 43.200 C 293.417 43.483,293.452 43.665,293.792 43.678 C 294.043 43.688,294.037 43.711,293.750 43.844 C 293.419 43.996,293.419 43.997,293.748 43.955 C 293.930 43.932,294.106 43.774,294.139 43.605 C 294.218 43.192,293.953 42.947,293.700 43.200 M56.196 44.042 C 56.171 44.713,56.116 44.833,55.833 44.833 C 55.611 44.833,55.500 44.944,55.500 45.167 C 55.500 45.656,55.980 45.575,56.179 45.051 C 56.273 44.805,56.321 44.298,56.287 43.926 L 56.225 43.250 56.196 44.042 M343.724 44.091 C 343.670 44.232,343.672 44.394,343.729 44.452 C 343.787 44.509,343.833 44.468,343.833 44.361 C 343.833 44.254,344.002 44.166,344.208 44.164 C 344.512 44.162,344.535 44.131,344.333 44.000 C 343.982 43.773,343.838 43.794,343.724 44.091 M171.307 44.081 C 171.088 44.301,171.384 45.000,171.697 45.000 C 171.953 45.000,172.011 44.903,171.969 44.543 C 171.921 44.126,171.533 43.855,171.307 44.081 M218.243 44.178 C 218.183 44.276,218.178 44.401,218.233 44.456 C 218.288 44.511,218.333 44.459,218.333 44.341 C 218.333 43.940,218.805 44.490,218.923 45.028 C 219.059 45.650,218.798 45.983,218.420 45.669 C 218.199 45.486,218.175 45.495,218.264 45.726 C 218.409 46.105,218.955 46.070,219.081 45.675 C 219.334 44.877,218.610 43.583,218.243 44.178 M288.525 45.111 C 288.468 45.932,289.033 46.362,289.221 45.643 C 289.291 45.374,289.267 45.333,289.124 45.476 C 288.826 45.774,288.695 45.704,288.619 45.208 C 288.567 44.864,288.544 44.840,288.525 45.111 M161.757 45.322 C 161.643 45.506,161.906 45.705,162.060 45.551 C 162.219 45.393,162.189 45.167,162.010 45.167 C 161.924 45.167,161.810 45.236,161.757 45.322 M343.282 45.440 C 343.105 45.617,343.327 45.825,343.588 45.725 C 343.722 45.674,343.790 45.565,343.739 45.483 C 343.631 45.308,343.433 45.289,343.282 45.440 M315.000 45.917 C 315.000 46.054,315.110 46.167,315.245 46.167 C 315.394 46.167,315.452 46.069,315.394 45.917 C 315.341 45.779,315.231 45.667,315.149 45.667 C 315.067 45.667,315.000 45.779,315.000 45.917 M323.106 45.917 C 323.048 46.069,323.106 46.167,323.255 46.167 C 323.390 46.167,323.500 46.054,323.500 45.917 C 323.500 45.779,323.433 45.667,323.351 45.667 C 323.269 45.667,323.159 45.779,323.106 45.917 M270.667 46.000 C 270.667 46.092,270.779 46.167,270.917 46.167 C 271.054 46.167,271.167 46.092,271.167 46.000 C 271.167 45.908,271.054 45.833,270.917 45.833 C 270.779 45.833,270.667 45.908,270.667 46.000 M316.241 46.348 C 316.084 46.601,316.404 46.876,316.772 46.805 C 317.271 46.709,317.271 46.167,316.772 46.167 C 316.542 46.167,316.303 46.248,316.241 46.348 M321.500 46.405 C 321.500 46.635,322.113 46.942,322.266 46.789 C 322.308 46.748,322.294 46.591,322.236 46.441 C 322.107 46.104,321.500 46.075,321.500 46.405 M294.768 46.597 C 294.625 46.969,294.636 47.000,294.917 47.000 C 295.056 47.000,295.167 46.852,295.167 46.667 C 295.167 46.269,294.911 46.225,294.768 46.597 M318.889 46.928 C 318.743 47.309,319.088 47.589,319.474 47.403 C 319.712 47.289,319.758 47.165,319.658 46.917 C 319.530 46.600,319.523 46.602,319.512 46.958 C 319.505 47.188,319.395 47.333,319.231 47.333 C 319.043 47.333,318.988 47.232,319.048 47.000 C 319.151 46.606,319.033 46.552,318.889 46.928 M342.667 47.167 C 342.667 47.491,342.751 47.667,342.907 47.667 C 343.272 47.667,343.369 47.385,343.132 47.007 C 342.833 46.527,342.667 46.584,342.667 47.167 M71.833 47.167 C 71.833 47.258,71.988 47.333,72.177 47.333 C 72.365 47.333,72.473 47.258,72.417 47.167 C 72.360 47.075,72.206 47.000,72.073 47.000 C 71.941 47.000,71.833 47.075,71.833 47.167 M170.167 47.167 C 170.167 47.258,170.054 47.333,169.917 47.333 C 169.779 47.333,169.667 47.437,169.667 47.563 C 169.667 47.689,169.554 47.886,169.417 48.000 C 169.114 48.251,169.086 48.558,169.375 48.451 C 169.490 48.409,169.565 48.291,169.542 48.188 C 169.519 48.084,169.650 48.000,169.833 48.000 C 170.056 48.000,170.167 47.889,170.167 47.667 C 170.167 47.441,170.278 47.333,170.510 47.333 C 170.699 47.333,170.807 47.258,170.750 47.167 C 170.693 47.075,170.539 47.000,170.407 47.000 C 170.275 47.000,170.167 47.075,170.167 47.167 M217.833 47.167 C 217.833 47.258,217.946 47.333,218.083 47.333 C 218.221 47.333,218.333 47.258,218.333 47.167 C 218.333 47.075,218.221 47.000,218.083 47.000 C 217.946 47.000,217.833 47.075,217.833 47.167 M56.278 47.278 C 56.217 47.339,56.167 47.569,56.167 47.790 C 56.167 48.372,56.733 48.224,56.803 47.624 C 56.853 47.186,56.561 46.994,56.278 47.278 M72.568 47.563 C 72.429 47.926,72.526 48.023,72.837 47.831 C 73.027 47.713,73.037 47.637,72.879 47.479 C 72.722 47.322,72.654 47.340,72.568 47.563 M295.245 47.674 C 295.112 47.889,295.483 48.364,295.686 48.238 C 295.767 48.188,295.833 48.001,295.833 47.823 C 295.833 47.482,295.428 47.379,295.245 47.674 M145.426 48.151 C 145.375 48.234,145.475 48.265,145.648 48.220 C 145.821 48.175,146.005 48.206,146.056 48.290 C 146.218 48.551,145.981 49.149,145.750 49.060 C 145.631 49.015,145.484 49.057,145.424 49.155 C 145.359 49.260,145.457 49.333,145.661 49.333 C 146.099 49.333,146.435 48.574,146.150 48.230 C 145.932 47.968,145.564 47.928,145.426 48.151 M212.273 48.250 C 212.210 48.415,212.279 48.500,212.477 48.500 C 212.643 48.500,212.778 48.387,212.778 48.250 C 212.778 48.112,212.686 48.000,212.573 48.000 C 212.461 48.000,212.326 48.112,212.273 48.250 M216.773 48.116 C 216.586 48.303,216.659 48.500,216.917 48.500 C 217.054 48.500,217.167 48.429,217.167 48.343 C 217.167 48.133,216.906 47.982,216.773 48.116 M287.929 48.278 C 287.792 48.636,288.045 48.887,288.441 48.785 C 288.695 48.719,288.684 48.702,288.375 48.686 C 288.169 48.675,288.000 48.592,288.000 48.500 C 288.000 48.343,288.243 48.264,288.554 48.318 C 288.630 48.331,288.644 48.265,288.586 48.171 C 288.423 47.907,288.048 47.969,287.929 48.278 M165.042 48.444 C 164.740 48.565,164.786 49.113,165.107 49.236 C 165.258 49.294,165.420 49.302,165.468 49.254 C 165.516 49.206,165.459 49.167,165.342 49.167 C 165.203 49.167,165.156 49.019,165.207 48.750 C 165.251 48.521,165.279 48.339,165.269 48.346 C 165.258 48.354,165.156 48.397,165.042 48.444 M213.200 48.533 C 213.090 48.643,213.000 48.823,213.000 48.932 C 213.000 49.147,213.492 49.397,213.635 49.254 C 213.683 49.206,213.626 49.167,213.508 49.167 C 213.370 49.167,213.323 49.019,213.374 48.750 C 213.466 48.269,213.465 48.268,213.200 48.533 M88.750 48.667 C 88.683 48.774,88.704 48.937,88.796 49.029 C 88.907 49.140,89.003 49.130,89.083 49.000 C 89.150 48.892,89.129 48.729,89.038 48.638 C 88.927 48.527,88.831 48.536,88.750 48.667 M165.783 48.843 C 165.726 49.061,165.764 49.162,165.888 49.121 C 166.128 49.041,166.253 48.500,166.032 48.500 C 165.944 48.500,165.832 48.654,165.783 48.843 M167.031 48.792 C 167.119 49.257,168.333 49.305,168.333 48.843 C 168.333 48.649,168.225 48.500,168.083 48.500 C 167.946 48.500,167.833 48.612,167.833 48.750 C 167.833 48.887,167.713 49.000,167.566 49.000 C 167.396 49.000,167.333 48.908,167.394 48.750 C 167.453 48.594,167.393 48.500,167.233 48.500 C 167.078 48.500,166.998 48.616,167.031 48.792 M194.167 48.667 C 194.167 48.758,194.275 48.833,194.407 48.833 C 194.539 48.833,194.693 48.758,194.750 48.667 C 194.807 48.575,194.699 48.500,194.510 48.500 C 194.321 48.500,194.167 48.575,194.167 48.667 M213.949 48.843 C 213.892 49.061,213.931 49.162,214.055 49.121 C 214.295 49.041,214.420 48.500,214.198 48.500 C 214.111 48.500,213.999 48.654,213.949 48.843 M215.285 48.833 C 215.333 49.017,215.431 49.167,215.504 49.167 C 215.576 49.167,215.596 49.017,215.548 48.833 C 215.500 48.650,215.402 48.500,215.329 48.500 C 215.257 48.500,215.237 48.650,215.285 48.833 M216.088 48.674 C 216.147 48.770,216.103 48.959,215.991 49.094 C 215.822 49.298,215.834 49.323,216.060 49.236 C 216.359 49.121,216.441 48.500,216.157 48.500 C 216.060 48.500,216.029 48.578,216.088 48.674 M260.033 48.700 C 259.618 49.115,259.902 49.166,262.458 49.130 L 265.083 49.093 262.692 49.042 C 260.669 48.999,260.316 48.953,260.395 48.745 C 260.509 48.449,260.309 48.424,260.033 48.700 M266.020 48.625 C 266.079 49.000,265.962 49.167,265.639 49.167 C 265.440 49.167,265.324 49.213,265.381 49.270 C 265.605 49.494,266.333 49.157,266.333 48.830 C 266.333 48.649,266.258 48.500,266.167 48.500 C 266.075 48.500,266.009 48.556,266.020 48.625 M73.538 48.865 C 73.641 49.174,74.000 49.225,74.000 48.931 C 74.000 48.785,73.881 48.667,73.736 48.667 C 73.591 48.667,73.502 48.756,73.538 48.865 M90.580 53.736 C 90.583 58.173,90.618 58.898,90.833 58.957 C 91.016 59.007,91.028 58.986,90.877 58.879 C 90.724 58.770,90.660 57.450,90.624 53.658 L 90.576 48.583 90.580 53.736 M341.500 49.125 C 341.500 49.302,341.615 49.444,341.757 49.444 C 342.056 49.444,342.016 48.977,341.708 48.875 C 341.590 48.836,341.500 48.944,341.500 49.125 M86.889 49.333 C 86.911 49.659,87.007 49.750,87.331 49.750 C 87.809 49.750,87.997 49.265,87.581 49.105 C 87.371 49.025,87.335 49.076,87.417 49.334 C 87.490 49.565,87.446 49.667,87.273 49.667 C 87.136 49.667,86.987 49.498,86.943 49.292 C 86.872 48.961,86.865 48.966,86.889 49.333 M56.765 49.309 C 56.709 49.400,56.809 49.432,57.000 49.382 C 57.399 49.277,57.477 49.764,57.080 49.887 C 56.903 49.942,56.915 49.958,57.122 49.939 C 57.499 49.905,57.515 49.273,57.141 49.201 C 56.989 49.172,56.820 49.220,56.765 49.309 M74.833 49.417 C 74.833 49.554,74.908 49.667,75.000 49.667 C 75.092 49.667,75.167 49.554,75.167 49.417 C 75.167 49.279,75.092 49.167,75.000 49.167 C 74.908 49.167,74.833 49.279,74.833 49.417 M296.538 49.698 C 296.641 50.007,297.000 50.058,297.000 49.764 C 297.000 49.619,296.881 49.500,296.736 49.500 C 296.591 49.500,296.502 49.589,296.538 49.698 M76.167 49.896 C 76.167 50.023,76.293 50.229,76.448 50.355 C 76.695 50.556,76.715 50.547,76.615 50.278 C 76.552 50.110,76.500 49.904,76.500 49.820 C 76.500 49.736,76.425 49.667,76.333 49.667 C 76.242 49.667,76.167 49.770,76.167 49.896 M76.955 49.989 C 76.905 50.178,76.928 50.333,77.006 50.333 C 77.245 50.333,77.380 49.980,77.208 49.808 C 77.101 49.701,77.013 49.764,76.955 49.989 M83.833 49.921 C 83.833 50.249,84.574 50.530,85.095 50.399 C 85.506 50.296,85.637 49.938,85.333 49.750 C 85.242 49.693,85.167 49.759,85.167 49.897 C 85.167 50.034,85.091 50.194,84.999 50.251 C 84.739 50.411,84.167 50.173,84.167 49.905 C 84.167 49.774,84.092 49.667,84.000 49.667 C 83.908 49.667,83.833 49.781,83.833 49.921 M287.437 50.118 C 287.385 50.170,287.382 50.278,287.431 50.357 C 287.548 50.546,288.000 50.542,288.000 50.351 C 288.000 50.167,287.568 49.988,287.437 50.118 M146.095 50.481 C 146.045 50.562,146.184 50.663,146.403 50.705 C 146.689 50.760,146.778 50.718,146.717 50.557 C 146.620 50.304,146.234 50.257,146.095 50.481 M195.125 50.495 C 195.531 50.669,195.548 50.721,195.391 51.305 C 195.317 51.582,195.198 51.670,194.977 51.612 C 194.806 51.568,194.667 51.599,194.667 51.682 C 194.667 52.029,195.352 51.809,195.536 51.404 C 195.767 50.898,195.557 50.440,195.065 50.375 C 194.823 50.343,194.837 50.371,195.125 50.495 M57.427 50.816 C 57.377 50.898,57.440 51.005,57.568 51.054 C 57.812 51.148,58.000 51.040,58.000 50.806 C 58.000 50.619,57.544 50.628,57.427 50.816 M340.042 51.077 C 339.655 51.464,339.548 51.833,339.824 51.833 C 339.910 51.833,340.098 51.667,340.241 51.463 C 340.383 51.259,340.501 51.165,340.503 51.255 C 340.505 51.438,340.827 50.985,340.831 50.792 C 340.836 50.552,340.414 50.704,340.042 51.077 M58.000 52.000 C 58.000 52.092,58.108 52.167,58.240 52.167 C 58.372 52.167,58.527 52.092,58.583 52.000 C 58.640 51.908,58.532 51.833,58.343 51.833 C 58.154 51.833,58.000 51.908,58.000 52.000 M146.667 52.000 C 146.667 52.092,146.775 52.167,146.907 52.167 C 147.039 52.167,147.193 52.092,147.250 52.000 C 147.307 51.908,147.199 51.833,147.010 51.833 C 146.821 51.833,146.667 51.908,146.667 52.000 M298.222 52.083 C 298.222 52.221,298.351 52.333,298.508 52.333 C 298.666 52.333,298.834 52.483,298.882 52.667 C 298.930 52.850,299.051 53.000,299.151 53.000 C 299.251 53.000,299.333 52.850,299.333 52.667 C 299.333 52.481,299.222 52.333,299.083 52.333 C 298.946 52.333,298.833 52.221,298.833 52.083 C 298.833 51.946,298.696 51.833,298.528 51.833 C 298.360 51.833,298.222 51.946,298.222 52.083 M195.583 52.841 C 195.267 52.970,195.269 52.977,195.625 52.988 C 195.831 52.995,196.000 53.070,196.000 53.155 C 196.000 53.240,195.831 53.343,195.625 53.382 L 195.250 53.455 195.630 53.477 C 196.028 53.501,196.317 53.076,196.064 52.841 C 195.983 52.766,195.767 52.766,195.583 52.841 M58.667 53.232 C 58.667 53.360,58.779 53.508,58.917 53.560 C 59.054 53.613,59.167 53.771,59.167 53.911 C 59.167 54.052,59.309 54.167,59.482 54.167 C 59.656 54.167,59.841 54.279,59.894 54.417 C 59.946 54.554,60.067 54.667,60.161 54.667 C 60.256 54.667,60.333 54.554,60.333 54.417 C 60.333 54.279,60.221 54.167,60.083 54.167 C 59.946 54.167,59.833 54.047,59.833 53.901 C 59.833 53.755,59.683 53.596,59.500 53.548 C 59.317 53.500,59.167 53.357,59.167 53.231 C 59.167 53.104,59.054 53.000,58.917 53.000 C 58.779 53.000,58.667 53.104,58.667 53.232 M285.667 53.250 C 285.667 53.387,285.777 53.500,285.911 53.500 C 286.061 53.500,286.119 53.402,286.060 53.250 C 286.008 53.112,285.897 53.000,285.816 53.000 C 285.734 53.000,285.667 53.112,285.667 53.250 M299.500 53.328 C 299.500 53.551,299.580 53.626,299.750 53.560 C 299.887 53.508,300.000 53.360,300.000 53.232 C 300.000 53.104,299.887 53.000,299.750 53.000 C 299.612 53.000,299.500 53.148,299.500 53.328 M300.106 53.917 C 300.159 54.054,300.261 54.167,300.333 54.167 C 300.405 54.167,300.508 54.054,300.560 53.917 C 300.625 53.747,300.552 53.667,300.333 53.667 C 300.115 53.667,300.041 53.747,300.106 53.917 M147.924 54.322 C 147.871 54.407,147.904 54.524,147.997 54.582 C 148.196 54.705,148.500 54.549,148.500 54.323 C 148.500 54.121,148.049 54.119,147.924 54.322 M300.612 54.403 C 300.562 54.533,300.621 54.678,300.744 54.725 C 301.007 54.826,301.167 54.699,301.167 54.389 C 301.167 54.093,300.727 54.104,300.612 54.403 M301.195 54.943 C 301.228 55.112,301.366 55.250,301.502 55.250 C 301.860 55.250,301.808 54.766,301.443 54.695 C 301.220 54.653,301.153 54.720,301.195 54.943 M336.225 54.961 C 336.168 55.180,335.999 55.333,335.814 55.333 C 335.641 55.333,335.500 55.446,335.500 55.583 C 335.500 55.722,335.648 55.833,335.833 55.833 C 336.017 55.833,336.167 55.748,336.167 55.643 C 336.167 55.539,336.298 55.356,336.458 55.238 C 336.696 55.062,336.710 54.982,336.536 54.806 C 336.361 54.628,336.305 54.657,336.225 54.961 M196.667 55.500 C 196.667 55.592,196.779 55.667,196.917 55.667 C 197.054 55.667,197.167 55.592,197.167 55.500 C 197.167 55.408,197.054 55.333,196.917 55.333 C 196.779 55.333,196.667 55.408,196.667 55.500 M301.924 55.488 C 301.810 55.673,302.073 55.872,302.227 55.718 C 302.385 55.559,302.356 55.333,302.177 55.333 C 302.090 55.333,301.977 55.403,301.924 55.488 M282.746 56.007 C 282.595 56.251,282.814 56.497,283.089 56.392 C 283.223 56.340,283.333 56.239,283.333 56.167 C 283.333 55.960,282.855 55.830,282.746 56.007 M149.000 56.167 C 149.000 56.258,149.108 56.333,149.240 56.333 C 149.372 56.333,149.527 56.258,149.583 56.167 C 149.640 56.075,149.532 56.000,149.343 56.000 C 149.154 56.000,149.000 56.075,149.000 56.167 M217.500 56.250 C 217.500 56.387,217.396 56.500,217.269 56.500 C 217.143 56.500,217.000 56.650,216.952 56.833 C 216.904 57.017,216.745 57.167,216.599 57.167 C 216.453 57.167,216.333 57.270,216.333 57.397 C 216.333 57.524,216.166 57.672,215.961 57.725 C 215.668 57.802,215.632 57.866,215.793 58.026 C 216.129 58.362,216.470 58.337,216.377 57.982 C 216.316 57.750,216.383 57.667,216.629 57.667 C 216.845 57.667,216.955 57.564,216.940 57.375 C 216.925 57.192,217.025 57.092,217.208 57.106 C 217.391 57.121,217.500 57.012,217.500 56.815 C 217.500 56.642,217.612 56.500,217.750 56.500 C 217.887 56.500,218.000 56.387,218.000 56.250 C 218.000 56.112,217.887 56.000,217.750 56.000 C 217.612 56.000,217.500 56.112,217.500 56.250 M62.071 56.813 C 62.071 57.200,62.561 57.168,62.637 56.776 C 62.672 56.599,62.580 56.500,62.381 56.500 C 62.189 56.500,62.071 56.619,62.071 56.813 M303.667 56.750 C 303.667 56.887,303.742 57.000,303.833 57.000 C 303.925 57.000,304.000 56.887,304.000 56.750 C 304.000 56.612,303.925 56.500,303.833 56.500 C 303.742 56.500,303.667 56.612,303.667 56.750 M333.833 56.854 C 333.833 57.148,333.875 57.173,334.081 57.002 C 334.332 56.793,334.279 56.500,333.990 56.500 C 333.904 56.500,333.833 56.659,333.833 56.854 M198.042 57.120 C 197.715 57.237,197.798 57.667,198.148 57.667 C 198.346 57.667,198.454 57.775,198.440 57.958 C 198.425 58.150,198.517 58.233,198.708 58.201 C 198.907 58.168,199.000 58.261,199.000 58.493 C 199.000 58.684,199.109 58.833,199.250 58.833 C 199.389 58.833,199.500 58.685,199.500 58.500 C 199.500 58.317,199.444 58.185,199.375 58.208 C 199.237 58.254,198.417 57.482,198.417 57.306 C 198.417 57.119,198.261 57.042,198.042 57.120 M171.268 57.764 C 171.121 58.146,171.148 58.287,171.317 58.020 C 171.512 57.712,171.830 57.931,171.846 58.385 C 171.854 58.586,171.899 58.653,171.946 58.535 C 172.083 58.193,171.850 57.500,171.598 57.500 C 171.472 57.500,171.323 57.619,171.268 57.764 M279.417 57.833 C 279.298 58.025,279.451 58.333,279.664 58.333 C 279.744 58.333,279.843 58.202,279.885 58.042 C 279.958 57.764,279.962 57.764,279.981 58.042 C 279.991 58.202,280.068 58.333,280.151 58.333 C 280.234 58.333,280.263 58.183,280.215 58.000 C 280.124 57.653,279.596 57.543,279.417 57.833 M168.771 58.300 C 168.610 58.559,168.969 58.931,169.179 58.721 C 169.284 58.616,169.321 58.448,169.259 58.348 C 169.127 58.135,168.887 58.111,168.771 58.300 M277.786 58.382 C 277.738 58.509,277.764 58.719,277.846 58.848 C 277.959 59.027,277.996 58.993,277.997 58.708 C 277.999 58.502,278.070 58.333,278.155 58.333 C 278.240 58.333,278.346 58.502,278.391 58.708 C 278.462 59.041,278.468 59.036,278.444 58.668 C 278.414 58.215,277.931 58.004,277.786 58.382 M330.781 58.274 C 330.718 58.337,330.669 58.508,330.672 58.653 C 330.676 58.856,330.722 58.840,330.871 58.583 C 331.060 58.260,331.070 58.263,331.192 58.667 L 331.317 59.083 331.284 58.680 C 331.250 58.272,330.992 58.064,330.781 58.274 M65.167 58.597 C 65.167 58.742,65.256 58.831,65.365 58.795 C 65.674 58.692,65.725 58.333,65.431 58.333 C 65.285 58.333,65.167 58.452,65.167 58.597 M307.273 58.582 C 307.325 58.719,307.435 58.790,307.517 58.739 C 307.753 58.594,307.691 58.333,307.422 58.333 C 307.273 58.333,307.215 58.431,307.273 58.582 M275.933 58.884 C 275.664 59.081,275.661 59.121,275.902 59.321 C 276.130 59.510,276.167 59.492,276.167 59.187 C 276.167 58.721,276.471 58.734,276.661 59.208 C 276.754 59.438,276.816 59.483,276.823 59.325 C 276.845 58.777,276.389 58.551,275.933 58.884 M66.440 59.083 C 66.381 59.236,66.439 59.333,66.589 59.333 C 66.723 59.333,66.833 59.221,66.833 59.083 C 66.833 58.946,66.766 58.833,66.684 58.833 C 66.603 58.833,66.492 58.946,66.440 59.083 M89.500 59.177 C 89.500 59.365,89.575 59.473,89.667 59.417 C 89.758 59.360,89.833 59.206,89.833 59.073 C 89.833 58.941,89.758 58.833,89.667 58.833 C 89.575 58.833,89.500 58.988,89.500 59.177 M171.895 59.080 C 171.822 59.271,171.725 59.287,171.471 59.151 C 171.171 58.991,171.159 59.007,171.332 59.331 C 171.437 59.527,171.604 59.660,171.704 59.627 C 171.886 59.566,172.227 58.833,172.073 58.833 C 172.027 58.833,171.947 58.944,171.895 59.080 M329.238 59.019 C 329.075 59.283,329.527 59.518,329.786 59.303 C 329.942 59.174,330.001 59.187,330.003 59.355 C 330.005 59.539,330.035 59.537,330.158 59.341 C 330.242 59.208,330.274 59.039,330.229 58.966 C 330.106 58.767,329.370 58.806,329.238 59.019 M67.552 59.625 C 67.495 59.785,67.411 59.985,67.365 60.067 C 67.319 60.150,67.368 60.165,67.474 60.099 C 67.580 60.034,67.667 59.872,67.667 59.740 C 67.667 59.608,67.742 59.500,67.833 59.500 C 67.925 59.500,68.000 59.665,68.000 59.867 C 68.000 60.140,68.048 60.185,68.189 60.045 C 68.433 59.801,68.254 59.333,67.917 59.333 C 67.773 59.333,67.609 59.465,67.552 59.625 M87.394 59.583 C 87.336 59.733,87.374 59.941,87.478 60.045 C 87.618 60.185,87.667 60.140,87.667 59.867 C 87.667 59.405,88.117 59.380,88.219 59.836 C 88.282 60.115,88.291 60.108,88.272 59.794 C 88.245 59.330,87.555 59.163,87.394 59.583 M153.778 59.444 C 153.610 59.613,153.645 60.000,153.828 60.000 C 153.917 60.000,153.946 59.887,153.894 59.750 C 153.833 59.592,153.896 59.500,154.066 59.500 C 154.213 59.500,154.333 59.627,154.333 59.783 C 154.333 60.009,154.375 60.025,154.540 59.860 C 154.705 59.695,154.697 59.621,154.499 59.496 C 154.205 59.310,153.932 59.290,153.778 59.444 M166.869 59.472 C 166.752 59.548,166.703 59.735,166.762 59.888 C 166.913 60.282,167.153 60.236,167.048 59.833 C 167.000 59.647,167.043 59.500,167.147 59.500 C 167.317 59.500,167.403 59.725,167.353 60.042 C 167.342 60.110,167.414 60.167,167.512 60.167 C 167.610 60.167,167.666 59.999,167.637 59.793 C 167.580 59.395,167.221 59.245,166.869 59.472 M272.389 59.595 C 272.334 59.738,272.374 59.941,272.478 60.045 C 272.618 60.185,272.667 60.143,272.667 59.881 C 272.667 59.687,272.760 59.490,272.875 59.444 C 272.998 59.394,272.961 59.354,272.786 59.346 C 272.623 59.339,272.444 59.451,272.389 59.595 M273.469 59.509 C 273.681 59.594,273.811 59.734,273.758 59.820 C 273.705 59.907,273.725 60.016,273.803 60.064 C 274.015 60.195,273.979 59.603,273.766 59.461 C 273.666 59.394,273.471 59.342,273.333 59.346 C 273.196 59.351,273.257 59.424,273.469 59.509 M200.773 59.750 C 200.826 59.887,200.928 60.000,201.000 60.000 C 201.072 60.000,201.174 59.887,201.227 59.750 C 201.292 59.581,201.219 59.500,201.000 59.500 C 200.781 59.500,200.708 59.581,200.773 59.750 M310.038 59.698 C 310.141 60.007,310.500 60.058,310.500 59.764 C 310.500 59.619,310.381 59.500,310.236 59.500 C 310.091 59.500,310.002 59.589,310.038 59.698 M327.333 59.661 C 327.333 59.749,327.483 59.902,327.667 60.000 C 327.949 60.151,328.000 60.127,328.000 59.839 C 328.000 59.611,327.891 59.500,327.667 59.500 C 327.483 59.500,327.333 59.572,327.333 59.661 M84.611 59.944 C 84.550 60.006,84.506 60.212,84.513 60.403 C 84.522 60.641,84.554 60.672,84.616 60.500 C 84.665 60.362,84.823 60.156,84.968 60.042 C 85.198 59.859,85.199 59.833,84.976 59.833 C 84.837 59.833,84.672 59.883,84.611 59.944 M165.208 59.953 C 165.094 59.994,165.005 60.190,165.011 60.389 C 165.021 60.750,165.021 60.750,165.172 60.375 C 165.255 60.169,165.365 60.000,165.417 60.000 C 165.468 60.000,165.579 60.169,165.661 60.375 C 165.763 60.629,165.816 60.662,165.823 60.479 C 165.836 60.146,165.491 59.851,165.208 59.953 M312.338 60.089 C 312.443 60.215,312.474 60.407,312.408 60.514 C 312.332 60.637,312.374 60.681,312.518 60.633 C 312.895 60.507,312.882 60.052,312.499 59.951 C 312.215 59.877,312.184 59.904,312.338 60.089 M324.875 59.944 C 324.623 60.045,324.600 60.439,324.837 60.586 C 324.931 60.644,324.998 60.630,324.984 60.554 C 324.921 60.189,325.032 60.017,325.375 59.951 C 325.689 59.890,325.696 59.877,325.417 59.869 C 325.233 59.864,324.990 59.897,324.875 59.944 M70.378 60.344 C 70.363 60.544,70.435 60.660,70.551 60.622 C 70.835 60.527,70.903 60.000,70.631 60.000 C 70.506 60.000,70.393 60.155,70.378 60.344 M155.608 60.245 C 155.557 60.379,155.586 60.534,155.674 60.588 C 155.762 60.642,155.833 60.569,155.833 60.427 C 155.833 60.284,155.916 60.167,156.018 60.167 C 156.119 60.167,156.157 60.285,156.101 60.431 C 156.037 60.598,156.076 60.669,156.208 60.625 C 156.323 60.587,156.441 60.431,156.471 60.278 C 156.540 59.920,155.745 59.890,155.608 60.245 M202.167 60.333 C 202.167 60.578,202.278 60.667,202.583 60.667 C 202.889 60.667,203.000 60.578,203.000 60.333 C 203.000 60.089,202.889 60.000,202.583 60.000 C 202.278 60.000,202.167 60.089,202.167 60.333 M211.667 60.328 C 211.667 60.545,211.748 60.625,211.906 60.564 C 212.038 60.514,212.105 60.366,212.055 60.236 C 211.922 59.889,211.667 59.949,211.667 60.328 M326.118 60.333 C 326.166 60.517,326.272 60.667,326.353 60.667 C 326.527 60.667,326.533 60.614,326.399 60.264 C 326.252 59.881,326.015 59.940,326.118 60.333 M186.896 60.578 C 186.844 60.712,186.841 60.919,186.888 61.036 C 186.935 61.154,186.980 61.073,186.987 60.856 C 186.997 60.546,187.071 60.480,187.333 60.548 C 187.517 60.596,187.667 60.567,187.667 60.484 C 187.667 60.234,186.997 60.315,186.896 60.578 M73.788 60.620 C 74.084 60.657,74.609 60.658,74.955 60.622 C 75.300 60.586,75.058 60.555,74.417 60.555 C 73.775 60.554,73.492 60.583,73.788 60.620 M81.225 60.617 C 81.580 60.672,81.680 60.764,81.623 60.984 C 81.529 61.341,81.945 61.385,82.080 61.032 C 82.209 60.697,82.129 60.646,81.389 60.591 C 81.037 60.565,80.964 60.577,81.225 60.617 M158.178 60.656 C 157.914 60.823,157.782 61.333,158.004 61.333 C 158.081 61.333,158.191 61.187,158.247 61.009 C 158.323 60.772,158.537 60.668,159.050 60.622 L 159.750 60.558 159.083 60.532 C 158.717 60.517,158.309 60.573,158.178 60.656 M170.667 60.821 C 170.667 61.011,170.698 61.167,170.736 61.167 C 170.775 61.167,170.931 61.215,171.084 61.273 C 171.304 61.358,171.351 61.296,171.306 60.983 C 171.234 60.474,170.667 60.330,170.667 60.821 M204.444 60.611 C 204.383 60.672,204.334 60.803,204.336 60.903 C 204.338 61.021,204.381 61.017,204.461 60.890 C 204.529 60.784,204.809 60.664,205.084 60.623 L 205.583 60.550 205.069 60.525 C 204.787 60.511,204.506 60.550,204.444 60.611 M207.211 60.620 C 207.464 60.658,207.839 60.657,208.044 60.617 C 208.249 60.578,208.042 60.546,207.583 60.548 C 207.125 60.549,206.957 60.581,207.211 60.620 M209.781 60.608 C 209.982 60.652,210.184 60.814,210.230 60.969 C 210.291 61.171,210.305 61.157,210.280 60.917 C 210.257 60.690,210.113 60.575,209.832 60.556 C 209.484 60.533,209.476 60.542,209.781 60.608 M314.886 60.792 C 314.829 60.952,314.759 61.127,314.732 61.181 C 314.704 61.234,314.780 61.278,314.901 61.278 C 315.030 61.278,315.089 61.155,315.044 60.982 C 314.979 60.735,315.098 60.676,315.775 60.623 L 316.583 60.560 315.786 60.530 C 315.161 60.506,314.967 60.563,314.886 60.792 M318.544 60.620 C 318.797 60.658,319.172 60.657,319.377 60.617 C 319.582 60.578,319.375 60.546,318.917 60.548 C 318.458 60.549,318.291 60.581,318.544 60.620 M321.625 60.618 C 321.831 60.657,322.169 60.657,322.375 60.618 C 322.581 60.578,322.412 60.545,322.000 60.545 C 321.587 60.545,321.419 60.578,321.625 60.618 M72.669 60.792 C 72.676 61.141,72.992 61.408,73.179 61.221 C 73.284 61.116,73.321 60.948,73.259 60.848 C 73.133 60.644,72.665 60.599,72.669 60.792 M163.620 60.882 C 163.562 61.033,163.591 61.203,163.685 61.261 C 163.926 61.410,163.977 61.301,163.842 60.929 C 163.739 60.647,163.712 60.641,163.620 60.882 M322.833 61.000 C 322.833 61.311,322.878 61.356,323.033 61.200 C 323.189 61.044,323.189 60.956,323.033 60.800 C 322.878 60.644,322.833 60.689,322.833 61.000 M187.000 61.500 C 187.000 61.592,187.169 61.666,187.375 61.664 C 187.678 61.662,187.702 61.631,187.500 61.500 C 187.177 61.291,187.000 61.291,187.000 61.500 M186.371 62.863 C 186.127 63.106,186.408 63.505,186.812 63.489 C 186.991 63.482,186.952 63.426,186.698 63.324 C 186.485 63.239,186.362 63.089,186.423 62.990 C 186.484 62.891,186.639 62.851,186.767 62.900 C 186.895 62.949,187.000 62.917,187.000 62.828 C 187.000 62.604,186.608 62.626,186.371 62.863 M151.167 64.177 C 151.167 64.365,151.242 64.473,151.333 64.417 C 151.425 64.360,151.500 64.206,151.500 64.073 C 151.500 63.941,151.425 63.833,151.333 63.833 C 151.242 63.833,151.167 63.988,151.167 64.177 M152.402 64.563 C 152.260 64.931,152.448 65.118,152.703 64.864 C 152.853 64.714,152.854 64.620,152.705 64.472 C 152.557 64.324,152.485 64.345,152.402 64.563 M167.500 64.750 C 167.500 64.887,167.575 65.000,167.667 65.000 C 167.758 65.000,167.833 64.887,167.833 64.750 C 167.833 64.612,167.758 64.500,167.667 64.500 C 167.575 64.500,167.500 64.612,167.500 64.750 M185.833 64.922 C 185.833 65.191,186.094 65.253,186.239 65.017 C 186.290 64.935,186.219 64.825,186.082 64.773 C 185.931 64.715,185.833 64.773,185.833 64.922 M154.083 65.167 C 154.017 65.274,154.037 65.437,154.129 65.529 C 154.240 65.640,154.336 65.630,154.417 65.500 C 154.483 65.392,154.463 65.229,154.371 65.138 C 154.260 65.027,154.164 65.036,154.083 65.167 M166.273 65.250 C 166.215 65.402,166.273 65.500,166.422 65.500 C 166.557 65.500,166.667 65.387,166.667 65.250 C 166.667 65.112,166.600 65.000,166.518 65.000 C 166.436 65.000,166.326 65.112,166.273 65.250 M155.941 65.747 C 155.802 66.108,156.410 66.393,156.833 66.167 C 157.187 65.978,157.293 65.500,156.982 65.500 C 156.881 65.500,156.838 65.606,156.888 65.736 C 156.938 65.866,156.865 66.016,156.726 66.070 C 156.332 66.221,156.288 66.191,156.382 65.833 C 156.484 65.443,156.087 65.365,155.941 65.747 M164.236 65.769 C 164.257 65.917,164.393 66.104,164.538 66.185 C 164.767 66.313,164.776 66.277,164.609 65.917 C 164.392 65.449,164.176 65.363,164.236 65.769 M164.949 65.824 C 164.999 66.012,165.111 66.167,165.198 66.167 C 165.420 66.167,165.295 65.626,165.055 65.546 C 164.931 65.505,164.892 65.606,164.949 65.824 M159.108 66.246 C 158.952 66.653,159.378 67.009,159.990 66.980 C 160.393 66.962,160.390 66.955,159.924 66.855 C 159.580 66.781,159.402 66.624,159.333 66.333 C 159.242 65.948,159.225 65.941,159.108 66.246 M162.005 66.292 C 162.002 66.512,161.897 66.667,161.750 66.667 C 161.612 66.667,161.500 66.742,161.500 66.833 C 161.500 67.063,161.712 67.042,162.075 66.777 C 162.320 66.598,162.343 66.491,162.195 66.235 C 162.020 65.933,162.010 65.936,162.005 66.292 M185.167 66.149 C 185.167 66.231,185.279 66.341,185.417 66.394 C 185.569 66.452,185.667 66.394,185.667 66.245 C 185.667 66.110,185.554 66.000,185.417 66.000 C 185.279 66.000,185.167 66.067,185.167 66.149 M184.000 67.816 C 184.000 68.079,184.469 68.154,184.564 67.906 C 184.625 67.748,184.545 67.667,184.328 67.667 C 184.148 67.667,184.000 67.734,184.000 67.816 M182.833 69.731 C 182.833 69.857,182.674 70.003,182.478 70.054 C 182.247 70.114,182.157 70.234,182.220 70.398 C 182.287 70.573,182.240 70.620,182.065 70.553 C 181.901 70.490,181.781 70.580,181.721 70.812 C 181.667 71.015,181.494 71.167,181.314 71.167 C 180.895 71.167,180.911 71.604,181.333 71.715 C 181.581 71.780,181.667 71.720,181.667 71.484 C 181.667 71.310,181.738 71.167,181.826 71.167 C 182.023 71.167,182.833 70.370,182.833 70.177 C 182.833 70.099,182.946 69.992,183.083 69.940 C 183.221 69.887,183.333 69.766,183.333 69.672 C 183.333 69.577,183.221 69.500,183.083 69.500 C 182.946 69.500,182.833 69.604,182.833 69.731 M180.500 72.000 C 180.500 72.092,180.612 72.167,180.750 72.167 C 180.887 72.167,181.000 72.092,181.000 72.000 C 181.000 71.908,180.887 71.833,180.750 71.833 C 180.612 71.833,180.500 71.908,180.500 72.000 " stroke="none" fill="#e4e4e4" fill-rule="evenodd"></path><path id="path3" d="M318.610 5.908 C 318.516 6.153,319.097 6.458,319.290 6.265 C 319.345 6.211,319.301 6.167,319.194 6.167 C 319.087 6.167,319.000 6.054,319.000 5.917 C 319.000 5.597,318.731 5.591,318.610 5.908 M320.440 5.917 C 320.503 6.081,320.434 6.167,320.240 6.167 C 320.077 6.167,319.989 6.211,320.043 6.265 C 320.097 6.319,320.285 6.318,320.460 6.263 C 320.816 6.150,320.898 5.667,320.561 5.667 C 320.436 5.667,320.385 5.773,320.440 5.917 M314.903 6.531 C 314.913 6.783,314.788 6.932,314.500 7.015 C 314.214 7.096,314.178 7.139,314.386 7.150 C 314.912 7.179,315.311 6.867,315.216 6.502 C 315.098 6.054,314.887 6.074,314.903 6.531 M324.444 6.278 C 324.293 6.430,324.304 7.000,324.458 7.000 C 324.527 7.000,324.583 6.813,324.583 6.583 C 324.583 6.354,324.577 6.167,324.569 6.167 C 324.562 6.167,324.506 6.217,324.444 6.278 M266.426 6.985 C 266.313 7.168,266.485 7.667,266.661 7.667 C 266.731 7.667,266.751 7.479,266.707 7.250 C 266.621 6.799,266.570 6.751,266.426 6.985 M312.013 7.111 C 312.006 7.310,311.906 7.510,311.792 7.556 C 311.628 7.622,311.630 7.643,311.797 7.654 C 312.050 7.669,312.234 7.267,312.112 6.964 C 312.065 6.846,312.020 6.912,312.013 7.111 M327.230 7.075 C 327.095 7.426,327.298 7.667,327.727 7.667 C 328.165 7.667,328.504 7.373,328.489 7.008 C 328.483 6.855,328.416 6.907,328.324 7.137 C 328.134 7.610,327.386 7.600,327.466 7.125 C 327.525 6.772,327.360 6.738,327.230 7.075 M243.708 33.533 C 243.669 58.364,243.651 59.826,243.375 59.987 C 243.215 60.080,243.168 60.159,243.271 60.162 C 243.831 60.177,243.835 59.963,243.792 33.482 L 243.749 7.250 243.708 33.533 M273.932 7.604 C 273.769 8.028,274.150 8.335,274.812 8.314 L 275.417 8.295 274.790 8.173 C 274.014 8.023,273.894 7.911,274.163 7.587 C 274.283 7.443,274.301 7.333,274.205 7.333 C 274.112 7.333,273.989 7.455,273.932 7.604 M309.919 7.694 C 309.989 7.879,309.923 7.997,309.721 8.049 C 309.460 8.117,309.457 8.131,309.698 8.147 C 310.071 8.173,310.255 7.854,310.009 7.610 C 309.860 7.463,309.839 7.483,309.919 7.694 M329.053 7.750 C 329.079 8.008,329.217 8.088,329.668 8.105 C 330.231 8.126,330.233 8.124,329.719 8.054 C 329.409 8.011,329.152 7.863,329.103 7.699 C 329.042 7.495,329.028 7.509,329.053 7.750 M40.333 7.829 C 40.333 7.918,40.090 8.061,39.792 8.147 C 39.405 8.258,39.352 8.308,39.607 8.318 C 39.803 8.327,40.140 8.186,40.357 8.006 C 40.573 7.825,40.656 7.675,40.542 7.672 C 40.427 7.669,40.333 7.740,40.333 7.829 M41.553 8.320 C 41.569 8.542,41.696 8.754,41.833 8.791 C 41.999 8.836,42.019 8.812,41.894 8.721 C 41.790 8.645,41.664 8.433,41.614 8.250 C 41.541 7.987,41.528 8.002,41.553 8.320 M276.723 8.261 C 276.577 8.641,276.888 8.870,277.438 8.788 C 277.893 8.720,277.889 8.715,277.356 8.692 C 276.882 8.671,276.808 8.615,276.882 8.333 C 276.985 7.939,276.867 7.886,276.723 8.261 M307.667 8.316 C 307.667 8.667,308.098 8.912,308.259 8.651 C 308.416 8.398,308.210 8.000,307.922 8.000 C 307.782 8.000,307.667 8.142,307.667 8.316 M331.225 8.246 C 331.277 8.381,331.192 8.566,331.035 8.657 C 330.878 8.748,330.839 8.825,330.948 8.828 C 331.161 8.834,331.387 8.548,331.439 8.208 C 331.456 8.094,331.394 8.000,331.301 8.000 C 331.207 8.000,331.173 8.111,331.225 8.246 M43.173 8.743 C 43.062 8.876,43.020 9.064,43.079 9.159 C 43.264 9.459,43.417 9.350,43.417 8.917 C 43.417 8.426,43.428 8.435,43.173 8.743 M278.764 8.774 C 278.706 8.924,278.679 9.058,278.704 9.071 C 278.729 9.084,278.900 9.203,279.083 9.336 C 279.402 9.567,279.405 9.563,279.147 9.247 C 278.998 9.065,278.911 8.823,278.952 8.708 C 279.066 8.395,278.885 8.458,278.764 8.774 M306.530 8.875 C 306.596 9.339,307.066 9.373,307.113 8.917 C 307.140 8.658,307.128 8.648,307.062 8.875 C 306.941 9.282,306.608 9.242,306.715 8.833 C 306.763 8.650,306.729 8.500,306.639 8.500 C 306.550 8.500,306.501 8.669,306.530 8.875 M331.999 8.752 C 331.841 8.941,331.831 9.065,331.963 9.196 C 332.215 9.449,332.703 9.227,332.637 8.889 C 332.562 8.503,332.259 8.438,331.999 8.752 M332.500 9.010 C 332.500 9.096,332.387 9.167,332.250 9.167 C 331.992 9.167,331.919 8.970,332.107 8.782 C 332.240 8.649,332.500 8.800,332.500 9.010 M44.933 9.294 C 45.034 9.362,45.160 9.529,45.212 9.667 C 45.275 9.834,45.311 9.792,45.320 9.542 C 45.329 9.290,45.238 9.168,45.042 9.169 C 44.862 9.171,44.820 9.219,44.933 9.294 M280.223 9.428 C 280.077 9.807,280.440 10.127,280.708 9.857 C 280.875 9.689,280.859 9.669,280.625 9.758 C 280.426 9.834,280.333 9.788,280.333 9.613 C 280.333 9.473,280.465 9.323,280.625 9.282 C 280.898 9.210,280.898 9.204,280.620 9.186 C 280.456 9.175,280.278 9.284,280.223 9.428 M305.167 9.500 C 305.167 9.683,305.092 9.833,305.000 9.833 C 304.908 9.833,304.833 9.946,304.833 10.083 C 304.833 10.406,305.076 10.400,305.589 10.064 C 306.006 9.791,306.123 9.429,305.849 9.260 C 305.766 9.208,305.737 9.316,305.785 9.500 C 305.847 9.739,305.790 9.833,305.583 9.833 C 305.377 9.833,305.319 9.739,305.382 9.500 C 305.430 9.317,305.401 9.167,305.318 9.167 C 305.235 9.167,305.167 9.317,305.167 9.500 M334.398 9.905 C 334.343 10.048,334.231 10.123,334.149 10.073 C 334.067 10.022,334.000 10.060,334.000 10.157 C 334.000 10.254,334.182 10.333,334.405 10.333 C 334.698 10.333,334.825 10.437,334.863 10.708 C 334.893 10.915,335.029 11.083,335.167 11.083 C 335.304 11.083,335.441 10.915,335.470 10.708 C 335.510 10.423,335.441 10.333,335.178 10.333 C 334.989 10.333,334.833 10.225,334.833 10.093 C 334.833 9.741,334.514 9.603,334.398 9.905 M46.523 10.042 C 46.497 10.376,46.070 10.437,45.944 10.125 C 45.897 10.010,45.854 9.996,45.846 10.094 C 45.828 10.343,46.806 11.037,47.004 10.914 C 47.261 10.755,47.196 10.332,46.930 10.435 C 46.777 10.494,46.667 10.389,46.619 10.138 C 46.573 9.894,46.537 9.858,46.523 10.042 M335.333 10.750 C 335.333 10.887,335.258 11.000,335.167 11.000 C 335.075 11.000,335.000 10.887,335.000 10.750 C 335.000 10.612,335.075 10.500,335.167 10.500 C 335.258 10.500,335.333 10.612,335.333 10.750 M47.743 11.011 C 47.683 11.109,47.678 11.234,47.733 11.289 C 47.788 11.344,47.833 11.296,47.833 11.183 C 47.833 11.050,47.965 11.015,48.208 11.083 C 48.502 11.166,48.529 11.150,48.333 11.013 C 48.014 10.790,47.880 10.790,47.743 11.011 M283.613 10.951 C 283.319 11.026,283.319 11.037,283.613 11.277 C 283.898 11.509,283.891 11.519,283.500 11.437 C 283.150 11.364,283.125 11.382,283.344 11.550 C 283.487 11.660,283.653 11.881,283.713 12.042 C 283.774 12.202,283.938 12.333,284.078 12.333 C 284.218 12.333,284.333 12.446,284.333 12.583 C 284.333 12.737,284.478 12.826,284.708 12.814 C 284.991 12.799,285.011 12.776,284.792 12.718 C 284.631 12.677,284.500 12.535,284.500 12.404 C 284.500 12.274,284.347 12.167,284.159 12.167 C 283.860 12.167,283.828 12.085,283.895 11.500 C 283.937 11.133,283.959 10.842,283.944 10.853 C 283.929 10.863,283.780 10.907,283.613 10.951 M303.170 10.972 C 302.915 11.056,302.965 11.451,303.246 11.559 C 303.381 11.610,303.549 11.556,303.621 11.437 C 303.692 11.318,303.891 11.144,304.064 11.050 C 304.375 10.880,303.646 10.817,303.170 10.972 M336.167 11.255 C 336.167 11.396,336.279 11.554,336.417 11.606 C 336.554 11.659,336.667 11.776,336.667 11.866 C 336.667 12.118,339.081 14.667,339.321 14.667 C 339.397 14.667,339.553 14.779,339.667 14.917 C 339.952 15.261,340.167 15.230,340.167 14.844 C 340.167 14.602,340.032 14.508,339.625 14.469 C 339.327 14.440,339.121 14.350,339.167 14.269 C 339.212 14.188,339.081 14.059,338.875 13.983 C 338.669 13.906,338.500 13.729,338.500 13.589 C 338.500 13.448,338.406 13.332,338.292 13.330 C 337.954 13.326,337.334 12.569,337.320 12.143 C 337.313 11.927,337.269 11.844,337.223 11.958 C 337.108 12.243,336.833 12.222,336.833 11.929 C 336.833 11.798,336.965 11.657,337.125 11.615 C 337.344 11.558,337.324 11.534,337.042 11.519 C 336.828 11.508,336.667 11.392,336.667 11.250 C 336.667 11.112,336.554 11.000,336.417 11.000 C 336.279 11.000,336.167 11.115,336.167 11.255 M47.667 11.588 C 47.667 11.831,48.317 12.081,48.375 11.860 C 48.427 11.660,48.338 11.583,48.057 11.583 C 47.842 11.583,47.667 11.585,47.667 11.588 M301.833 11.837 C 301.833 11.931,301.641 12.081,301.407 12.170 C 301.172 12.260,301.021 12.399,301.071 12.481 C 301.122 12.562,301.014 12.668,300.831 12.715 C 300.649 12.763,300.506 12.903,300.513 13.026 C 300.523 13.194,300.547 13.198,300.610 13.042 C 300.729 12.749,301.167 12.781,301.167 13.083 C 301.167 13.221,301.063 13.333,300.936 13.333 C 300.809 13.333,300.666 13.483,300.618 13.667 C 300.522 14.034,300.065 14.121,299.955 13.792 C 299.916 13.677,299.917 13.790,299.956 14.042 C 300.013 14.410,299.962 14.500,299.699 14.500 C 299.485 14.500,299.345 14.640,299.294 14.907 C 299.234 15.224,299.505 15.023,300.525 13.995 C 301.245 13.270,301.833 12.562,301.833 12.421 C 301.833 12.281,301.946 12.167,302.083 12.167 C 302.221 12.167,302.333 12.054,302.333 11.917 C 302.333 11.779,302.221 11.667,302.083 11.667 C 301.946 11.667,301.833 11.744,301.833 11.837 M49.316 12.301 C 49.452 12.555,49.446 12.657,49.292 12.708 C 49.146 12.757,49.171 12.862,49.381 13.071 C 49.543 13.233,49.786 13.323,49.921 13.271 C 50.236 13.151,50.241 12.833,49.928 12.833 C 49.797 12.833,49.666 12.670,49.637 12.471 C 49.607 12.272,49.482 12.076,49.359 12.035 C 49.182 11.977,49.173 12.034,49.316 12.301 M48.682 12.458 C 48.805 12.619,48.927 12.781,48.953 12.819 C 48.979 12.858,49.000 12.726,49.000 12.528 C 49.000 12.306,48.896 12.167,48.730 12.167 C 48.498 12.167,48.491 12.209,48.682 12.458 M50.122 13.936 C 50.067 14.226,50.144 14.477,50.353 14.686 C 50.697 15.030,50.699 15.027,50.746 14.125 C 50.785 13.363,50.262 13.205,50.122 13.936 M285.446 14.176 C 285.739 14.763,286.221 14.780,286.303 14.207 C 286.333 14.001,286.283 13.833,286.194 13.833 C 286.104 13.833,286.070 13.983,286.118 14.167 C 286.181 14.405,286.123 14.500,285.917 14.500 C 285.713 14.500,285.653 14.405,285.712 14.177 C 285.762 13.985,285.697 13.817,285.551 13.761 C 285.177 13.617,285.174 13.630,285.446 14.176 M298.813 14.490 C 298.801 14.587,298.780 14.760,298.767 14.875 C 298.753 14.990,298.629 15.076,298.490 15.066 C 298.350 15.057,298.238 15.186,298.238 15.358 C 298.238 15.543,298.357 15.667,298.536 15.667 C 298.699 15.667,298.833 15.647,298.833 15.624 C 298.833 15.600,298.903 15.339,298.988 15.043 C 299.082 14.712,299.082 14.468,298.988 14.409 C 298.903 14.357,298.824 14.393,298.813 14.490 M50.667 15.351 C 50.667 15.413,50.779 15.508,50.917 15.560 C 51.054 15.613,51.167 15.804,51.167 15.985 C 51.167 16.402,51.364 16.527,51.675 16.307 C 51.872 16.167,51.863 16.153,51.625 16.229 C 51.346 16.319,51.265 16.118,51.287 15.387 C 51.290 15.279,51.152 15.201,50.979 15.214 C 50.807 15.227,50.667 15.289,50.667 15.351 M286.169 16.054 C 286.166 16.420,286.688 16.375,286.791 16.000 C 286.851 15.778,286.839 15.778,286.679 16.000 C 286.520 16.222,286.482 16.222,286.336 16.000 C 286.197 15.788,286.171 15.796,286.169 16.054 M340.750 16.500 C 340.596 16.749,340.810 17.000,341.177 17.000 C 341.389 17.000,341.500 16.886,341.500 16.667 C 341.500 16.313,340.942 16.189,340.750 16.500 M341.333 16.667 C 341.333 16.758,341.221 16.833,341.083 16.833 C 340.946 16.833,340.833 16.758,340.833 16.667 C 340.833 16.575,340.946 16.500,341.083 16.500 C 341.221 16.500,341.333 16.575,341.333 16.667 M286.899 17.028 C 286.852 17.104,286.968 17.167,287.157 17.167 C 287.346 17.167,287.500 17.104,287.500 17.028 C 287.500 16.951,287.384 16.889,287.243 16.889 C 287.101 16.889,286.947 16.951,286.899 17.028 M297.454 16.996 C 297.606 17.166,297.611 17.283,297.472 17.450 C 297.326 17.626,297.345 17.652,297.560 17.569 C 297.911 17.434,297.906 17.263,297.542 16.987 C 297.295 16.800,297.282 16.802,297.454 16.996 M341.602 17.589 C 341.328 17.862,341.390 18.254,341.678 18.076 C 341.764 18.023,341.833 18.093,341.833 18.230 C 341.833 18.368,341.903 18.523,341.988 18.576 C 342.127 18.662,342.073 17.518,341.931 17.375 C 341.899 17.343,341.751 17.440,341.602 17.589 M261.048 17.623 C 261.578 17.657,262.403 17.656,262.881 17.623 C 263.359 17.589,262.925 17.562,261.917 17.562 C 260.908 17.563,260.517 17.590,261.048 17.623 M259.758 17.820 C 259.706 17.904,259.782 18.092,259.927 18.237 C 260.294 18.603,260.447 18.568,260.109 18.195 C 259.957 18.027,259.883 17.839,259.944 17.778 C 260.005 17.717,260.010 17.667,259.954 17.667 C 259.899 17.667,259.810 17.736,259.758 17.820 M296.426 18.422 C 296.249 18.557,296.192 18.667,296.301 18.667 C 296.411 18.667,296.500 18.779,296.500 18.917 C 296.500 19.291,296.035 19.218,295.948 18.831 C 295.885 18.549,295.876 18.556,295.894 18.871 C 295.924 19.372,296.492 19.485,296.615 19.014 C 296.665 18.823,296.772 18.667,296.853 18.667 C 296.934 18.667,297.000 18.554,297.000 18.417 C 297.000 18.106,296.843 18.107,296.426 18.422 M286.561 19.917 C 286.561 20.833,286.589 21.187,286.623 20.703 C 286.657 20.218,286.656 19.468,286.622 19.036 C 286.588 18.604,286.560 19.000,286.561 19.917 M267.851 18.986 C 267.437 19.247,267.753 19.621,268.318 19.538 C 268.747 19.475,268.833 19.518,268.833 19.795 C 268.833 20.014,268.970 20.154,269.231 20.204 C 269.580 20.271,269.541 20.190,268.917 19.557 C 268.127 18.756,268.174 18.781,267.851 18.986 M362.954 19.520 C 363.056 19.623,363.098 19.829,363.046 19.979 C 362.971 20.192,362.996 20.208,363.164 20.053 C 363.409 19.826,363.277 19.333,362.972 19.333 C 362.820 19.333,362.815 19.382,362.954 19.520 M380.389 19.595 C 380.334 19.738,380.378 19.944,380.488 20.053 C 380.641 20.205,380.660 20.180,380.569 19.942 C 380.496 19.750,380.540 19.577,380.684 19.486 C 380.858 19.376,380.863 19.338,380.703 19.336 C 380.586 19.334,380.444 19.451,380.389 19.595 M33.308 20.130 C 33.255 20.686,33.289 20.770,33.540 20.705 C 33.894 20.612,33.902 20.505,33.602 19.925 L 33.370 19.479 33.308 20.130 M52.186 20.008 C 52.164 20.488,52.440 20.839,52.825 20.822 C 53.003 20.814,52.980 20.770,52.750 20.680 C 52.567 20.609,52.369 20.333,52.311 20.067 C 52.211 19.604,52.205 19.601,52.186 20.008 M295.232 20.050 C 295.242 20.236,295.346 20.408,295.462 20.432 C 295.579 20.456,295.598 20.437,295.504 20.390 C 295.194 20.237,295.326 19.959,295.667 20.048 C 295.850 20.096,295.964 20.077,295.919 20.005 C 295.719 19.681,295.214 19.714,295.232 20.050 M321.644 20.002 C 321.938 20.127,322.014 20.261,321.945 20.526 C 321.874 20.798,321.898 20.835,322.047 20.686 C 322.302 20.432,322.006 19.933,321.565 19.875 C 321.341 19.846,321.363 19.882,321.644 20.002 M316.759 20.152 C 316.637 20.349,316.825 20.833,317.024 20.833 C 317.113 20.833,317.106 20.697,317.006 20.512 C 316.870 20.257,316.894 20.175,317.126 20.115 C 317.389 20.046,317.390 20.037,317.135 20.019 C 316.980 20.009,316.811 20.068,316.759 20.152 M318.618 20.500 C 318.564 20.708,318.613 20.833,318.750 20.833 C 318.887 20.833,318.936 20.708,318.882 20.500 C 318.834 20.317,318.774 20.167,318.750 20.167 C 318.726 20.167,318.666 20.317,318.618 20.500 M320.167 20.510 C 320.167 20.699,320.242 20.807,320.333 20.750 C 320.425 20.693,320.500 20.539,320.500 20.407 C 320.500 20.275,320.425 20.167,320.333 20.167 C 320.242 20.167,320.167 20.321,320.167 20.510 M315.610 20.613 C 315.362 20.860,315.509 21.333,315.833 21.333 C 316.017 21.333,316.167 21.230,316.167 21.104 C 316.167 20.821,315.760 20.462,315.610 20.613 M322.497 20.921 C 322.381 21.060,322.334 21.223,322.393 21.282 C 322.452 21.341,322.500 21.286,322.500 21.161 C 322.500 20.984,322.544 20.978,322.700 21.133 C 322.810 21.243,323.147 21.333,323.450 21.333 C 323.846 21.333,324.000 21.409,324.000 21.604 C 324.000 21.811,323.948 21.831,323.776 21.689 C 323.565 21.513,323.333 21.589,323.333 21.833 C 323.333 22.028,324.061 21.899,324.130 21.692 C 324.337 21.072,322.925 20.405,322.497 20.921 M343.019 20.869 C 342.996 21.209,343.593 21.588,343.750 21.334 C 343.807 21.242,343.704 21.167,343.522 21.167 C 343.340 21.167,343.157 21.035,343.115 20.875 C 343.045 20.606,343.037 20.606,343.019 20.869 M72.258 20.987 C 72.206 21.071,72.282 21.258,72.427 21.403 C 72.794 21.770,72.947 21.735,72.609 21.361 C 72.457 21.194,72.383 21.006,72.444 20.945 C 72.505 20.883,72.510 20.833,72.454 20.833 C 72.399 20.833,72.310 20.902,72.258 20.987 M165.113 21.100 C 165.169 21.247,165.111 21.440,164.983 21.530 C 164.789 21.665,164.792 21.681,165.000 21.625 C 165.284 21.548,165.449 20.833,165.183 20.833 C 165.088 20.833,165.057 20.953,165.113 21.100 M323.500 21.000 C 323.500 21.092,323.350 21.167,323.167 21.167 C 322.983 21.167,322.833 21.092,322.833 21.000 C 322.833 20.908,322.983 20.833,323.167 20.833 C 323.350 20.833,323.500 20.908,323.500 21.000 M269.432 21.309 C 269.376 21.399,269.472 21.433,269.651 21.386 C 269.863 21.330,269.999 21.405,270.059 21.610 C 270.136 21.877,270.143 21.874,270.114 21.585 C 270.077 21.233,269.599 21.039,269.432 21.309 M314.333 21.571 C 314.333 21.894,314.419 22.000,314.678 22.000 C 314.940 22.000,315.010 21.910,314.970 21.627 C 314.891 21.073,314.333 21.024,314.333 21.571 M295.227 21.632 C 295.073 21.875,295.010 21.882,294.770 21.684 C 294.528 21.483,294.506 21.488,294.597 21.726 C 294.733 22.080,295.267 22.080,295.403 21.726 C 295.548 21.347,295.442 21.290,295.227 21.632 M70.613 21.767 C 70.669 21.914,70.611 22.107,70.483 22.196 C 70.289 22.331,70.292 22.347,70.500 22.291 C 70.784 22.215,70.949 21.500,70.683 21.500 C 70.588 21.500,70.557 21.620,70.613 21.767 M81.723 21.761 C 81.591 22.105,81.885 22.385,82.274 22.285 C 82.517 22.222,82.499 22.201,82.189 22.186 C 81.880 22.171,81.813 22.094,81.882 21.833 C 81.985 21.439,81.867 21.386,81.723 21.761 M82.712 21.822 C 82.725 21.999,82.795 22.107,82.868 22.062 C 83.053 21.948,83.033 21.500,82.844 21.500 C 82.758 21.500,82.698 21.645,82.712 21.822 M122.697 21.875 C 122.763 22.339,123.233 22.373,123.280 21.917 C 123.307 21.658,123.295 21.648,123.228 21.875 C 123.108 22.282,122.775 22.242,122.882 21.833 C 122.930 21.650,122.896 21.500,122.806 21.500 C 122.717 21.500,122.667 21.669,122.697 21.875 M131.611 21.738 C 131.492 22.049,131.902 22.382,132.284 22.283 C 132.508 22.225,132.484 22.200,132.189 22.186 C 131.880 22.171,131.813 22.094,131.882 21.833 C 131.981 21.455,131.751 21.374,131.611 21.738 M156.677 21.675 C 156.671 21.817,156.757 22.023,156.867 22.133 C 157.271 22.538,158.089 22.258,157.904 21.778 C 157.765 21.415,157.531 21.420,157.560 21.785 C 157.597 22.236,157.022 22.251,156.843 21.804 C 156.751 21.575,156.683 21.522,156.677 21.675 M166.283 21.723 C 166.129 22.125,166.418 22.389,166.793 22.189 C 167.196 21.972,167.388 21.556,167.083 21.556 C 166.963 21.556,166.903 21.656,166.950 21.778 C 166.997 21.900,166.953 22.000,166.851 22.000 C 166.522 22.000,166.418 21.921,166.467 21.708 C 166.531 21.430,166.391 21.441,166.283 21.723 M343.732 21.738 C 343.681 21.869,343.665 22.150,343.695 22.363 C 343.765 22.858,344.389 22.902,344.463 22.417 C 344.510 22.104,344.499 22.102,344.280 22.375 C 343.945 22.794,343.833 22.737,343.833 22.149 C 343.833 21.762,343.895 21.655,344.078 21.725 C 344.213 21.777,344.367 21.747,344.421 21.659 C 344.475 21.572,344.363 21.500,344.171 21.500 C 343.980 21.500,343.782 21.607,343.732 21.738 M74.542 21.791 C 75.435 21.821,76.898 21.821,77.792 21.791 C 78.685 21.761,77.954 21.736,76.167 21.736 C 74.379 21.736,73.648 21.761,74.542 21.791 M126.368 21.790 C 126.982 21.822,128.032 21.822,128.701 21.791 C 129.370 21.759,128.867 21.733,127.583 21.732 C 126.300 21.732,125.753 21.758,126.368 21.790 M160.875 21.790 C 161.494 21.822,162.506 21.822,163.125 21.790 C 163.744 21.758,163.237 21.732,162.000 21.732 C 160.762 21.732,160.256 21.758,160.875 21.790 M68.782 22.274 C 68.847 22.442,68.768 22.636,68.579 22.774 C 68.409 22.898,68.344 23.000,68.435 23.000 C 68.698 23.000,69.000 22.626,69.000 22.300 C 69.000 22.135,68.927 22.000,68.839 22.000 C 68.750 22.000,68.724 22.123,68.782 22.274 M121.633 22.200 C 121.952 22.518,121.871 22.640,121.292 22.720 L 120.750 22.794 121.333 22.772 C 121.977 22.748,122.360 22.000,121.728 22.000 C 121.499 22.000,121.478 22.044,121.633 22.200 M133.506 22.243 C 133.261 22.538,133.417 22.840,133.802 22.814 C 134.056 22.797,134.055 22.787,133.792 22.718 C 133.469 22.634,133.409 22.409,133.667 22.250 C 133.758 22.193,133.833 22.231,133.833 22.333 C 133.833 22.436,133.910 22.473,134.003 22.415 C 134.185 22.302,134.069 22.000,133.844 22.000 C 133.769 22.000,133.617 22.109,133.506 22.243 M155.569 22.228 C 155.438 22.569,155.621 22.838,155.968 22.814 C 156.222 22.797,156.221 22.787,155.958 22.718 C 155.643 22.636,155.574 22.410,155.819 22.259 C 155.903 22.207,156.010 22.242,156.057 22.336 C 156.103 22.431,156.124 22.417,156.102 22.306 C 156.041 21.995,155.679 21.942,155.569 22.228 M83.574 22.348 C 83.403 22.625,83.748 22.871,84.189 22.787 C 84.555 22.717,84.551 22.710,84.130 22.689 C 83.801 22.673,83.703 22.598,83.773 22.417 C 83.884 22.128,83.741 22.079,83.574 22.348 M171.389 22.419 C 171.389 22.555,171.447 22.667,171.518 22.667 C 171.589 22.667,171.676 22.948,171.712 23.292 L 171.777 23.917 171.805 23.229 C 171.822 22.827,171.741 22.464,171.611 22.356 C 171.443 22.217,171.389 22.232,171.389 22.419 M286.680 22.286 C 286.673 22.397,286.812 22.566,286.989 22.661 C 287.392 22.877,287.500 22.878,287.500 22.667 C 287.500 22.575,287.356 22.500,287.181 22.500 C 287.005 22.500,286.823 22.406,286.777 22.292 C 286.714 22.135,286.690 22.133,286.680 22.286 M294.154 22.319 C 294.147 22.373,294.112 22.578,294.075 22.774 C 294.001 23.167,294.384 23.591,294.659 23.421 C 294.755 23.362,294.828 23.187,294.822 23.032 C 294.811 22.770,294.802 22.771,294.697 23.036 C 294.623 23.221,294.506 23.273,294.363 23.185 C 294.184 23.074,294.192 22.999,294.404 22.786 C 294.549 22.642,294.667 22.456,294.667 22.373 C 294.667 22.210,294.175 22.159,294.154 22.319 M35.080 22.505 C 35.015 22.610,35.041 22.774,35.137 22.870 C 35.361 23.094,35.883 22.899,35.792 22.625 C 35.699 22.346,35.227 22.267,35.080 22.505 M168.013 22.388 C 167.993 22.598,168.945 23.499,169.063 23.381 C 169.366 23.079,169.145 22.667,168.681 22.667 C 168.413 22.667,168.157 22.573,168.110 22.458 C 168.064 22.344,168.020 22.312,168.013 22.388 M195.079 34.417 C 195.079 41.108,195.100 43.822,195.125 40.446 C 195.150 37.071,195.150 31.596,195.125 28.279 C 195.100 24.963,195.079 27.725,195.079 34.417 M210.206 33.676 C 210.164 45.885,210.170 45.988,210.931 45.515 C 211.227 45.332,211.223 45.325,210.875 45.420 C 210.669 45.476,210.483 45.499,210.461 45.470 C 210.440 45.440,210.383 40.204,210.334 33.833 L 210.245 22.250 210.206 33.676 M35.667 22.667 C 35.667 22.758,35.554 22.833,35.417 22.833 C 35.279 22.833,35.167 22.758,35.167 22.667 C 35.167 22.575,35.279 22.500,35.417 22.500 C 35.554 22.500,35.667 22.575,35.667 22.667 M66.889 22.928 C 66.834 23.072,66.874 23.274,66.978 23.378 C 67.235 23.635,67.558 23.305,67.452 22.893 C 67.386 22.638,67.369 22.650,67.353 22.958 C 67.342 23.165,67.250 23.333,67.147 23.333 C 67.043 23.333,67.000 23.186,67.048 23.000 C 67.151 22.606,67.033 22.552,66.889 22.928 M85.278 22.904 C 85.164 23.201,85.587 23.597,85.745 23.341 C 85.804 23.245,85.732 23.167,85.583 23.167 C 85.435 23.167,85.358 23.095,85.412 23.007 C 85.466 22.920,85.633 22.895,85.783 22.952 C 85.964 23.022,86.015 22.992,85.934 22.862 C 85.768 22.592,85.388 22.617,85.278 22.904 M134.719 22.937 C 134.657 23.100,134.725 23.269,134.891 23.362 C 135.043 23.447,135.167 23.584,135.167 23.666 C 135.167 23.822,135.719 24.434,136.188 24.797 C 136.415 24.973,136.473 24.956,136.540 24.698 C 136.606 24.448,136.546 24.403,136.227 24.464 C 135.918 24.523,135.833 24.466,135.833 24.202 C 135.833 23.936,135.913 23.884,136.208 23.957 C 136.415 24.008,136.528 23.989,136.461 23.916 C 136.393 23.842,136.112 23.789,135.836 23.797 C 135.509 23.806,135.333 23.729,135.333 23.577 C 135.333 23.446,135.435 23.383,135.566 23.433 C 135.695 23.482,135.849 23.443,135.910 23.345 C 135.974 23.240,135.876 23.167,135.671 23.167 C 135.480 23.167,135.280 23.054,135.227 22.917 C 135.101 22.588,134.849 22.598,134.719 22.937 M154.387 22.933 C 154.331 23.080,154.389 23.267,154.517 23.348 C 154.826 23.543,155.000 23.538,155.000 23.333 C 155.000 23.242,154.906 23.185,154.792 23.208 C 154.677 23.231,154.594 23.119,154.606 22.958 C 154.635 22.594,154.522 22.581,154.387 22.933 M312.667 23.250 C 312.667 23.389,312.519 23.500,312.333 23.500 C 312.111 23.500,312.000 23.611,312.000 23.833 C 312.000 24.091,312.104 24.162,312.458 24.144 C 312.851 24.125,312.863 24.111,312.542 24.049 C 312.335 24.009,312.167 23.916,312.167 23.841 C 312.167 23.629,312.998 23.521,313.012 23.731 C 313.018 23.833,313.083 23.767,313.156 23.583 C 313.236 23.381,313.215 23.202,313.102 23.128 C 312.813 22.937,312.667 22.978,312.667 23.250 M65.368 23.291 C 65.217 23.343,65.264 23.462,65.523 23.687 C 65.956 24.062,66.237 24.019,66.282 23.570 C 66.309 23.304,66.300 23.299,66.228 23.542 C 66.181 23.702,66.065 23.833,65.970 23.833 C 65.875 23.833,65.838 23.727,65.888 23.597 C 65.988 23.338,65.707 23.173,65.368 23.291 M119.214 23.304 C 119.102 23.373,119.027 23.652,119.047 23.923 C 119.076 24.313,119.013 24.420,118.750 24.434 C 118.090 24.467,118.000 24.504,118.000 24.736 C 118.000 25.213,118.412 25.086,119.146 24.382 C 119.865 23.693,119.917 22.870,119.214 23.304 M153.076 23.322 C 153.139 23.423,153.268 23.457,153.363 23.398 C 153.459 23.339,153.610 23.394,153.698 23.520 C 153.830 23.709,153.847 23.706,153.791 23.500 C 153.754 23.363,153.553 23.225,153.343 23.194 C 153.099 23.159,153.004 23.204,153.076 23.322 M86.500 23.575 C 86.500 23.708,86.682 24.012,86.904 24.252 C 87.259 24.636,87.297 24.647,87.218 24.344 C 87.168 24.155,87.206 24.000,87.302 24.000 C 87.397 24.000,87.510 24.131,87.552 24.292 C 87.609 24.511,87.633 24.491,87.647 24.208 C 87.659 23.978,87.571 23.833,87.417 23.833 C 87.279 23.833,87.167 23.721,87.167 23.583 C 87.167 23.444,87.019 23.333,86.833 23.333 C 86.650 23.333,86.500 23.442,86.500 23.575 M169.857 23.500 C 169.849 23.637,170.066 23.956,170.339 24.207 C 170.613 24.458,170.760 24.575,170.668 24.465 C 170.431 24.186,170.459 24.000,170.738 24.000 C 170.869 24.000,171.003 24.131,171.036 24.292 C 171.085 24.529,171.116 24.513,171.199 24.208 C 171.293 23.867,171.245 23.833,170.663 23.833 C 170.195 23.833,170.004 23.755,169.948 23.542 C 169.895 23.337,169.868 23.324,169.857 23.500 M344.527 23.483 C 344.217 23.675,344.195 24.565,344.500 24.593 C 344.640 24.605,344.658 24.585,344.542 24.545 C 344.159 24.417,344.356 23.790,344.825 23.639 C 344.966 23.594,344.997 23.518,344.901 23.458 C 344.809 23.402,344.641 23.413,344.527 23.483 M119.667 23.667 C 119.667 23.758,119.554 23.833,119.417 23.833 C 119.279 23.833,119.167 23.758,119.167 23.667 C 119.167 23.575,119.279 23.500,119.417 23.500 C 119.554 23.500,119.667 23.575,119.667 23.667 M270.153 23.833 C 270.102 24.136,269.983 24.247,269.717 24.238 C 269.515 24.231,269.388 24.287,269.435 24.363 C 269.692 24.778,270.411 24.236,270.292 23.716 C 270.239 23.488,270.206 23.516,270.153 23.833 M286.224 23.757 C 286.107 24.061,286.131 24.088,286.645 24.247 C 286.939 24.337,287.019 24.311,286.961 24.142 C 286.917 24.018,286.759 23.939,286.608 23.966 C 286.239 24.031,286.255 23.712,286.625 23.615 C 286.898 23.543,286.898 23.537,286.620 23.519 C 286.456 23.509,286.278 23.616,286.224 23.757 M325.833 23.649 C 325.833 23.745,325.946 23.780,326.083 23.727 C 326.221 23.674,326.333 23.709,326.333 23.803 C 326.333 23.898,326.219 24.011,326.080 24.054 C 325.903 24.109,325.915 24.125,326.122 24.106 C 326.503 24.071,326.506 23.605,326.125 23.532 C 325.965 23.501,325.833 23.554,325.833 23.649 M65.000 24.186 C 65.000 24.465,64.925 24.519,64.643 24.445 C 64.387 24.379,64.337 24.403,64.465 24.531 C 64.726 24.792,65.167 24.566,65.167 24.172 C 65.167 23.986,65.129 23.833,65.083 23.833 C 65.037 23.833,65.000 23.992,65.000 24.186 M153.042 23.944 C 152.794 24.044,152.760 24.500,153.000 24.500 C 153.092 24.500,153.167 24.383,153.167 24.240 C 153.167 24.097,153.226 24.017,153.300 24.063 C 153.373 24.108,153.542 24.076,153.675 23.992 C 153.944 23.821,153.440 23.783,153.042 23.944 M53.101 24.304 C 52.977 24.505,53.178 25.167,53.363 25.167 C 53.449 25.167,53.468 25.083,53.405 24.981 C 53.342 24.879,53.394 24.722,53.520 24.632 C 53.698 24.506,53.684 24.490,53.458 24.562 C 53.129 24.668,53.053 24.407,53.375 24.277 C 53.525 24.216,53.528 24.189,53.385 24.180 C 53.276 24.173,53.148 24.229,53.101 24.304 M293.500 24.369 C 293.500 24.493,293.651 24.595,293.835 24.595 C 294.229 24.595,294.183 24.275,293.778 24.196 C 293.625 24.166,293.500 24.244,293.500 24.369 M88.639 24.445 C 88.220 24.557,88.137 24.972,88.495 25.164 C 88.936 25.400,88.944 25.394,88.944 24.833 C 88.944 24.558,88.938 24.342,88.931 24.353 C 88.923 24.363,88.792 24.405,88.639 24.445 M136.904 24.612 C 136.963 24.765,136.916 24.949,136.797 25.023 C 136.636 25.123,136.683 25.249,136.990 25.536 C 137.214 25.745,137.297 25.784,137.175 25.621 C 137.053 25.458,137.007 25.271,137.073 25.205 C 137.140 25.138,137.300 25.229,137.430 25.407 C 137.640 25.694,137.667 25.698,137.667 25.443 C 137.667 25.285,137.554 25.113,137.417 25.060 C 137.279 25.008,137.167 24.822,137.167 24.649 C 137.167 24.475,137.084 24.333,136.982 24.333 C 136.878 24.333,136.844 24.455,136.904 24.612 M63.403 24.808 C 63.336 24.959,63.297 25.205,63.315 25.354 C 63.333 25.503,63.195 25.664,63.007 25.713 C 62.820 25.762,62.667 25.922,62.667 26.068 C 62.667 26.381,62.232 26.426,62.110 26.125 C 62.054 25.985,62.022 25.980,62.013 26.109 C 62.006 26.216,61.856 26.264,61.678 26.218 C 61.418 26.150,61.373 26.201,61.447 26.484 C 61.512 26.729,61.461 26.833,61.278 26.833 C 61.134 26.833,60.957 26.935,60.883 27.059 C 60.810 27.183,60.637 27.327,60.500 27.379 C 60.301 27.454,60.310 27.476,60.542 27.487 C 60.702 27.494,60.833 27.618,60.833 27.761 C 60.833 27.949,60.727 27.996,60.458 27.929 C 60.252 27.878,60.169 27.877,60.274 27.926 C 60.379 27.976,60.425 28.168,60.376 28.355 C 60.295 28.666,60.323 28.661,60.727 28.286 C 60.969 28.062,61.167 27.812,61.167 27.730 C 61.167 27.648,61.440 27.357,61.774 27.082 C 62.955 26.113,63.500 25.541,63.500 25.272 C 63.500 25.107,63.637 25.000,63.847 25.000 C 64.038 25.000,64.165 24.913,64.130 24.806 C 64.029 24.502,63.536 24.503,63.403 24.808 M151.333 24.725 C 151.333 24.848,151.165 25.036,150.958 25.142 L 150.583 25.335 150.958 25.240 C 151.237 25.169,151.333 25.217,151.333 25.425 C 151.333 25.614,151.235 25.680,151.031 25.626 C 150.808 25.568,150.731 25.639,150.739 25.899 C 150.748 26.194,150.666 26.242,150.224 26.200 C 149.934 26.172,149.653 26.221,149.598 26.309 C 149.542 26.400,149.643 26.431,149.833 26.382 C 150.065 26.321,150.167 26.376,150.167 26.564 C 150.167 26.712,150.079 26.833,149.972 26.833 C 149.865 26.833,149.827 26.882,149.887 26.942 C 150.045 27.101,152.204 24.862,152.082 24.665 C 151.930 24.418,151.333 24.466,151.333 24.725 M152.000 24.833 C 152.000 24.925,151.887 25.000,151.750 25.000 C 151.612 25.000,151.500 24.925,151.500 24.833 C 151.500 24.742,151.612 24.667,151.750 24.667 C 151.887 24.667,152.000 24.742,152.000 24.833 M285.580 24.839 C 285.515 24.943,285.541 25.107,285.637 25.203 C 285.861 25.427,286.383 25.232,286.292 24.958 C 286.199 24.680,285.727 24.600,285.580 24.839 M326.829 24.776 C 327.136 24.929,327.008 25.309,326.625 25.382 L 326.250 25.455 326.625 25.477 C 326.831 25.490,327.000 25.573,327.000 25.661 C 327.000 25.750,327.112 25.780,327.249 25.727 C 327.407 25.667,327.559 25.775,327.665 26.024 C 327.797 26.334,327.824 26.347,327.790 26.088 C 327.766 25.906,327.598 25.681,327.415 25.588 C 327.233 25.494,327.083 25.273,327.083 25.097 C 327.083 24.922,326.988 24.758,326.871 24.735 C 326.754 24.711,326.735 24.730,326.829 24.776 M286.167 25.000 C 286.167 25.092,286.054 25.167,285.917 25.167 C 285.779 25.167,285.667 25.092,285.667 25.000 C 285.667 24.908,285.779 24.833,285.917 24.833 C 286.054 24.833,286.167 24.908,286.167 25.000 M311.895 24.947 C 312.030 25.187,311.672 25.442,311.523 25.212 C 311.460 25.116,311.290 25.171,311.106 25.348 C 310.805 25.638,310.813 25.645,311.344 25.578 C 312.043 25.489,312.312 25.239,312.009 24.958 C 311.858 24.818,311.820 24.814,311.895 24.947 M36.273 25.250 C 36.190 25.467,36.104 25.480,35.794 25.321 C 35.432 25.135,35.428 25.140,35.708 25.433 C 35.982 25.719,36.017 25.721,36.282 25.456 C 36.437 25.301,36.521 25.132,36.469 25.080 C 36.417 25.028,36.329 25.105,36.273 25.250 M89.223 25.629 C 89.078 25.720,89.089 25.835,89.264 26.075 C 89.489 26.382,89.500 26.376,89.500 25.949 C 89.500 25.454,89.499 25.453,89.223 25.629 M90.019 25.786 C 90.007 26.016,90.141 26.223,90.375 26.337 C 90.698 26.493,90.712 26.488,90.478 26.297 C 90.328 26.175,90.168 25.927,90.122 25.746 C 90.046 25.447,90.037 25.451,90.019 25.786 M116.531 26.160 C 115.860 27.068,116.252 27.352,117.033 26.524 C 117.371 26.167,117.435 26.001,117.291 25.858 C 117.014 25.581,116.936 25.612,116.531 26.160 M268.365 25.958 C 268.396 26.119,268.532 26.250,268.667 26.250 C 268.802 26.250,268.937 26.119,268.968 25.958 C 269.008 25.754,268.918 25.667,268.667 25.667 C 268.416 25.667,268.326 25.754,268.365 25.958 M267.167 26.528 C 267.167 26.726,267.188 26.858,267.214 26.819 C 267.240 26.781,267.361 26.619,267.484 26.458 C 267.675 26.209,267.669 26.167,267.437 26.167 C 267.271 26.167,267.167 26.306,267.167 26.528 M89.667 26.380 C 89.667 26.406,89.944 26.687,90.283 27.005 C 90.622 27.323,90.835 27.477,90.756 27.347 C 90.650 27.172,90.680 27.136,90.873 27.210 C 91.037 27.273,91.162 27.203,91.210 27.021 C 91.272 26.782,91.186 26.739,90.718 26.776 C 90.343 26.805,90.120 26.738,90.058 26.577 C 89.981 26.377,89.667 26.218,89.667 26.380 M137.583 26.500 C 137.444 26.726,137.632 27.000,137.927 27.000 C 138.081 27.000,138.167 27.174,138.167 27.490 C 138.167 28.048,138.436 28.298,138.723 28.009 C 138.871 27.860,138.847 27.840,138.625 27.925 C 138.393 28.013,138.333 27.946,138.333 27.601 C 138.333 27.300,138.423 27.165,138.625 27.161 C 138.903 27.156,138.903 27.146,138.625 26.935 C 138.465 26.813,138.333 26.628,138.333 26.523 C 138.333 26.289,137.725 26.270,137.583 26.500 M283.792 27.211 C 283.448 27.593,283.175 28.021,283.186 28.161 C 283.201 28.353,283.224 28.344,283.282 28.125 C 283.323 27.965,283.470 27.833,283.607 27.833 C 283.780 27.833,283.824 27.935,283.750 28.167 C 283.689 28.358,283.720 28.500,283.822 28.500 C 283.920 28.500,284.000 28.350,284.000 28.167 C 284.000 27.981,284.111 27.833,284.250 27.833 C 284.387 27.833,284.500 27.756,284.500 27.661 C 284.500 27.544,284.393 27.546,284.167 27.667 C 283.887 27.816,283.833 27.793,283.833 27.525 C 283.833 27.346,283.979 27.167,284.167 27.118 C 284.350 27.070,284.500 26.912,284.500 26.766 C 284.500 26.418,284.515 26.408,283.792 27.211 M265.543 26.777 C 265.240 26.899,265.603 27.505,265.964 27.481 C 266.228 27.463,266.227 27.455,265.958 27.385 C 265.622 27.297,265.568 26.901,265.875 26.777 C 265.990 26.731,266.008 26.693,265.917 26.693 C 265.825 26.693,265.657 26.731,265.543 26.777 M293.689 26.945 C 293.677 27.143,293.624 27.443,293.571 27.611 C 293.480 27.900,293.485 27.901,293.665 27.620 C 293.770 27.457,293.823 27.157,293.784 26.954 C 293.712 26.584,293.712 26.584,293.689 26.945 M310.235 27.228 C 310.182 27.367,310.174 27.616,310.217 27.782 C 310.268 27.979,310.301 27.925,310.314 27.625 C 310.336 27.111,310.757 26.990,310.895 27.458 C 310.962 27.687,310.974 27.679,310.947 27.419 C 310.906 27.018,310.371 26.874,310.235 27.228 M344.955 27.289 C 345.011 27.437,345.121 27.447,345.350 27.324 C 345.757 27.107,345.749 27.083,345.271 27.083 C 345.026 27.083,344.906 27.162,344.955 27.289 M327.500 27.333 C 327.500 27.444,327.633 27.480,327.820 27.421 C 328.040 27.351,328.167 27.412,328.227 27.618 C 328.298 27.862,328.308 27.856,328.280 27.583 C 328.245 27.230,327.500 26.991,327.500 27.333 M52.444 27.778 C 52.238 27.985,52.332 28.083,52.736 28.083 C 53.039 28.083,53.096 28.032,52.965 27.875 C 52.772 27.642,52.610 27.612,52.444 27.778 M148.333 28.172 C 148.333 28.368,148.216 28.505,148.042 28.513 C 147.848 28.522,147.824 28.556,147.971 28.615 C 148.092 28.663,148.333 28.551,148.505 28.366 C 148.766 28.087,148.778 28.014,148.576 27.937 C 148.414 27.875,148.333 27.953,148.333 28.172 M35.508 28.158 C 35.375 28.242,35.194 28.267,35.107 28.213 C 35.020 28.159,35.002 28.202,35.067 28.308 C 35.235 28.579,35.613 28.546,35.727 28.250 C 35.839 27.959,35.829 27.955,35.508 28.158 M59.527 28.417 C 59.312 28.643,59.175 28.923,59.222 29.039 C 59.274 29.168,59.312 29.137,59.320 28.958 C 59.327 28.798,59.417 28.667,59.519 28.667 C 59.627 28.667,59.667 28.816,59.614 29.018 C 59.525 29.359,59.530 29.360,59.819 29.059 C 60.047 28.822,60.064 28.737,59.892 28.696 C 59.724 28.656,59.711 28.562,59.840 28.321 C 60.066 27.899,59.998 27.920,59.527 28.417 M91.680 28.125 C 91.673 28.240,91.582 28.315,91.479 28.292 C 91.376 28.269,91.257 28.344,91.215 28.458 C 91.173 28.573,91.249 28.667,91.383 28.667 C 91.518 28.667,91.667 28.817,91.715 29.000 C 91.765 29.192,91.932 29.325,92.109 29.314 C 92.388 29.296,92.390 29.288,92.125 29.218 C 91.794 29.132,91.724 28.668,92.042 28.664 C 92.186 28.662,92.193 28.624,92.067 28.539 C 91.966 28.472,91.840 28.304,91.788 28.167 C 91.730 28.014,91.688 27.997,91.680 28.125 M34.604 28.757 C 34.464 29.122,34.471 29.167,34.677 29.167 C 34.774 29.167,34.807 29.092,34.750 29.000 C 34.693 28.908,34.720 28.833,34.810 28.833 C 34.899 28.833,35.015 28.927,35.067 29.042 C 35.118 29.156,35.143 29.106,35.122 28.930 C 35.072 28.518,34.738 28.406,34.604 28.757 M138.734 29.333 C 138.752 29.802,139.332 29.935,139.465 29.500 C 139.527 29.298,139.499 29.290,139.321 29.458 C 139.002 29.759,138.865 29.717,138.787 29.292 C 138.727 28.965,138.720 28.971,138.734 29.333 M281.502 29.162 C 281.383 29.385,281.153 29.500,280.827 29.500 C 280.509 29.500,280.333 29.585,280.333 29.739 C 280.333 29.888,280.127 29.999,279.793 30.031 C 279.231 30.085,278.876 30.667,279.404 30.667 C 279.549 30.667,279.667 30.554,279.667 30.417 C 279.667 30.279,279.779 30.167,279.917 30.167 C 280.054 30.167,280.168 30.260,280.169 30.375 C 280.171 30.515,280.212 30.525,280.294 30.405 C 280.362 30.306,280.553 30.175,280.719 30.114 C 280.885 30.053,280.974 29.927,280.917 29.835 C 280.860 29.742,280.893 29.667,280.990 29.667 C 281.087 29.667,281.167 29.779,281.167 29.917 C 281.167 30.054,281.272 30.167,281.401 30.167 C 281.553 30.167,281.605 30.050,281.548 29.833 C 281.488 29.602,281.543 29.500,281.731 29.500 C 281.879 29.500,282.000 29.392,282.000 29.260 C 282.000 28.861,281.695 28.801,281.502 29.162 M147.833 29.341 C 147.833 29.543,148.036 29.642,148.266 29.554 C 148.609 29.422,148.551 29.238,148.167 29.238 C 147.983 29.238,147.833 29.285,147.833 29.341 M33.286 30.004 C 33.343 30.223,33.258 30.321,32.974 30.361 C 32.759 30.392,32.583 30.528,32.583 30.664 C 32.583 31.070,33.146 31.055,33.585 30.638 C 33.982 30.262,34.129 29.847,33.875 29.821 C 33.806 29.814,33.628 29.784,33.479 29.755 C 33.288 29.718,33.231 29.792,33.286 30.004 M58.565 30.056 C 58.577 30.299,58.692 30.417,58.917 30.417 C 59.358 30.417,59.345 29.990,58.898 29.825 C 58.607 29.717,58.550 29.756,58.565 30.056 M147.229 29.912 C 147.172 30.060,147.172 30.228,147.229 30.285 C 147.287 30.342,147.333 30.264,147.333 30.111 C 147.333 29.958,147.446 29.833,147.583 29.833 C 147.865 29.833,147.925 30.260,147.662 30.390 C 147.569 30.437,147.587 30.456,147.704 30.432 C 148.025 30.367,147.959 29.763,147.624 29.698 C 147.464 29.667,147.286 29.763,147.229 29.912 M309.611 29.778 C 309.550 29.839,309.501 29.970,309.503 30.069 C 309.504 30.192,309.545 30.189,309.628 30.061 C 309.695 29.957,309.900 29.834,310.083 29.789 C 310.406 29.708,310.405 29.705,310.069 29.686 C 309.878 29.675,309.672 29.717,309.611 29.778 M59.167 30.167 C 59.167 30.258,59.054 30.333,58.917 30.333 C 58.779 30.333,58.667 30.258,58.667 30.167 C 58.667 30.075,58.779 30.000,58.917 30.000 C 59.054 30.000,59.167 30.075,59.167 30.167 M328.250 30.167 C 328.193 30.258,328.301 30.333,328.490 30.333 C 328.701 30.333,328.838 30.446,328.846 30.625 C 328.855 30.808,328.892 30.837,328.946 30.703 C 329.111 30.291,328.475 29.802,328.250 30.167 M51.768 30.430 C 51.712 30.575,51.671 30.782,51.677 30.889 C 51.683 30.996,51.755 30.916,51.838 30.711 C 51.942 30.451,52.073 30.372,52.271 30.448 C 52.463 30.521,52.516 30.494,52.434 30.362 C 52.262 30.082,51.886 30.121,51.768 30.430 M57.993 30.680 C 57.749 31.135,57.903 31.500,58.339 31.500 C 58.694 31.500,58.670 30.832,58.310 30.694 C 58.230 30.663,58.207 30.570,58.259 30.486 C 58.311 30.402,58.314 30.333,58.266 30.333 C 58.218 30.333,58.095 30.489,57.993 30.680 M278.292 30.690 C 278.406 30.806,278.500 30.960,278.500 31.033 C 278.500 31.228,278.043 31.197,277.943 30.996 C 277.896 30.902,277.875 30.913,277.896 31.022 C 277.945 31.275,278.667 31.553,278.667 31.318 C 278.667 31.224,278.749 31.198,278.850 31.260 C 278.982 31.342,278.984 31.281,278.855 31.040 C 278.756 30.856,278.543 30.655,278.380 30.593 C 278.142 30.503,278.125 30.522,278.292 30.690 M26.240 31.072 C 25.648 31.509,26.158 31.684,27.848 31.625 L 29.417 31.569 27.792 31.535 C 26.117 31.499,25.960 31.444,26.458 31.065 C 26.619 30.944,26.708 30.842,26.657 30.839 C 26.606 30.836,26.418 30.941,26.240 31.072 M31.418 31.119 C 31.522 31.502,31.438 31.548,30.333 31.722 C 30.031 31.770,30.080 31.794,30.510 31.811 C 31.318 31.842,31.783 31.499,31.515 31.069 C 31.331 30.772,31.324 30.775,31.418 31.119 M92.913 31.172 C 92.849 31.277,92.874 31.441,92.970 31.537 C 93.194 31.761,93.716 31.565,93.625 31.292 C 93.532 31.013,93.061 30.934,92.913 31.172 M77.556 31.428 C 77.501 31.572,77.537 31.770,77.635 31.869 C 77.763 31.997,77.786 31.938,77.714 31.663 C 77.632 31.348,77.666 31.297,77.899 31.387 C 78.068 31.452,78.143 31.429,78.082 31.331 C 77.930 31.085,77.669 31.133,77.556 31.428 M93.500 31.333 C 93.500 31.425,93.388 31.500,93.250 31.500 C 93.112 31.500,93.000 31.425,93.000 31.333 C 93.000 31.242,93.112 31.167,93.250 31.167 C 93.388 31.167,93.500 31.242,93.500 31.333 M147.276 31.576 C 147.222 31.718,147.058 31.833,146.912 31.833 C 146.766 31.833,146.693 31.908,146.750 32.000 C 146.807 32.092,146.921 32.167,147.004 32.167 C 147.181 32.167,147.563 31.507,147.451 31.395 C 147.409 31.353,147.330 31.435,147.276 31.576 M309.539 32.000 C 309.539 32.321,309.573 32.452,309.615 32.292 C 309.657 32.131,309.657 31.869,309.615 31.708 C 309.573 31.548,309.539 31.679,309.539 32.000 M51.278 31.778 C 51.007 32.049,51.191 32.332,51.625 32.311 C 52.037 32.290,52.044 32.280,51.696 32.214 C 51.444 32.166,51.340 32.057,51.399 31.903 C 51.497 31.647,51.454 31.602,51.278 31.778 M78.750 32.000 C 78.614 32.220,78.813 32.532,79.012 32.410 C 79.214 32.284,79.213 31.833,79.010 31.833 C 78.924 31.833,78.807 31.908,78.750 32.000 M328.875 32.417 C 328.877 32.783,328.911 32.914,328.951 32.706 C 328.991 32.499,328.990 32.199,328.948 32.040 C 328.906 31.880,328.874 32.050,328.875 32.417 M279.730 32.242 C 279.605 32.569,279.791 32.836,280.135 32.822 C 280.376 32.812,280.371 32.792,280.105 32.687 C 279.811 32.572,279.809 32.548,280.075 32.282 C 280.328 32.030,280.329 32.000,280.090 32.000 C 279.943 32.000,279.781 32.109,279.730 32.242 M57.333 32.422 C 57.333 32.749,57.801 32.933,58.035 32.698 C 58.163 32.570,58.113 32.545,57.857 32.612 C 57.661 32.664,57.500 32.627,57.500 32.532 C 57.500 32.436,57.631 32.323,57.792 32.282 C 58.011 32.224,57.991 32.201,57.708 32.186 C 57.474 32.174,57.333 32.263,57.333 32.422 M139.276 32.375 C 139.318 32.444,139.494 32.500,139.667 32.500 C 139.839 32.500,140.015 32.444,140.058 32.375 C 140.100 32.306,139.924 32.250,139.667 32.250 C 139.409 32.250,139.233 32.306,139.276 32.375 M79.167 32.839 C 79.167 32.947,79.274 32.994,79.406 32.944 C 79.544 32.891,79.682 32.972,79.730 33.134 C 79.792 33.341,79.805 33.328,79.780 33.085 C 79.744 32.735,79.167 32.503,79.167 32.839 M146.054 32.933 C 145.950 33.204,146.287 33.536,146.573 33.445 C 146.659 33.418,146.758 33.288,146.794 33.156 C 146.848 32.956,146.832 32.954,146.698 33.146 C 146.610 33.273,146.454 33.325,146.352 33.262 C 146.077 33.092,146.127 32.868,146.458 32.782 C 146.732 32.710,146.731 32.704,146.453 32.686 C 146.290 32.675,146.110 32.787,146.054 32.933 M292.667 32.942 C 292.437 33.063,292.362 33.162,292.500 33.162 C 292.787 33.162,293.279 32.883,293.162 32.787 C 293.119 32.752,292.896 32.821,292.667 32.942 M309.719 32.998 C 309.753 33.454,310.333 33.709,310.333 33.267 C 310.333 33.115,310.238 33.047,310.098 33.101 C 309.961 33.153,309.826 33.065,309.775 32.887 C 309.720 32.693,309.700 32.733,309.719 32.998 M72.389 33.095 C 72.244 33.473,72.607 33.794,72.875 33.523 C 73.042 33.355,73.026 33.336,72.792 33.425 C 72.584 33.504,72.500 33.453,72.500 33.250 C 72.500 33.060,72.587 32.998,72.759 33.064 C 72.907 33.121,72.974 33.093,72.915 32.998 C 72.763 32.752,72.503 32.799,72.389 33.095 M118.145 33.125 C 117.939 33.388,117.945 33.395,118.201 33.194 C 118.530 32.936,118.898 33.092,118.767 33.434 C 118.659 33.713,118.931 33.747,119.099 33.475 C 119.373 33.031,118.477 32.702,118.145 33.125 M120.611 33.111 C 120.449 33.273,120.475 33.667,120.647 33.667 C 120.728 33.667,120.834 33.517,120.882 33.333 C 120.967 33.006,120.830 32.893,120.611 33.111 M282.875 33.277 C 282.551 33.408,282.630 33.669,282.958 33.554 C 283.189 33.472,283.209 33.496,283.053 33.665 C 282.816 33.921,283.225 34.667,283.603 34.667 C 283.729 34.667,283.833 34.742,283.833 34.833 C 283.833 34.925,283.946 35.000,284.083 35.000 C 284.388 35.000,284.395 34.867,284.125 34.285 C 283.891 33.781,283.692 33.692,283.727 34.107 C 283.740 34.258,283.656 34.414,283.542 34.454 C 283.397 34.505,283.333 34.320,283.333 33.847 C 283.333 33.175,283.283 33.112,282.875 33.277 M328.667 33.377 C 328.667 33.523,328.535 33.677,328.375 33.718 C 328.102 33.790,328.102 33.796,328.380 33.814 C 328.682 33.834,328.961 33.405,328.771 33.215 C 328.713 33.158,328.667 33.231,328.667 33.377 M94.008 33.492 C 93.875 33.576,93.687 33.601,93.591 33.548 C 93.495 33.495,93.511 33.553,93.626 33.677 C 93.802 33.866,93.882 33.856,94.120 33.618 C 94.432 33.306,94.385 33.253,94.008 33.492 M122.442 33.708 C 122.513 33.823,122.549 34.123,122.523 34.375 C 122.485 34.736,122.544 34.833,122.803 34.833 C 123.307 34.833,123.387 34.354,122.960 33.903 C 122.562 33.483,122.225 33.356,122.442 33.708 M163.405 34.220 C 162.726 34.928,162.625 35.333,163.129 35.333 C 163.350 35.333,163.340 35.290,163.074 35.089 C 162.765 34.856,162.774 34.843,163.250 34.825 C 163.525 34.815,163.660 34.771,163.551 34.726 C 163.282 34.617,163.472 34.167,163.787 34.167 C 163.957 34.167,164.010 34.275,163.952 34.500 C 163.904 34.683,163.933 34.833,164.016 34.833 C 164.099 34.833,164.167 34.679,164.167 34.490 C 164.167 34.301,164.236 34.190,164.322 34.243 C 164.407 34.296,164.531 34.251,164.598 34.143 C 164.681 34.009,164.610 33.976,164.372 34.038 C 164.117 34.105,164.049 34.065,164.117 33.888 C 164.168 33.756,164.316 33.688,164.447 33.739 C 164.578 33.789,164.639 33.756,164.582 33.665 C 164.395 33.362,164.089 33.507,163.405 34.220 M57.421 33.987 C 57.294 34.385,57.153 34.419,56.857 34.125 C 56.689 33.958,56.669 33.974,56.758 34.208 C 56.915 34.622,57.442 34.572,57.557 34.132 C 57.682 33.657,57.565 33.533,57.421 33.987 M309.764 34.107 C 309.706 34.258,309.698 34.420,309.746 34.468 C 309.794 34.516,309.833 34.468,309.833 34.361 C 309.833 34.254,309.950 34.167,310.093 34.167 C 310.236 34.167,310.307 34.092,310.250 34.000 C 310.096 33.751,309.882 33.798,309.764 34.107 M49.803 34.486 C 49.470 34.836,49.404 35.004,49.545 35.145 C 49.902 35.502,50.132 35.333,50.195 34.667 C 50.230 34.300,50.257 34.004,50.254 34.008 C 50.252 34.012,50.049 34.228,49.803 34.486 M71.740 34.183 C 71.593 34.420,72.080 34.907,72.317 34.760 C 72.418 34.698,72.500 34.525,72.500 34.375 C 72.500 34.141,72.469 34.146,72.275 34.410 C 72.105 34.643,72.019 34.666,71.921 34.507 C 71.845 34.384,71.887 34.235,72.020 34.151 C 72.171 34.055,72.182 34.004,72.052 34.003 C 71.942 34.001,71.802 34.082,71.740 34.183 M80.293 34.583 C 80.336 34.813,80.401 35.000,80.436 35.000 C 80.471 35.000,80.500 34.813,80.500 34.583 C 80.500 34.354,80.435 34.167,80.356 34.167 C 80.277 34.167,80.249 34.354,80.293 34.583 M123.167 34.333 C 123.167 34.425,123.054 34.500,122.917 34.500 C 122.779 34.500,122.667 34.425,122.667 34.333 C 122.667 34.242,122.779 34.167,122.917 34.167 C 123.054 34.167,123.167 34.242,123.167 34.333 M146.123 34.902 C 146.187 35.236,146.118 35.367,145.811 35.497 L 145.417 35.663 145.833 35.623 C 146.277 35.581,146.513 34.946,146.201 34.635 C 146.099 34.532,146.071 34.629,146.123 34.902 M94.250 34.833 C 94.193 34.925,94.301 35.000,94.490 35.000 C 94.679 35.000,94.833 34.925,94.833 34.833 C 94.833 34.742,94.725 34.667,94.593 34.667 C 94.461 34.667,94.307 34.742,94.250 34.833 M116.413 34.839 C 116.349 34.943,116.374 35.107,116.470 35.203 C 116.694 35.427,117.216 35.232,117.125 34.958 C 117.032 34.680,116.561 34.600,116.413 34.839 M117.000 35.000 C 117.000 35.092,116.888 35.167,116.750 35.167 C 116.612 35.167,116.500 35.092,116.500 35.000 C 116.500 34.908,116.612 34.833,116.750 34.833 C 116.888 34.833,117.000 34.908,117.000 35.000 M309.539 35.333 C 309.539 35.654,309.573 35.785,309.615 35.625 C 309.657 35.465,309.657 35.202,309.615 35.042 C 309.573 34.881,309.539 35.012,309.539 35.333 M285.089 35.158 C 284.942 35.395,285.129 35.667,285.439 35.667 C 285.585 35.667,285.668 35.550,285.637 35.389 C 285.572 35.054,285.240 34.914,285.089 35.158 M123.637 35.354 C 123.875 35.673,123.730 36.167,123.399 36.167 C 123.271 36.167,123.167 36.235,123.167 36.318 C 123.167 36.401,123.310 36.431,123.485 36.386 C 123.924 36.271,124.059 35.648,123.712 35.334 C 123.463 35.108,123.455 35.110,123.637 35.354 M140.100 35.456 C 140.045 35.511,140.000 35.631,140.000 35.722 C 140.000 35.814,140.049 35.840,140.110 35.779 C 140.170 35.719,140.307 35.743,140.415 35.832 C 140.550 35.944,140.611 35.920,140.611 35.755 C 140.611 35.496,140.263 35.293,140.100 35.456 M170.720 35.600 C 170.664 35.747,170.723 35.933,170.851 36.014 C 170.979 36.095,171.002 36.163,170.903 36.164 C 170.803 36.166,170.722 36.275,170.722 36.408 C 170.722 36.590,170.797 36.609,171.028 36.485 C 171.383 36.295,171.420 35.993,171.125 35.675 C 170.955 35.492,170.971 35.470,171.217 35.557 C 171.396 35.620,171.476 35.596,171.415 35.498 C 171.257 35.242,170.834 35.304,170.720 35.600 M292.667 35.724 C 293.124 35.966,293.259 35.951,293.090 35.678 C 293.030 35.580,292.816 35.501,292.615 35.502 C 292.265 35.505,292.267 35.514,292.667 35.724 M93.853 36.260 C 93.825 36.994,94.185 37.439,94.598 37.182 C 94.895 36.997,94.892 36.991,94.547 37.085 C 94.255 37.164,94.160 37.105,94.095 36.801 C 94.050 36.590,93.981 36.267,93.942 36.083 C 93.898 35.872,93.865 35.936,93.853 36.260 M115.757 36.209 C 115.811 36.350,116.031 36.499,116.246 36.540 C 116.523 36.593,116.611 36.550,116.551 36.392 C 116.504 36.269,116.395 36.212,116.309 36.265 C 116.222 36.319,116.041 36.270,115.906 36.157 C 115.704 35.990,115.677 36.000,115.757 36.209 M139.875 36.583 C 139.877 36.950,139.911 37.080,139.951 36.873 C 139.991 36.666,139.990 36.366,139.948 36.206 C 139.906 36.047,139.874 36.217,139.875 36.583 M162.593 36.264 C 162.323 36.461,162.314 36.500,162.542 36.500 C 162.691 36.500,162.863 36.420,162.924 36.322 C 163.100 36.036,162.942 36.008,162.593 36.264 M71.050 36.443 C 70.928 36.761,71.308 37.521,71.646 37.632 C 71.772 37.674,71.708 37.542,71.505 37.338 C 71.259 37.092,71.160 36.833,71.211 36.567 C 71.298 36.107,71.206 36.036,71.050 36.443 M48.417 36.667 C 48.277 36.892,48.465 37.167,48.760 37.167 C 48.892 37.167,49.000 37.017,49.000 36.833 C 49.000 36.488,48.598 36.373,48.417 36.667 M171.333 36.656 C 171.333 36.742,171.478 36.802,171.655 36.788 C 171.832 36.775,171.940 36.705,171.895 36.632 C 171.781 36.447,171.333 36.467,171.333 36.656 M79.958 36.829 C 80.252 37.163,80.217 37.462,79.875 37.552 C 79.629 37.616,79.626 37.631,79.855 37.647 C 80.375 37.684,80.534 37.247,80.124 36.905 C 79.918 36.733,79.844 36.699,79.958 36.829 M286.261 36.794 C 286.066 36.989,286.180 37.330,286.585 37.768 C 286.815 38.016,287.053 38.170,287.113 38.109 C 287.173 38.049,287.129 38.000,287.015 38.000 C 286.877 38.000,286.826 37.795,286.862 37.393 C 286.914 36.819,286.575 36.481,286.261 36.794 M286.739 37.184 C 286.594 37.419,286.333 37.358,286.333 37.089 C 286.333 36.940,286.431 36.881,286.582 36.939 C 286.719 36.992,286.790 37.102,286.739 37.184 M309.500 37.089 C 309.500 37.229,309.616 37.388,309.757 37.442 C 310.134 37.587,310.154 37.457,309.806 37.125 C 309.547 36.878,309.500 36.873,309.500 37.089 M145.083 37.280 C 145.267 37.331,145.479 37.457,145.554 37.561 C 145.645 37.686,145.669 37.665,145.625 37.500 C 145.588 37.362,145.376 37.236,145.154 37.219 C 144.835 37.195,144.820 37.208,145.083 37.280 M345.623 37.959 C 345.715 38.200,346.029 38.162,346.117 37.900 C 346.146 37.811,346.028 37.738,345.854 37.738 C 345.660 37.738,345.571 37.823,345.623 37.959 M124.125 38.005 L 124.500 38.156 124.500 49.068 C 124.500 55.831,124.561 60.018,124.659 60.079 C 124.747 60.133,124.776 60.289,124.724 60.425 C 124.640 60.642,125.583 60.671,132.330 60.663 C 139.016 60.655,140.019 60.622,139.937 60.410 C 139.886 60.276,139.929 60.167,140.033 60.167 C 140.137 60.167,140.182 60.126,140.132 60.077 C 140.083 60.028,136.583 59.991,132.355 59.997 L 124.667 60.006 124.667 49.120 C 124.667 37.864,124.664 37.817,124.008 37.844 C 123.850 37.850,123.895 37.913,124.125 38.005 M55.991 38.158 C 56.124 38.241,56.282 38.672,56.344 39.113 C 56.451 39.882,56.456 39.889,56.478 39.281 C 56.502 38.577,56.265 37.999,55.952 38.003 C 55.821 38.004,55.834 38.058,55.991 38.158 M260.208 38.110 C 259.975 38.204,259.925 38.767,260.137 38.899 C 260.213 38.945,260.269 38.818,260.262 38.617 C 260.250 38.258,260.305 38.248,262.833 38.160 L 265.417 38.070 262.917 38.048 C 261.542 38.036,260.323 38.064,260.208 38.110 M45.844 38.480 C 45.641 38.859,45.829 39.055,46.243 38.896 C 46.545 38.780,46.529 38.315,46.220 38.212 C 46.111 38.176,45.942 38.296,45.844 38.480 M145.699 39.111 C 145.681 39.677,145.624 40.277,145.571 40.445 C 145.481 40.729,145.487 40.730,145.662 40.459 C 145.769 40.293,145.824 39.718,145.790 39.126 L 145.731 38.083 145.699 39.111 M265.631 38.308 C 265.758 38.389,265.799 38.572,265.731 38.763 C 265.641 39.017,265.662 39.043,265.831 38.886 C 266.079 38.657,265.942 38.165,265.630 38.169 C 265.457 38.171,265.457 38.197,265.631 38.308 M287.388 38.764 C 287.334 38.906,287.378 39.111,287.488 39.220 C 287.641 39.372,287.661 39.350,287.575 39.125 C 287.451 38.797,287.758 38.716,287.890 39.042 C 287.943 39.173,287.979 39.149,287.987 38.976 C 288.005 38.607,287.515 38.434,287.388 38.764 M268.199 38.875 C 268.343 38.990,268.502 39.196,268.551 39.333 C 268.611 39.501,268.645 39.466,268.654 39.226 C 268.661 39.030,268.548 38.823,268.403 38.768 C 267.989 38.609,267.913 38.648,268.199 38.875 M292.625 38.948 C 292.465 38.990,292.333 39.094,292.333 39.179 C 292.333 39.414,292.601 39.363,292.833 39.083 C 292.947 38.946,293.013 38.842,292.979 38.853 C 292.945 38.863,292.785 38.906,292.625 38.948 M328.180 39.375 C 328.164 39.715,327.983 39.750,327.700 39.467 C 327.544 39.311,327.500 39.312,327.500 39.472 C 327.500 39.755,327.984 39.916,328.197 39.703 C 328.292 39.608,328.331 39.429,328.282 39.306 C 328.222 39.156,328.189 39.178,328.180 39.375 M44.167 39.785 C 44.167 39.913,43.962 40.000,43.661 40.000 C 43.366 40.000,43.116 40.104,43.060 40.250 C 43.008 40.387,42.804 40.507,42.607 40.517 C 42.288 40.531,42.294 40.546,42.667 40.651 C 43.330 40.838,43.887 40.683,43.636 40.380 C 43.467 40.176,43.488 40.142,43.758 40.182 C 44.235 40.253,44.833 40.012,44.833 39.749 C 44.833 39.623,44.683 39.532,44.500 39.546 C 44.317 39.560,44.167 39.667,44.167 39.785 M161.090 39.656 C 161.024 39.763,161.089 39.789,161.258 39.724 C 161.413 39.665,161.605 39.720,161.696 39.851 C 161.831 40.044,161.847 40.041,161.791 39.833 C 161.708 39.532,161.240 39.413,161.090 39.656 M160.895 41.667 C 160.895 42.629,160.923 43.023,160.956 42.542 C 160.990 42.060,160.990 41.273,160.956 40.792 C 160.923 40.310,160.895 40.704,160.895 41.667 M172.544 40.667 C 172.575 41.000,172.510 41.081,172.217 41.071 C 172.015 41.064,171.888 41.120,171.935 41.196 C 172.224 41.664,172.963 41.026,172.682 40.550 C 172.526 40.286,172.509 40.301,172.544 40.667 M327.329 40.610 C 327.544 40.716,327.554 41.167,327.342 41.167 C 327.255 41.167,327.110 41.036,327.021 40.877 C 326.905 40.669,326.880 40.817,326.935 41.398 C 327.005 42.147,326.985 42.202,326.672 42.120 C 326.270 42.015,326.198 42.413,326.593 42.564 C 326.776 42.634,326.923 42.493,327.095 42.082 C 327.228 41.762,327.417 41.500,327.513 41.500 C 327.762 41.500,327.628 40.618,327.371 40.567 C 327.254 40.544,327.235 40.563,327.329 40.610 M41.833 40.875 C 41.833 41.025,41.913 41.196,42.011 41.257 C 42.297 41.434,42.325 41.275,42.070 40.926 C 41.872 40.656,41.833 40.647,41.833 40.875 M344.875 40.833 C 344.952 41.117,345.667 41.283,345.667 41.017 C 345.667 40.922,345.547 40.890,345.400 40.946 C 345.253 41.002,345.060 40.944,344.970 40.816 C 344.835 40.622,344.819 40.625,344.875 40.833 M310.910 41.011 C 310.849 41.109,310.845 41.234,310.900 41.289 C 310.955 41.344,311.000 41.292,311.000 41.174 C 311.000 41.002,311.050 41.000,311.250 41.167 C 311.455 41.337,311.500 41.325,311.500 41.104 C 311.500 40.802,311.080 40.736,310.910 41.011 M40.599 41.309 C 40.542 41.400,40.643 41.431,40.836 41.381 C 41.094 41.313,41.148 41.356,41.068 41.563 C 41.009 41.718,41.048 41.833,41.161 41.833 C 41.269 41.833,41.333 41.703,41.302 41.544 C 41.240 41.221,40.753 41.059,40.599 41.309 M270.574 41.348 C 270.417 41.603,270.759 41.898,271.072 41.777 C 271.216 41.722,271.325 41.544,271.314 41.380 C 271.296 41.102,271.290 41.102,271.218 41.375 C 271.177 41.535,271.035 41.667,270.904 41.667 C 270.611 41.667,270.591 41.392,270.875 41.277 C 271.025 41.216,271.028 41.189,270.885 41.180 C 270.776 41.173,270.636 41.248,270.574 41.348 M293.542 41.708 C 293.362 42.198,293.367 42.219,293.588 41.926 C 293.800 41.647,293.925 41.167,293.787 41.167 C 293.761 41.167,293.651 41.410,293.542 41.708 M38.542 41.777 C 38.302 41.874,38.263 42.270,38.481 42.405 C 38.562 42.455,38.664 42.309,38.708 42.081 C 38.751 41.853,38.779 41.673,38.769 41.680 C 38.758 41.687,38.656 41.731,38.542 41.777 M39.542 41.847 C 39.702 41.940,39.839 42.144,39.846 42.300 C 39.855 42.482,39.890 42.507,39.946 42.369 C 40.045 42.121,39.713 41.664,39.438 41.672 C 39.335 41.675,39.381 41.753,39.542 41.847 M344.232 42.262 C 344.173 42.498,344.193 42.760,344.277 42.844 C 344.369 42.936,344.427 42.816,344.423 42.540 C 344.418 42.206,344.495 42.089,344.707 42.106 C 344.866 42.119,344.955 42.062,344.905 41.981 C 344.721 41.684,344.337 41.845,344.232 42.262 M35.609 42.377 C 35.360 42.559,35.352 42.629,35.552 42.902 C 35.770 43.201,35.781 43.197,35.766 42.816 C 35.754 42.518,35.849 42.403,36.142 42.361 C 36.725 42.279,37.333 42.474,37.333 42.743 C 37.333 42.874,37.407 43.026,37.498 43.082 C 37.758 43.243,37.487 42.610,37.195 42.375 C 36.861 42.106,35.978 42.107,35.609 42.377 M311.422 42.324 C 311.281 42.553,311.459 42.833,311.746 42.833 C 311.870 42.833,312.035 43.018,312.111 43.245 C 312.216 43.555,312.311 43.618,312.499 43.501 C 312.717 43.366,312.714 43.320,312.472 43.132 C 312.319 43.013,312.169 42.768,312.137 42.585 C 312.074 42.221,311.594 42.046,311.422 42.324 M271.265 42.475 C 271.209 42.566,271.305 42.599,271.485 42.552 C 271.697 42.497,271.833 42.571,271.892 42.776 C 271.969 43.044,271.976 43.041,271.947 42.752 C 271.911 42.400,271.432 42.206,271.265 42.475 M56.385 43.583 C 56.386 44.133,56.417 44.338,56.454 44.039 C 56.491 43.739,56.490 43.289,56.452 43.039 C 56.414 42.788,56.384 43.033,56.385 43.583 M145.467 42.867 C 145.583 42.983,145.680 43.630,145.699 44.408 L 145.732 45.750 145.791 44.587 C 145.858 43.277,145.754 42.667,145.463 42.667 C 145.314 42.667,145.315 42.715,145.467 42.867 M326.333 42.917 C 326.333 43.221,326.145 43.237,325.833 42.958 C 325.634 42.781,325.632 42.794,325.820 43.042 C 326.117 43.435,326.500 43.411,326.500 43.000 C 326.500 42.817,326.462 42.667,326.417 42.667 C 326.371 42.667,326.333 42.779,326.333 42.917 M26.063 43.075 C 25.950 43.372,26.116 43.671,26.385 43.654 C 26.528 43.644,26.525 43.617,26.375 43.556 C 26.068 43.432,26.122 43.036,26.458 42.948 C 26.732 42.877,26.731 42.871,26.453 42.853 C 26.290 42.842,26.114 42.942,26.063 43.075 M30.625 42.951 C 30.831 42.991,31.169 42.991,31.375 42.951 C 31.581 42.911,31.412 42.879,31.000 42.879 C 30.587 42.879,30.419 42.911,30.625 42.951 M293.611 42.944 C 293.400 43.156,293.500 43.374,293.724 43.189 C 293.847 43.086,294.009 43.058,294.084 43.126 C 294.159 43.194,294.166 43.156,294.100 43.042 C 293.968 42.811,293.781 42.774,293.611 42.944 M32.146 43.151 C 32.273 43.231,32.323 43.381,32.259 43.485 C 32.117 43.715,32.532 43.655,32.700 43.421 C 32.832 43.236,32.537 43.005,32.167 43.005 C 31.960 43.005,31.956 43.030,32.146 43.151 M343.776 43.792 C 343.733 43.860,343.878 43.927,344.098 43.941 C 344.318 43.954,344.456 43.898,344.406 43.816 C 344.294 43.635,343.882 43.619,343.776 43.792 M171.708 44.013 C 172.043 44.208,172.102 44.941,171.792 45.045 C 171.671 45.086,171.689 45.108,171.833 45.098 C 172.367 45.060,172.143 43.824,171.605 43.838 C 171.501 43.841,171.548 43.920,171.708 44.013 M271.795 44.130 C 271.724 44.400,271.614 44.474,271.390 44.402 C 271.137 44.319,271.127 44.333,271.333 44.478 C 271.631 44.688,272.083 44.331,271.965 43.979 C 271.921 43.847,271.853 43.907,271.795 44.130 M312.667 44.085 C 312.667 44.421,313.452 45.216,313.658 45.089 C 313.943 44.912,313.875 44.282,313.583 44.394 C 313.368 44.476,313.271 44.338,313.302 43.993 C 313.307 43.943,313.165 43.892,312.988 43.878 C 312.811 43.865,312.667 43.958,312.667 44.085 M288.381 44.750 C 288.382 45.208,288.415 45.376,288.453 45.123 C 288.491 44.869,288.490 44.494,288.451 44.289 C 288.411 44.084,288.380 44.292,288.381 44.750 M294.154 44.696 C 294.003 45.356,294.284 46.105,294.575 45.814 C 294.808 45.580,294.722 44.756,294.458 44.702 C 294.298 44.669,294.161 44.666,294.154 44.696 M56.167 45.089 C 56.167 45.229,56.004 45.404,55.805 45.478 C 55.586 45.559,55.515 45.656,55.625 45.724 C 55.843 45.859,56.333 45.407,56.333 45.071 C 56.333 44.940,56.296 44.833,56.250 44.833 C 56.204 44.833,56.167 44.948,56.167 45.089 M161.757 45.156 C 161.690 45.263,161.757 45.288,161.931 45.222 C 162.128 45.146,162.187 45.183,162.127 45.348 C 162.080 45.478,161.952 45.563,161.842 45.538 C 161.732 45.512,161.687 45.565,161.743 45.655 C 161.895 45.901,162.357 45.663,162.300 45.368 C 162.238 45.052,161.902 44.920,161.757 45.156 M314.897 45.742 C 314.783 46.038,314.950 46.338,315.218 46.320 C 315.361 46.311,315.359 46.284,315.208 46.223 C 314.969 46.126,314.923 45.667,315.153 45.667 C 315.237 45.667,315.343 45.760,315.390 45.875 C 315.440 45.999,315.479 45.966,315.487 45.792 C 315.503 45.440,315.028 45.400,314.897 45.742 M219.000 45.806 C 219.000 45.913,218.831 46.009,218.625 46.019 C 218.316 46.035,218.305 46.053,218.559 46.118 C 218.892 46.204,219.302 45.913,219.114 45.725 C 219.051 45.662,219.000 45.699,219.000 45.806 M270.599 45.809 C 270.542 45.900,270.643 45.932,270.833 45.882 C 271.218 45.781,271.294 46.103,270.913 46.221 C 270.736 46.276,270.749 46.291,270.955 46.272 C 271.117 46.258,271.250 46.135,271.250 46.000 C 271.250 45.717,270.747 45.569,270.599 45.809 M288.516 45.750 C 288.510 45.842,288.560 45.992,288.628 46.083 C 288.796 46.313,289.167 46.370,289.167 46.167 C 289.167 46.075,289.060 46.000,288.931 46.000 C 288.801 46.000,288.657 45.906,288.610 45.792 C 288.564 45.677,288.522 45.658,288.516 45.750 M294.781 45.941 C 294.718 46.004,294.673 46.212,294.680 46.403 C 294.687 46.594,294.731 46.656,294.777 46.542 C 294.931 46.161,295.207 46.326,295.126 46.750 C 295.082 46.979,295.119 47.167,295.208 47.167 C 295.296 47.167,295.329 47.271,295.280 47.398 C 295.217 47.562,295.288 47.604,295.527 47.541 C 295.800 47.470,295.857 47.528,295.830 47.852 C 295.747 48.834,296.029 49.151,296.490 48.595 C 296.649 48.404,296.619 48.320,296.344 48.172 C 296.155 48.071,296.000 47.834,296.000 47.645 C 296.000 47.445,295.864 47.267,295.676 47.217 C 295.445 47.157,295.337 46.961,295.301 46.537 C 295.252 45.965,295.022 45.701,294.781 45.941 M145.500 46.306 C 145.500 46.413,145.331 46.509,145.125 46.519 C 144.816 46.535,144.805 46.553,145.059 46.618 C 145.392 46.704,145.802 46.413,145.614 46.225 C 145.551 46.162,145.500 46.199,145.500 46.306 M162.389 46.579 C 162.389 46.719,162.495 46.833,162.625 46.833 C 162.755 46.833,162.831 46.744,162.795 46.635 C 162.694 46.333,162.389 46.291,162.389 46.579 M342.611 46.611 C 342.550 46.672,342.500 46.935,342.500 47.194 C 342.500 47.514,342.415 47.667,342.236 47.667 C 341.895 47.667,342.025 48.067,342.389 48.137 C 342.616 48.181,342.667 48.051,342.667 47.429 C 342.667 46.668,342.870 46.422,343.069 46.941 C 343.127 47.091,343.212 47.177,343.258 47.131 C 343.304 47.085,343.294 46.924,343.236 46.774 C 343.129 46.494,342.811 46.411,342.611 46.611 M211.009 46.983 C 210.878 47.229,210.901 47.324,211.114 47.405 C 211.462 47.539,211.742 47.270,211.611 46.928 C 211.475 46.575,211.215 46.599,211.009 46.983 M318.726 46.919 C 318.618 47.202,318.936 47.667,319.239 47.667 C 319.690 47.667,320.097 47.202,319.850 46.970 C 319.656 46.786,319.634 46.796,319.717 47.033 C 319.783 47.222,319.709 47.350,319.493 47.419 C 319.056 47.558,318.787 47.363,318.887 46.981 C 318.985 46.606,318.864 46.559,318.726 46.919 M170.500 47.039 C 170.916 47.224,170.916 47.225,170.542 47.290 C 170.311 47.331,170.167 47.476,170.167 47.666 C 170.167 47.953,170.196 47.949,170.571 47.615 C 171.003 47.230,170.889 46.823,170.355 46.844 C 170.181 46.851,170.234 46.921,170.500 47.039 M217.719 47.152 C 217.669 47.343,217.557 47.500,217.471 47.500 C 217.384 47.500,217.365 47.583,217.428 47.684 C 217.501 47.802,217.579 47.809,217.646 47.704 C 217.703 47.613,217.900 47.510,218.083 47.475 C 218.500 47.396,218.522 46.942,218.113 46.863 C 217.917 46.825,217.778 46.927,217.719 47.152 M56.265 47.142 C 56.209 47.233,56.309 47.265,56.500 47.215 C 56.893 47.112,56.979 47.770,56.625 48.167 C 56.447 48.367,56.460 48.367,56.717 48.173 C 57.086 47.893,57.034 47.108,56.641 47.034 C 56.489 47.005,56.320 47.054,56.265 47.142 M218.333 47.167 C 218.333 47.258,218.221 47.333,218.083 47.333 C 217.946 47.333,217.833 47.258,217.833 47.167 C 217.833 47.075,217.946 47.000,218.083 47.000 C 218.221 47.000,218.333 47.075,218.333 47.167 M71.923 47.442 C 72.092 47.565,72.281 47.748,72.342 47.847 C 72.409 47.955,72.489 47.895,72.540 47.697 C 72.610 47.429,72.529 47.351,72.121 47.291 C 71.662 47.224,71.644 47.238,71.923 47.442 M162.892 47.587 C 162.751 47.955,163.528 48.691,163.841 48.486 C 164.048 48.350,164.041 48.295,163.792 48.103 C 163.631 47.981,163.500 47.757,163.500 47.607 C 163.500 47.262,163.023 47.247,162.892 47.587 M268.908 47.515 C 268.846 47.614,268.890 47.783,269.006 47.890 C 269.170 48.041,269.192 48.017,269.108 47.778 C 269.035 47.572,269.068 47.497,269.208 47.549 C 269.323 47.591,269.396 47.715,269.371 47.825 C 269.346 47.935,269.399 47.979,269.489 47.924 C 269.709 47.787,269.520 47.333,269.242 47.333 C 269.120 47.333,268.969 47.415,268.908 47.515 M72.880 47.790 C 72.733 47.839,72.730 47.957,72.869 48.261 C 73.055 48.670,73.176 48.730,73.708 48.675 C 73.886 48.657,74.005 48.764,74.013 48.948 C 74.021 49.137,74.059 49.169,74.113 49.033 C 74.219 48.770,73.156 47.698,72.880 47.790 M145.424 47.989 C 145.359 48.094,145.419 48.123,145.577 48.063 C 145.720 48.008,145.961 48.065,146.113 48.190 C 146.348 48.384,146.376 48.380,146.306 48.167 C 146.208 47.868,145.577 47.741,145.424 47.989 M169.063 48.075 C 168.839 48.660,169.534 48.893,169.833 48.333 C 169.976 48.067,169.960 48.000,169.756 48.000 C 169.615 48.000,169.519 48.084,169.542 48.188 C 169.565 48.291,169.482 48.412,169.358 48.457 C 169.193 48.517,169.162 48.443,169.244 48.186 C 169.369 47.793,169.209 47.695,169.063 48.075 M216.576 48.011 C 216.511 48.117,216.585 48.167,216.758 48.136 C 216.918 48.107,217.084 48.183,217.126 48.305 C 217.179 48.458,217.081 48.510,216.810 48.472 C 216.508 48.430,216.404 48.504,216.363 48.792 C 216.334 48.998,216.228 49.167,216.127 49.167 C 216.027 49.167,215.984 49.206,216.032 49.254 C 216.179 49.401,216.667 49.144,216.667 48.918 C 216.667 48.801,216.817 48.666,217.000 48.618 C 217.447 48.501,217.455 47.833,217.010 47.833 C 216.832 47.833,216.637 47.913,216.576 48.011 M287.830 48.208 C 287.659 48.561,287.663 48.565,287.899 48.271 C 288.048 48.086,288.260 48.000,288.417 48.061 C 288.572 48.120,288.641 48.094,288.582 47.998 C 288.405 47.711,288.018 47.819,287.830 48.208 M212.104 48.256 C 212.044 48.411,212.120 48.555,212.294 48.620 C 212.453 48.680,212.681 48.864,212.801 49.031 C 212.921 49.197,213.108 49.332,213.218 49.331 C 213.347 49.329,213.335 49.277,213.184 49.181 C 213.056 49.100,212.998 48.914,213.054 48.767 C 213.133 48.559,213.047 48.500,212.667 48.500 C 212.300 48.500,212.201 48.437,212.273 48.250 C 212.326 48.112,212.331 48.000,212.286 48.000 C 212.240 48.000,212.158 48.115,212.104 48.256 M90.409 48.710 C 90.364 48.826,90.348 51.132,90.373 53.835 L 90.417 58.750 90.500 53.625 C 90.546 50.806,90.562 48.500,90.536 48.500 C 90.511 48.500,90.453 48.595,90.409 48.710 M164.719 48.820 C 164.736 49.042,164.862 49.254,165.000 49.291 C 165.165 49.336,165.186 49.312,165.061 49.221 C 164.957 49.145,164.831 48.933,164.780 48.750 C 164.708 48.487,164.695 48.502,164.719 48.820 M166.696 48.778 C 166.726 48.931,166.838 49.085,166.945 49.121 C 167.069 49.162,167.108 49.061,167.051 48.843 C 166.944 48.435,166.618 48.376,166.696 48.778 M168.346 48.781 C 168.337 49.045,168.208 49.163,167.875 49.214 L 167.417 49.283 167.880 49.308 C 168.353 49.334,168.606 49.031,168.446 48.630 C 168.398 48.513,168.354 48.580,168.346 48.781 M215.000 48.730 C 215.000 48.868,215.075 49.027,215.167 49.083 C 215.258 49.140,215.333 49.074,215.333 48.936 C 215.333 48.799,215.258 48.640,215.167 48.583 C 215.075 48.527,215.000 48.593,215.000 48.730 M266.346 48.778 C 266.339 48.976,266.240 49.177,266.125 49.223 C 265.962 49.289,265.963 49.310,266.130 49.320 C 266.383 49.336,266.567 48.933,266.446 48.630 C 266.398 48.513,266.354 48.579,266.346 48.778 M146.180 48.867 C 146.173 49.023,146.035 49.227,145.875 49.320 C 145.715 49.413,145.668 49.492,145.771 49.495 C 146.046 49.502,146.379 49.046,146.279 48.797 C 146.224 48.659,146.188 48.684,146.180 48.867 M341.396 48.911 C 341.344 49.046,341.341 49.252,341.388 49.370 C 341.435 49.487,341.480 49.415,341.487 49.208 C 341.494 49.002,341.577 48.833,341.672 48.833 C 341.767 48.833,341.912 49.002,341.995 49.208 C 342.087 49.438,342.150 49.483,342.156 49.325 C 342.178 48.801,341.566 48.468,341.396 48.911 M56.844 49.070 C 56.683 49.264,56.709 49.291,56.988 49.218 C 57.419 49.105,57.622 49.559,57.319 49.960 C 57.113 50.234,57.119 50.234,57.414 49.964 C 57.676 49.724,57.695 49.612,57.533 49.256 C 57.315 48.777,57.129 48.727,56.844 49.070 M74.781 49.108 C 74.536 49.353,74.665 49.858,74.958 49.802 C 75.119 49.771,75.250 49.603,75.250 49.428 C 75.250 49.097,74.978 48.911,74.781 49.108 M75.167 49.417 C 75.167 49.554,75.092 49.667,75.000 49.667 C 74.908 49.667,74.833 49.554,74.833 49.417 C 74.833 49.279,74.908 49.167,75.000 49.167 C 75.092 49.167,75.167 49.279,75.167 49.417 M261.292 49.291 C 262.048 49.322,263.285 49.322,264.042 49.291 C 264.798 49.260,264.179 49.235,262.667 49.235 C 261.154 49.235,260.535 49.260,261.292 49.291 M296.812 49.483 C 296.938 49.563,297.007 49.730,296.965 49.854 C 296.859 50.172,297.307 50.593,297.523 50.377 C 297.695 50.205,297.030 49.331,296.731 49.336 C 296.650 49.337,296.686 49.404,296.812 49.483 M76.002 49.948 C 76.001 50.149,76.080 50.363,76.178 50.424 C 76.451 50.592,76.466 50.457,76.224 50.000 C 76.014 49.600,76.005 49.598,76.002 49.948 M85.441 49.961 C 85.504 50.200,85.439 50.327,85.224 50.382 C 84.940 50.455,84.940 50.463,85.214 50.481 C 85.571 50.504,85.783 50.049,85.531 49.798 C 85.403 49.670,85.378 49.716,85.441 49.961 M340.965 50.160 C 340.849 50.347,340.670 50.500,340.569 50.500 C 340.297 50.500,339.055 51.916,339.130 52.141 C 339.258 52.524,339.667 52.336,339.667 51.894 C 339.667 51.394,340.264 50.762,340.883 50.607 C 341.319 50.497,341.592 50.077,341.332 49.916 C 341.247 49.863,341.082 49.973,340.965 50.160 M146.090 50.322 C 146.024 50.429,146.089 50.456,146.258 50.390 C 146.413 50.331,146.605 50.387,146.696 50.517 C 146.831 50.711,146.847 50.708,146.791 50.500 C 146.708 50.198,146.240 50.079,146.090 50.322 M195.167 50.391 C 195.624 50.632,195.759 50.617,195.590 50.344 C 195.530 50.247,195.316 50.168,195.115 50.169 C 194.765 50.171,194.767 50.181,195.167 50.391 M57.426 50.651 C 57.375 50.734,57.496 50.760,57.695 50.708 C 57.997 50.629,58.036 50.665,57.935 50.932 C 57.842 51.174,57.860 51.204,58.009 51.056 C 58.116 50.950,58.154 50.781,58.092 50.681 C 57.956 50.461,57.555 50.443,57.426 50.651 M286.759 51.152 C 286.614 51.386,286.842 51.833,287.106 51.833 C 287.441 51.833,287.596 51.330,287.316 51.152 C 287.017 50.963,286.876 50.963,286.759 51.152 M297.623 51.266 C 297.377 51.512,297.743 51.833,298.268 51.833 C 298.874 51.833,299.082 52.249,298.542 52.382 C 298.381 52.421,298.494 52.423,298.792 52.386 C 299.326 52.319,299.334 52.327,299.356 53.034 C 299.369 53.428,299.411 53.581,299.451 53.375 C 299.491 53.169,299.630 53.000,299.762 53.000 C 300.055 53.000,300.079 53.440,299.792 53.556 C 299.677 53.603,299.827 53.646,300.126 53.654 L 300.668 53.667 299.422 52.417 C 298.268 51.259,297.879 51.010,297.623 51.266 M147.000 51.827 L 147.417 51.955 147.000 52.134 C 146.613 52.299,146.609 52.313,146.941 52.323 C 147.288 52.333,147.577 51.966,147.377 51.766 C 147.323 51.711,147.122 51.674,146.931 51.683 C 146.629 51.698,146.638 51.716,147.000 51.827 M285.855 52.762 C 285.421 53.194,285.475 53.678,285.953 53.647 C 286.231 53.629,286.232 53.623,285.958 53.552 C 285.798 53.510,285.667 53.369,285.667 53.238 C 285.667 52.945,285.937 52.925,286.069 53.208 C 286.147 53.375,286.186 53.375,286.264 53.208 C 286.317 53.094,286.467 53.000,286.597 53.000 C 286.727 53.000,286.833 52.850,286.833 52.667 C 286.833 52.217,286.356 52.263,285.855 52.762 M58.563 53.075 C 58.450 53.372,58.616 53.671,58.885 53.654 C 59.028 53.644,59.025 53.617,58.875 53.556 C 58.582 53.438,58.615 53.000,58.917 53.000 C 59.054 53.000,59.167 53.104,59.167 53.231 C 59.167 53.357,59.321 53.502,59.510 53.551 C 59.805 53.628,59.837 53.725,59.741 54.237 C 59.643 54.760,59.671 54.833,59.964 54.833 C 60.147 54.833,60.341 54.946,60.394 55.083 C 60.513 55.393,61.000 55.415,61.000 55.110 C 61.000 54.427,58.762 52.558,58.563 53.075 M147.250 53.167 C 147.193 53.258,147.183 53.333,147.227 53.333 C 147.270 53.333,147.425 53.379,147.570 53.434 C 147.743 53.501,147.833 53.444,147.833 53.268 C 147.833 52.974,147.414 52.901,147.250 53.167 M300.513 54.208 C 300.520 54.415,300.564 54.490,300.610 54.375 C 300.752 54.023,301.216 54.125,301.122 54.488 C 301.064 54.707,301.108 54.782,301.258 54.724 C 301.538 54.617,301.388 54.208,300.991 53.995 C 300.557 53.763,300.498 53.789,300.513 54.208 M60.333 54.431 C 60.333 54.725,59.975 54.674,59.872 54.365 C 59.835 54.256,59.924 54.167,60.069 54.167 C 60.215 54.167,60.333 54.285,60.333 54.431 M195.955 54.489 C 195.906 54.676,195.968 54.849,196.102 54.901 C 196.229 54.950,196.333 54.904,196.333 54.800 C 196.333 54.696,196.389 54.667,196.458 54.736 C 196.527 54.804,196.437 54.967,196.260 55.097 C 195.978 55.303,195.973 55.333,196.218 55.333 C 196.373 55.333,196.500 55.451,196.500 55.595 C 196.500 55.769,196.622 55.839,196.862 55.803 C 197.349 55.732,197.455 55.334,197.018 55.220 C 196.763 55.153,196.667 54.996,196.667 54.647 C 196.667 54.081,196.095 53.954,195.955 54.489 M284.500 54.407 C 284.500 54.539,284.587 54.701,284.692 54.766 C 284.812 54.840,284.840 54.812,284.766 54.692 C 284.701 54.587,284.731 54.500,284.833 54.500 C 284.936 54.500,284.973 54.425,284.917 54.333 C 284.763 54.085,284.500 54.132,284.500 54.407 M336.645 54.292 C 336.561 54.783,336.590 55.333,336.701 55.333 C 336.774 55.333,336.833 55.218,336.833 55.078 C 336.833 54.938,336.946 54.780,337.083 54.727 C 337.450 54.586,337.388 54.167,337.000 54.167 C 336.817 54.167,336.657 54.223,336.645 54.292 M148.410 54.510 C 148.349 54.609,148.195 54.649,148.066 54.600 C 147.938 54.551,147.833 54.583,147.833 54.672 C 147.833 54.761,147.983 54.833,148.167 54.833 C 148.350 54.833,148.500 54.908,148.500 55.000 C 148.500 55.092,148.612 55.167,148.750 55.167 C 149.066 55.167,149.071 54.881,148.761 54.570 C 148.599 54.408,148.485 54.389,148.410 54.510 M283.542 55.228 C 282.878 55.911,282.872 55.981,283.486 55.964 C 283.860 55.953,283.958 55.881,283.913 55.649 C 283.877 55.463,283.982 55.309,284.187 55.244 C 284.369 55.186,284.491 55.056,284.457 54.955 C 284.338 54.598,284.078 54.676,283.542 55.228 M335.857 55.006 C 335.488 55.313,335.484 55.333,335.795 55.333 C 335.988 55.333,336.165 55.193,336.215 55.000 C 336.263 54.817,336.290 54.669,336.276 54.672 C 336.262 54.675,336.073 54.825,335.857 55.006 M301.763 55.198 C 301.549 55.883,302.148 56.390,302.399 55.736 C 302.556 55.328,302.509 55.217,302.318 55.545 C 302.224 55.708,302.072 55.795,301.982 55.739 C 301.876 55.673,301.882 55.559,302.000 55.417 C 302.127 55.263,302.130 55.163,302.007 55.088 C 301.910 55.028,301.800 55.077,301.763 55.198 M171.606 55.583 C 171.554 55.721,171.396 55.833,171.255 55.833 C 171.111 55.833,171.000 55.978,171.000 56.167 C 171.000 56.352,170.889 56.500,170.750 56.500 C 170.496 56.500,170.418 56.696,170.600 56.877 C 170.807 57.085,171.167 56.782,171.167 56.399 C 171.167 56.179,171.247 56.000,171.345 56.000 C 171.442 56.000,171.479 56.137,171.425 56.306 C 171.361 56.510,171.412 56.611,171.581 56.611 C 171.720 56.611,171.834 56.492,171.836 56.347 C 171.837 56.202,171.883 55.915,171.938 55.708 C 172.049 55.294,171.759 55.185,171.606 55.583 M197.167 55.500 C 197.167 55.592,197.054 55.667,196.917 55.667 C 196.779 55.667,196.667 55.592,196.667 55.500 C 196.667 55.408,196.779 55.333,196.917 55.333 C 197.054 55.333,197.167 55.408,197.167 55.500 M335.169 55.972 C 335.019 56.132,335.012 56.245,335.142 56.375 C 335.272 56.505,335.352 56.478,335.429 56.278 C 335.488 56.125,335.673 56.000,335.841 56.000 C 336.009 56.000,336.182 55.944,336.224 55.875 C 336.362 55.653,335.383 55.743,335.169 55.972 M61.672 55.996 C 61.332 56.207,61.637 56.500,62.196 56.500 C 62.623 56.500,62.692 56.554,62.618 56.833 C 62.570 57.017,62.599 57.167,62.682 57.167 C 62.765 57.167,62.815 57.251,62.792 57.354 C 62.726 57.648,63.114 57.711,63.224 57.424 C 63.286 57.264,63.230 57.167,63.078 57.167 C 62.943 57.167,62.833 57.031,62.833 56.865 C 62.833 56.473,61.959 55.819,61.672 55.996 M216.350 57.083 C 215.184 58.264,215.142 58.333,215.578 58.333 C 215.958 58.333,216.006 58.291,215.846 58.098 C 215.594 57.795,215.865 57.611,216.376 57.738 C 216.582 57.789,216.656 57.787,216.542 57.735 C 216.249 57.600,216.281 57.167,216.583 57.167 C 216.721 57.167,216.833 57.245,216.833 57.340 C 216.833 57.440,216.932 57.422,217.067 57.298 C 217.195 57.180,217.233 57.058,217.150 57.028 C 216.900 56.935,216.982 56.500,217.250 56.500 C 217.387 56.500,217.500 56.387,217.500 56.250 C 217.500 55.902,217.957 55.936,218.062 56.292 C 218.129 56.521,218.140 56.512,218.114 56.252 C 218.048 55.617,217.575 55.840,216.350 57.083 M303.442 56.097 C 303.549 56.380,303.530 56.390,303.281 56.188 C 303.040 55.992,303.000 55.996,303.000 56.212 C 303.000 56.351,303.113 56.508,303.252 56.561 C 303.390 56.614,303.484 56.749,303.460 56.860 C 303.394 57.169,303.986 57.229,304.103 56.925 C 304.166 56.761,304.036 56.491,303.764 56.218 C 303.421 55.876,303.349 55.848,303.442 56.097 M149.306 56.353 C 149.135 56.462,149.151 56.495,149.375 56.497 C 149.535 56.499,149.658 56.556,149.647 56.625 C 149.590 56.986,149.694 57.146,149.927 57.056 C 150.100 56.990,150.217 57.075,150.279 57.312 C 150.388 57.726,150.590 57.773,150.727 57.417 C 150.785 57.264,150.727 57.167,150.578 57.167 C 150.443 57.167,150.333 57.035,150.332 56.875 C 150.330 56.518,149.618 56.156,149.306 56.353 M281.267 56.843 C 280.933 57.198,280.889 57.302,281.111 57.219 C 281.380 57.118,281.389 57.138,281.188 57.385 C 280.991 57.628,280.997 57.667,281.230 57.667 C 281.378 57.667,281.500 57.554,281.500 57.417 C 281.500 57.279,281.612 57.167,281.750 57.167 C 282.010 57.167,282.102 56.583,281.865 56.436 C 281.791 56.391,281.522 56.574,281.267 56.843 M333.713 56.625 C 333.653 56.785,333.494 56.999,333.360 57.100 C 333.083 57.307,333.231 57.667,333.593 57.667 C 333.758 57.667,333.833 57.478,333.833 57.066 C 333.833 56.591,333.888 56.485,334.092 56.564 C 334.240 56.621,334.307 56.593,334.249 56.498 C 334.091 56.242,333.834 56.303,333.713 56.625 M197.167 56.755 C 197.167 56.896,197.279 57.054,197.417 57.106 C 197.554 57.159,197.667 57.344,197.667 57.518 C 197.667 57.691,197.739 57.833,197.828 57.833 C 197.917 57.833,197.943 57.713,197.887 57.567 C 197.831 57.420,197.883 57.239,198.003 57.165 C 198.178 57.057,198.168 56.978,197.956 56.765 C 197.714 56.523,197.684 56.526,197.615 56.792 C 197.542 57.069,197.538 57.069,197.519 56.792 C 197.496 56.434,197.167 56.400,197.167 56.755 M304.000 56.750 C 304.000 56.887,303.925 57.000,303.833 57.000 C 303.742 57.000,303.667 56.887,303.667 56.750 C 303.667 56.612,303.742 56.500,303.833 56.500 C 303.925 56.500,304.000 56.612,304.000 56.750 M171.542 57.094 C 171.267 57.390,171.279 57.500,171.583 57.500 C 171.721 57.500,171.833 57.587,171.833 57.694 C 171.833 57.801,171.868 57.854,171.911 57.811 C 171.954 57.768,171.935 57.539,171.869 57.301 C 171.771 56.945,171.714 56.908,171.542 57.094 M304.741 57.181 C 304.679 57.281,304.724 57.450,304.839 57.556 C 305.003 57.708,305.027 57.686,304.946 57.458 C 304.880 57.268,304.927 57.167,305.083 57.167 C 305.236 57.167,305.289 57.272,305.229 57.458 C 305.153 57.696,305.167 57.705,305.307 57.508 C 305.401 57.375,305.441 57.206,305.396 57.133 C 305.277 56.940,304.872 56.970,304.741 57.181 M198.409 57.488 C 198.460 57.570,198.408 57.681,198.293 57.734 C 198.178 57.787,198.246 57.790,198.444 57.742 C 198.802 57.654,199.218 58.011,198.887 58.121 C 198.607 58.214,198.841 59.002,199.144 58.987 C 199.317 58.978,199.341 58.943,199.208 58.890 C 199.094 58.843,199.000 58.657,199.000 58.476 C 199.000 58.295,199.075 58.193,199.167 58.250 C 199.395 58.391,199.367 58.140,199.120 57.823 C 198.901 57.543,198.255 57.238,198.409 57.488 M64.042 57.691 C 63.819 57.914,63.955 58.333,64.250 58.333 C 64.558 58.333,64.685 57.889,64.436 57.683 C 64.288 57.560,64.171 57.563,64.042 57.691 M279.220 57.680 C 279.113 57.787,279.066 57.977,279.114 58.104 C 279.240 58.431,279.467 58.388,279.440 58.042 C 279.410 57.662,280.107 57.544,280.219 57.910 C 280.280 58.111,280.293 58.104,280.273 57.878 C 280.242 57.529,279.509 57.391,279.220 57.680 M306.042 57.620 C 305.702 57.741,305.799 58.260,306.167 58.288 C 306.391 58.304,306.500 58.210,306.500 57.999 C 306.500 57.642,306.343 57.512,306.042 57.620 M332.037 57.696 C 331.894 57.839,331.891 57.952,332.024 58.113 C 332.273 58.412,332.646 58.392,332.600 58.082 C 332.540 57.669,332.258 57.476,332.037 57.696 M169.179 57.902 C 169.036 58.074,169.034 58.168,169.170 58.252 C 169.272 58.315,169.309 58.491,169.251 58.642 C 169.180 58.827,169.259 58.796,169.490 58.549 C 169.679 58.346,169.833 58.065,169.833 57.924 C 169.833 57.602,169.439 57.589,169.179 57.902 M278.208 58.180 C 278.369 58.273,278.506 58.477,278.513 58.633 C 278.522 58.816,278.557 58.841,278.612 58.703 C 278.712 58.454,278.380 57.998,278.105 58.005 C 278.001 58.008,278.048 58.087,278.208 58.180 M64.942 58.311 C 64.663 58.421,64.659 58.453,64.901 58.653 C 65.127 58.841,65.167 58.831,65.167 58.584 C 65.167 58.376,65.261 58.319,65.500 58.382 C 65.684 58.430,65.792 58.401,65.740 58.318 C 65.632 58.142,65.376 58.140,64.942 58.311 M152.054 58.433 C 151.949 58.708,152.296 59.043,152.534 58.896 C 152.607 58.851,152.667 58.668,152.667 58.490 C 152.667 58.100,152.198 58.057,152.054 58.433 M199.511 58.619 C 199.500 59.153,199.895 59.549,200.377 59.487 C 201.022 59.404,201.320 59.510,201.229 59.792 C 201.153 60.029,201.167 60.039,201.307 59.841 C 201.526 59.532,201.402 59.333,200.990 59.333 C 200.812 59.333,200.667 59.221,200.667 59.083 C 200.667 58.927,200.509 58.833,200.245 58.833 C 199.963 58.833,199.773 58.709,199.672 58.458 C 199.535 58.117,199.520 58.131,199.511 58.619 M277.584 58.332 C 277.528 58.423,277.552 58.622,277.637 58.774 C 277.763 58.999,277.792 58.968,277.792 58.609 C 277.792 58.134,277.745 58.072,277.584 58.332 M330.500 58.583 C 330.500 58.813,330.529 59.000,330.564 59.000 C 330.599 59.000,330.664 58.813,330.707 58.583 C 330.751 58.354,330.723 58.167,330.644 58.167 C 330.565 58.167,330.500 58.354,330.500 58.583 M66.338 58.911 C 66.193 59.085,66.185 59.167,66.313 59.167 C 66.416 59.167,66.500 59.092,66.500 59.000 C 66.500 58.908,66.575 58.833,66.667 58.833 C 66.932 58.833,66.859 59.301,66.580 59.387 C 66.403 59.442,66.415 59.458,66.622 59.439 C 66.791 59.424,66.917 59.277,66.917 59.095 C 66.917 58.684,66.608 58.586,66.338 58.911 M89.396 58.910 C 89.339 59.059,89.339 59.228,89.396 59.285 C 89.453 59.342,89.500 59.264,89.500 59.111 C 89.500 58.958,89.584 58.833,89.686 58.833 C 89.790 58.833,89.834 58.980,89.785 59.167 C 89.737 59.350,89.771 59.500,89.861 59.500 C 90.094 59.500,89.957 58.790,89.708 58.708 C 89.594 58.670,89.453 58.761,89.396 58.910 M213.896 58.911 C 213.845 59.043,213.852 59.229,213.912 59.325 C 214.092 59.618,214.500 59.520,214.500 59.184 C 214.500 58.796,214.023 58.580,213.896 58.911 M275.626 58.875 C 275.522 59.157,275.655 59.500,275.868 59.500 C 275.977 59.500,275.968 59.412,275.844 59.263 C 275.689 59.077,275.711 58.990,275.949 58.852 C 276.210 58.700,276.214 58.676,275.976 58.672 C 275.826 58.669,275.668 58.760,275.626 58.875 M308.395 58.866 C 308.127 59.295,308.187 59.521,308.555 59.468 C 308.782 59.436,308.917 59.298,308.917 59.097 C 308.917 58.712,308.584 58.564,308.395 58.866 M329.063 58.909 C 328.951 59.202,329.114 59.501,329.385 59.497 C 329.515 59.496,329.505 59.445,329.354 59.349 C 328.987 59.117,329.325 58.794,329.853 58.872 C 330.117 58.911,330.333 58.880,330.333 58.804 C 330.333 58.556,329.162 58.652,329.063 58.909 M153.200 59.033 C 152.895 59.339,152.960 59.500,153.389 59.500 C 153.891 59.500,154.045 59.338,153.811 59.057 C 153.583 58.781,153.457 58.776,153.200 59.033 M167.512 59.068 C 167.379 59.229,167.372 59.338,167.492 59.412 C 167.725 59.555,168.000 59.372,168.000 59.073 C 168.000 58.767,167.764 58.765,167.512 59.068 M171.946 59.355 C 171.878 59.616,171.773 59.679,171.552 59.595 C 171.334 59.512,171.300 59.531,171.430 59.662 C 171.685 59.919,172.167 59.692,172.167 59.316 C 172.167 58.896,172.061 58.915,171.946 59.355 M68.300 59.787 C 68.377 60.190,68.400 60.204,68.506 59.912 C 68.632 59.564,68.568 59.333,68.347 59.333 C 68.273 59.333,68.252 59.537,68.300 59.787 M154.489 59.475 C 154.689 59.614,154.692 59.685,154.507 59.908 C 154.318 60.136,154.326 60.159,154.568 60.066 C 154.902 59.938,154.856 59.473,154.500 59.376 C 154.286 59.318,154.285 59.332,154.489 59.475 M166.407 59.516 C 166.345 59.616,166.426 59.823,166.587 59.974 C 166.862 60.232,166.873 60.229,166.768 59.930 C 166.701 59.740,166.742 59.555,166.869 59.474 C 167.028 59.373,167.011 59.338,166.802 59.336 C 166.646 59.334,166.469 59.416,166.407 59.516 M212.745 59.507 C 212.589 59.760,213.013 60.221,213.215 60.018 C 213.402 59.831,213.257 59.333,213.015 59.333 C 212.926 59.333,212.805 59.412,212.745 59.507 M309.875 59.471 C 309.710 59.576,309.714 59.667,309.893 59.912 C 310.173 60.296,310.667 60.143,310.667 59.672 C 310.667 59.321,310.269 59.220,309.875 59.471 M327.251 59.498 C 327.120 59.710,327.451 60.169,327.729 60.162 C 327.832 60.159,327.785 60.080,327.625 59.987 C 327.183 59.729,327.275 59.500,327.821 59.500 C 328.112 59.500,328.341 59.602,328.387 59.753 C 328.443 59.931,328.458 59.919,328.440 59.712 C 328.410 59.371,327.438 59.196,327.251 59.498 M310.500 59.764 C 310.500 60.058,310.141 60.007,310.038 59.698 C 310.002 59.589,310.091 59.500,310.236 59.500 C 310.381 59.500,310.500 59.619,310.500 59.764 M70.391 59.954 C 70.776 60.012,70.849 60.091,70.775 60.370 C 70.711 60.616,70.737 60.663,70.865 60.535 C 71.170 60.230,70.884 59.831,70.380 59.858 L 69.917 59.883 70.391 59.954 M164.896 60.078 C 164.844 60.212,164.841 60.419,164.888 60.536 C 164.935 60.654,164.980 60.587,164.987 60.389 C 164.994 60.190,165.094 59.990,165.208 59.944 C 165.372 59.878,165.370 59.857,165.203 59.846 C 165.086 59.839,164.947 59.943,164.896 60.078 M211.563 60.077 C 211.506 60.226,211.506 60.394,211.563 60.452 C 211.620 60.509,211.667 60.431,211.667 60.278 C 211.667 59.972,211.923 59.901,212.057 60.171 C 212.104 60.265,212.124 60.251,212.102 60.140 C 212.040 59.820,211.677 59.778,211.563 60.077 M324.556 60.095 C 324.501 60.238,324.545 60.444,324.654 60.553 C 324.808 60.705,324.826 60.680,324.736 60.442 C 324.663 60.250,324.706 60.077,324.851 59.986 C 325.025 59.876,325.029 59.838,324.870 59.836 C 324.752 59.834,324.611 59.951,324.556 60.095 M99.851 60.229 C 99.509 60.640,100.000 60.667,108.026 60.667 C 115.395 60.667,115.854 60.649,115.802 60.375 C 115.725 59.975,100.180 59.832,99.851 60.229 M156.451 60.335 C 156.404 60.518,156.424 60.667,156.498 60.667 C 156.694 60.667,156.842 60.192,156.678 60.091 C 156.601 60.043,156.499 60.153,156.451 60.335 M186.867 60.367 C 186.626 60.608,186.613 60.994,186.836 61.333 C 186.952 61.511,186.970 61.428,186.896 61.044 C 186.808 60.583,186.850 60.481,187.188 60.346 C 187.417 60.254,187.475 60.183,187.325 60.177 C 187.183 60.171,186.977 60.257,186.867 60.367 M75.708 60.458 C 76.785 60.487,78.548 60.487,79.625 60.458 C 80.702 60.429,79.821 60.405,77.667 60.405 C 75.512 60.405,74.631 60.429,75.708 60.458 M159.792 60.457 C 160.456 60.489,161.544 60.489,162.208 60.457 C 162.873 60.425,162.329 60.400,161.000 60.400 C 159.671 60.400,159.127 60.425,159.792 60.457 M205.958 60.457 C 206.715 60.488,207.952 60.488,208.708 60.457 C 209.465 60.426,208.846 60.401,207.333 60.401 C 205.821 60.401,205.202 60.426,205.958 60.457 M316.866 60.458 C 317.846 60.487,319.496 60.487,320.532 60.458 C 321.569 60.429,320.767 60.404,318.750 60.404 C 316.733 60.404,315.885 60.428,316.866 60.458 M171.353 61.053 C 171.339 61.273,171.246 61.328,171.014 61.254 C 170.838 61.199,170.643 61.236,170.581 61.338 C 170.518 61.440,170.370 61.486,170.252 61.440 C 170.108 61.385,170.065 61.464,170.122 61.682 C 170.251 62.174,170.493 62.237,170.837 61.868 C 171.008 61.684,171.236 61.505,171.343 61.469 C 171.450 61.433,171.501 61.257,171.455 61.077 C 171.381 60.787,171.370 60.784,171.353 61.053 M149.897 63.409 C 149.846 63.542,149.850 63.726,149.907 63.818 C 150.068 64.079,150.500 63.834,150.500 63.482 C 150.500 63.113,150.032 63.056,149.897 63.409 M169.196 63.426 C 169.256 63.711,169.545 63.783,169.628 63.533 C 169.657 63.446,169.560 63.328,169.412 63.271 C 169.226 63.200,169.159 63.248,169.196 63.426 M167.969 63.987 C 167.850 64.178,167.659 64.333,167.543 64.333 C 167.428 64.333,167.342 64.502,167.353 64.708 C 167.367 64.991,167.391 65.011,167.448 64.792 C 167.490 64.631,167.603 64.500,167.698 64.500 C 167.794 64.500,167.833 64.650,167.785 64.834 C 167.737 65.017,167.766 65.125,167.849 65.074 C 167.932 65.022,168.000 64.835,168.000 64.657 C 168.000 64.479,168.108 64.333,168.240 64.333 C 168.597 64.333,168.696 64.066,168.424 63.840 C 168.233 63.681,168.142 63.711,167.969 63.987 M152.223 64.595 C 152.071 64.988,152.426 65.269,152.743 65.006 C 153.021 64.775,153.093 64.333,152.852 64.333 C 152.770 64.333,152.714 64.457,152.727 64.607 C 152.740 64.758,152.645 64.918,152.516 64.963 C 152.347 65.022,152.309 64.946,152.376 64.689 C 152.483 64.278,152.371 64.208,152.223 64.595 M154.000 65.000 C 154.000 65.092,154.094 65.148,154.208 65.125 C 154.323 65.102,154.406 65.214,154.394 65.373 C 154.381 65.533,154.433 65.625,154.508 65.578 C 154.768 65.418,154.603 64.833,154.298 64.833 C 154.134 64.833,154.000 64.908,154.000 65.000 M155.781 65.730 C 155.685 65.979,155.960 66.336,156.242 66.328 C 156.338 66.325,156.289 66.248,156.132 66.157 C 155.975 66.066,155.889 65.881,155.941 65.746 C 155.993 65.611,155.998 65.500,155.952 65.500 C 155.906 65.500,155.829 65.603,155.781 65.730 M157.180 65.700 C 157.173 65.856,157.035 66.060,156.875 66.153 C 156.715 66.247,156.668 66.325,156.771 66.328 C 157.046 66.336,157.379 65.879,157.279 65.631 C 157.224 65.493,157.188 65.518,157.180 65.700 M164.018 65.839 C 164.161 66.055,164.385 66.260,164.514 66.295 C 164.698 66.345,164.695 66.321,164.500 66.185 C 164.362 66.090,164.250 65.922,164.250 65.812 C 164.250 65.701,164.139 65.574,164.004 65.529 C 163.793 65.459,163.795 65.504,164.018 65.839 M165.281 65.818 C 165.337 66.032,165.263 66.162,165.057 66.215 C 164.798 66.282,164.807 66.298,165.111 66.314 C 165.486 66.334,165.674 66.069,165.541 65.708 C 165.418 65.373,165.190 65.469,165.281 65.818 M185.365 65.946 C 185.520 65.987,185.680 66.147,185.720 66.302 C 185.773 66.501,185.800 66.474,185.814 66.208 C 185.829 65.920,185.747 65.838,185.458 65.853 C 185.193 65.866,185.165 65.894,185.365 65.946 M184.667 66.917 C 184.667 67.054,184.814 67.167,184.995 67.167 C 185.218 67.167,185.292 67.087,185.227 66.917 C 185.174 66.779,185.027 66.667,184.899 66.667 C 184.771 66.667,184.667 66.779,184.667 66.917 M184.208 67.505 C 184.002 67.588,183.833 67.686,183.833 67.722 C 183.833 67.820,185.162 67.560,185.284 67.438 C 185.440 67.282,184.639 67.332,184.208 67.505 M182.023 70.208 C 181.504 70.735,181.246 71.109,181.373 71.149 C 181.489 71.186,181.637 71.299,181.703 71.400 C 181.769 71.501,181.806 71.358,181.786 71.083 C 181.759 70.712,181.820 70.588,182.019 70.603 C 182.171 70.614,182.280 70.505,182.269 70.353 C 182.257 70.181,182.377 70.087,182.601 70.094 C 182.861 70.102,182.932 70.026,182.874 69.802 C 182.820 69.597,182.886 69.500,183.082 69.500 C 183.269 69.500,183.335 69.587,183.273 69.750 C 183.220 69.887,183.250 70.000,183.339 70.000 C 183.427 70.000,183.500 69.850,183.500 69.667 C 183.500 69.082,182.923 69.293,182.023 70.208 M180.594 71.655 C 180.421 71.846,180.329 72.052,180.390 72.112 C 180.450 72.173,180.500 72.135,180.500 72.028 C 180.500 71.800,180.946 71.763,181.028 71.984 C 181.058 72.066,181.180 72.029,181.298 71.900 C 181.475 71.708,181.470 71.667,181.270 71.667 C 181.137 71.667,181.001 71.586,180.968 71.487 C 180.935 71.388,180.768 71.463,180.594 71.655 " stroke="none" fill="#ececec" fill-rule="evenodd"></path><path id="path4" d="M318.333 5.911 C 318.333 6.626,320.390 6.749,320.981 6.069 C 321.298 5.704,321.311 5.646,321.065 5.694 C 320.905 5.725,320.794 5.817,320.818 5.898 C 320.893 6.151,320.446 6.328,319.722 6.331 C 318.839 6.334,318.497 6.202,318.612 5.903 C 318.662 5.773,318.619 5.667,318.518 5.667 C 318.416 5.667,318.333 5.777,318.333 5.911 M324.227 6.417 C 324.083 6.793,324.285 7.169,324.620 7.147 C 324.893 7.130,324.892 7.122,324.609 7.049 C 324.386 6.991,324.322 6.858,324.377 6.568 C 324.463 6.120,324.375 6.032,324.227 6.417 M315.225 6.579 C 315.277 6.714,315.192 6.899,315.035 6.991 C 314.878 7.082,314.829 7.159,314.925 7.162 C 315.166 7.169,315.500 6.813,315.500 6.550 C 315.500 6.431,315.417 6.333,315.316 6.333 C 315.214 6.333,315.173 6.444,315.225 6.579 M325.667 6.942 C 325.437 7.063,325.362 7.162,325.500 7.162 C 325.787 7.162,326.279 6.883,326.162 6.787 C 326.119 6.752,325.896 6.821,325.667 6.942 M10.000 33.467 L 10.083 60.083 10.126 33.592 C 10.149 19.022,10.111 7.045,10.042 6.976 C 9.973 6.906,9.954 18.827,10.000 33.467 M31.779 7.068 C 31.646 7.414,32.205 7.837,32.763 7.811 C 33.222 7.791,33.217 7.784,32.667 7.686 C 32.198 7.603,32.086 7.509,32.097 7.208 C 32.111 6.791,31.918 6.705,31.779 7.068 M266.167 7.157 C 266.167 7.335,266.234 7.522,266.316 7.572 C 266.398 7.623,266.454 7.478,266.441 7.249 C 266.413 6.763,266.167 6.680,266.167 7.157 M312.167 7.172 C 312.167 7.368,312.008 7.574,311.792 7.661 C 311.585 7.744,311.515 7.817,311.636 7.823 C 312.041 7.842,312.500 7.491,312.500 7.161 C 312.500 6.981,312.425 6.833,312.333 6.833 C 312.242 6.833,312.167 6.986,312.167 7.172 M38.727 7.583 C 38.583 7.959,38.785 8.336,39.120 8.314 C 39.395 8.296,39.394 8.289,39.111 8.216 C 38.881 8.156,38.830 8.037,38.906 7.735 C 39.016 7.296,38.881 7.182,38.727 7.583 M271.931 7.458 C 271.863 7.527,270.932 7.626,269.862 7.677 L 267.917 7.771 269.760 7.802 C 271.160 7.826,271.681 7.775,271.926 7.589 C 272.104 7.454,272.206 7.342,272.153 7.339 C 272.099 7.336,272.000 7.390,271.931 7.458 M273.727 7.583 C 273.603 7.906,273.768 8.333,274.015 8.333 C 274.159 8.333,274.160 8.276,274.018 8.104 C 273.913 7.979,273.874 7.754,273.932 7.604 C 273.989 7.455,273.988 7.333,273.929 7.333 C 273.871 7.333,273.780 7.446,273.727 7.583 M308.667 7.542 C 308.667 8.132,310.035 8.584,310.236 8.060 C 310.325 7.829,310.301 7.820,310.082 8.001 C 309.878 8.170,309.731 8.174,309.389 8.018 C 308.999 7.840,308.983 7.799,309.230 7.618 C 309.473 7.441,309.456 7.417,309.086 7.417 C 308.856 7.417,308.667 7.473,308.667 7.542 M328.894 7.583 C 328.699 8.092,328.967 8.356,329.624 8.302 C 330.140 8.259,330.254 8.184,330.272 7.872 C 330.291 7.558,330.282 7.551,330.219 7.831 C 330.164 8.075,330.009 8.167,329.650 8.167 C 329.104 8.167,328.803 7.727,329.184 7.486 C 329.358 7.376,329.363 7.338,329.203 7.336 C 329.086 7.334,328.946 7.446,328.894 7.583 M34.292 7.790 C 34.773 7.823,35.560 7.823,36.042 7.790 C 36.523 7.756,36.129 7.728,35.167 7.728 C 34.204 7.728,33.810 7.756,34.292 7.790 M266.960 7.785 C 267.168 7.824,267.468 7.823,267.627 7.781 C 267.786 7.739,267.617 7.707,267.250 7.709 C 266.883 7.711,266.753 7.745,266.960 7.785 M40.260 8.097 C 39.989 8.295,39.981 8.333,40.208 8.333 C 40.358 8.333,40.530 8.253,40.590 8.156 C 40.767 7.870,40.609 7.842,40.260 8.097 M41.251 8.220 C 41.177 8.394,41.201 8.601,41.308 8.708 C 41.565 8.965,41.634 8.827,41.496 8.333 C 41.393 7.965,41.364 7.952,41.251 8.220 M308.238 8.383 C 308.247 8.658,308.167 8.738,307.917 8.701 C 307.649 8.662,307.632 8.685,307.828 8.817 C 307.990 8.926,308.144 8.922,308.286 8.803 C 308.528 8.603,308.569 8.229,308.363 8.101 C 308.287 8.055,308.231 8.182,308.238 8.383 M276.505 8.438 C 276.497 8.753,276.960 9.030,277.366 8.952 C 277.712 8.886,277.706 8.877,277.300 8.856 C 277.052 8.844,276.773 8.702,276.680 8.542 C 276.587 8.381,276.508 8.335,276.505 8.438 M43.042 8.610 C 42.707 8.745,42.802 9.301,43.179 9.421 C 43.369 9.481,43.569 9.486,43.624 9.432 C 43.678 9.378,43.602 9.333,43.454 9.333 C 43.078 9.333,42.934 9.031,43.173 8.743 C 43.385 8.487,43.375 8.476,43.042 8.610 M278.526 8.780 C 278.353 9.089,278.645 9.504,279.030 9.495 C 279.177 9.491,279.153 9.416,278.955 9.266 C 278.780 9.133,278.703 8.933,278.765 8.771 C 278.902 8.415,278.727 8.422,278.526 8.780 M306.350 8.771 C 306.330 9.202,306.736 9.573,307.081 9.441 C 307.220 9.387,307.329 9.173,307.323 8.964 L 307.312 8.583 307.156 8.972 C 306.967 9.445,306.633 9.371,306.480 8.821 C 306.377 8.454,306.365 8.449,306.350 8.771 M44.559 9.419 C 44.506 9.557,44.554 9.781,44.666 9.915 C 44.948 10.256,45.506 9.939,45.481 9.452 C 45.463 9.113,45.455 9.110,45.378 9.417 C 45.284 9.793,45.002 10.021,44.793 9.892 C 44.716 9.844,44.699 9.662,44.754 9.486 C 44.874 9.110,44.701 9.050,44.559 9.419 M280.055 9.430 C 280.000 9.574,280.073 9.812,280.219 9.957 C 280.552 10.290,281.009 9.981,280.983 9.438 C 280.969 9.125,280.953 9.132,280.851 9.500 C 280.705 10.024,280.245 10.057,280.263 9.542 C 280.279 9.103,280.197 9.059,280.055 9.430 M305.948 9.438 C 306.015 9.612,305.909 9.820,305.651 10.018 C 305.170 10.387,304.833 10.420,304.833 10.097 C 304.833 9.967,304.927 9.823,305.042 9.777 C 305.166 9.727,305.133 9.688,304.958 9.680 C 304.758 9.671,304.667 9.792,304.667 10.066 C 304.667 10.645,305.057 10.704,305.649 10.214 C 306.138 9.809,306.356 9.167,306.005 9.167 C 305.916 9.167,305.891 9.289,305.948 9.438 M333.846 9.625 C 333.838 9.861,333.729 10.000,333.551 10.000 C 333.306 10.000,333.311 10.031,333.593 10.245 C 333.771 10.379,334.085 10.492,334.292 10.495 C 334.498 10.498,334.667 10.603,334.667 10.730 C 334.667 10.856,334.798 11.062,334.958 11.188 C 335.221 11.394,335.228 11.388,335.027 11.132 C 334.904 10.975,334.836 10.638,334.876 10.382 C 334.916 10.126,334.917 10.010,334.879 10.125 C 334.794 10.377,334.000 10.406,334.000 10.157 C 334.000 10.060,334.067 10.022,334.149 10.073 C 334.231 10.123,334.341 10.053,334.394 9.916 C 334.450 9.769,334.395 9.667,334.259 9.667 C 334.132 9.667,333.990 9.573,333.944 9.458 C 333.897 9.344,333.854 9.419,333.846 9.625 M45.857 9.815 C 45.581 9.990,45.755 10.667,46.077 10.667 C 46.198 10.667,46.341 10.779,46.394 10.917 C 46.500 11.193,47.167 11.265,47.167 11.000 C 47.167 10.908,47.242 10.833,47.333 10.833 C 47.425 10.833,47.500 11.050,47.500 11.316 C 47.500 11.601,47.607 11.839,47.764 11.899 C 48.191 12.063,48.252 12.016,47.923 11.775 C 47.720 11.627,47.647 11.428,47.708 11.192 C 47.760 10.995,47.726 10.833,47.633 10.833 C 47.540 10.833,47.507 10.722,47.560 10.585 C 47.695 10.232,47.277 10.352,47.130 10.708 C 46.975 11.087,46.851 11.070,46.262 10.589 C 45.847 10.249,45.806 10.151,45.990 9.928 C 46.233 9.636,46.193 9.602,45.857 9.815 M281.351 9.896 C 281.140 10.150,281.270 10.667,281.546 10.667 C 281.644 10.667,281.856 10.787,282.018 10.933 C 282.363 11.245,282.667 11.116,282.667 10.657 C 282.667 10.311,282.341 10.226,282.066 10.501 C 281.766 10.801,281.213 10.263,281.485 9.935 C 281.607 9.787,281.670 9.667,281.624 9.667 C 281.578 9.667,281.455 9.770,281.351 9.896 M283.200 11.033 C 282.912 11.322,282.953 11.557,283.333 11.795 C 283.730 12.042,283.784 11.872,283.398 11.590 C 283.152 11.410,283.153 11.371,283.410 11.114 C 283.564 10.960,283.625 10.833,283.545 10.833 C 283.465 10.833,283.310 10.923,283.200 11.033 M303.694 11.342 C 303.400 11.658,303.354 11.664,303.104 11.414 C 302.955 11.265,302.833 11.214,302.833 11.301 C 302.833 11.763,303.322 11.852,303.824 11.481 C 304.369 11.078,304.425 11.000,304.173 11.000 C 304.085 11.000,303.869 11.154,303.694 11.342 M336.011 11.208 C 336.005 11.369,336.131 11.637,336.292 11.804 C 336.452 11.971,336.865 12.427,337.208 12.817 C 337.552 13.208,337.833 13.461,337.833 13.381 C 337.833 13.300,337.573 12.975,337.255 12.659 C 336.937 12.342,336.675 11.990,336.672 11.875 C 336.669 11.760,336.589 11.667,336.495 11.667 C 336.400 11.667,336.255 11.498,336.172 11.292 C 336.056 11.004,336.019 10.985,336.011 11.208 M301.667 11.750 C 301.667 11.887,301.559 12.000,301.427 12.000 C 301.294 12.000,301.144 12.068,301.093 12.151 C 301.042 12.234,301.156 12.261,301.347 12.211 C 301.538 12.161,301.734 12.018,301.782 11.894 C 301.900 11.586,302.333 11.605,302.333 11.917 C 302.333 12.054,302.221 12.167,302.083 12.167 C 301.946 12.167,301.833 12.276,301.833 12.410 C 301.833 12.543,301.533 12.968,301.166 13.354 C 300.800 13.739,300.536 14.092,300.581 14.136 C 300.625 14.181,300.806 14.037,300.982 13.817 C 301.158 13.597,301.571 13.117,301.901 12.750 C 302.617 11.953,302.683 11.500,302.083 11.500 C 301.824 11.500,301.667 11.594,301.667 11.750 M337.336 11.875 C 337.334 12.071,337.456 12.162,337.708 12.154 C 337.959 12.145,338.000 12.109,337.833 12.045 C 337.696 11.993,337.528 11.868,337.461 11.767 C 337.385 11.654,337.337 11.695,337.336 11.875 M48.651 12.677 C 48.958 12.958,49.393 13.307,49.617 13.454 C 49.902 13.641,49.998 13.823,49.936 14.060 C 49.841 14.424,50.088 14.837,50.395 14.828 C 50.499 14.825,50.459 14.728,50.308 14.613 C 49.958 14.347,50.085 13.505,50.478 13.488 C 50.685 13.479,50.671 13.445,50.417 13.345 C 50.233 13.272,49.993 13.246,49.884 13.288 C 49.673 13.366,49.373 13.162,48.792 12.542 C 48.598 12.335,48.362 12.167,48.266 12.167 C 48.171 12.167,48.344 12.396,48.651 12.677 M285.012 13.568 C 284.871 13.739,284.868 13.835,285.002 13.918 C 285.104 13.981,285.256 14.213,285.339 14.433 C 285.491 14.830,286.053 14.986,286.240 14.682 C 286.292 14.599,286.192 14.568,286.020 14.613 C 285.791 14.673,285.633 14.551,285.441 14.165 C 285.229 13.740,285.222 13.652,285.408 13.723 C 285.535 13.772,285.680 13.705,285.731 13.573 C 285.852 13.256,285.274 13.253,285.012 13.568 M338.735 14.417 C 338.948 14.646,339.180 14.833,339.251 14.833 C 339.322 14.833,339.471 14.958,339.583 15.110 C 339.858 15.487,340.339 15.279,340.311 14.797 L 340.288 14.417 340.216 14.792 C 340.132 15.228,339.958 15.268,339.667 14.917 C 339.553 14.779,339.374 14.667,339.270 14.667 C 339.165 14.667,338.987 14.517,338.872 14.333 C 338.758 14.150,338.593 14.000,338.507 14.000 C 338.420 14.000,338.523 14.188,338.735 14.417 M299.904 14.574 C 299.714 14.763,299.494 15.029,299.416 15.167 C 299.337 15.304,299.525 15.174,299.833 14.877 C 300.141 14.580,300.361 14.313,300.321 14.285 C 300.282 14.256,300.094 14.386,299.904 14.574 M50.513 15.297 C 50.506 15.506,50.612 15.720,50.750 15.773 C 50.887 15.826,51.000 15.969,51.000 16.091 C 51.000 16.605,51.251 16.418,51.263 15.895 C 51.270 15.581,51.230 15.397,51.175 15.487 C 51.053 15.684,50.752 15.509,50.621 15.167 C 50.558 15.001,50.522 15.045,50.513 15.297 M286.175 15.240 C 285.846 15.636,286.024 16.408,286.458 16.470 C 286.665 16.499,286.833 16.450,286.833 16.361 C 286.833 16.271,286.683 16.237,286.500 16.285 C 285.984 16.420,286.023 15.380,286.542 15.172 C 286.795 15.070,286.829 15.018,286.645 15.011 C 286.496 15.005,286.285 15.108,286.175 15.240 M298.890 15.380 C 298.813 15.511,298.637 15.660,298.500 15.712 C 298.290 15.792,298.294 15.809,298.521 15.820 C 298.813 15.834,299.274 15.385,299.122 15.233 C 299.072 15.183,298.967 15.249,298.890 15.380 M340.645 16.875 C 340.771 17.035,341.015 17.167,341.187 17.167 C 341.541 17.167,341.590 17.344,341.311 17.622 C 341.022 17.911,341.803 18.817,342.333 18.807 L 342.750 18.800 342.349 18.688 C 342.128 18.626,341.900 18.441,341.842 18.275 C 341.784 18.110,341.684 17.981,341.618 17.988 C 341.553 17.994,341.500 17.962,341.500 17.917 C 341.500 17.871,341.500 17.763,341.500 17.678 C 341.500 17.592,341.655 17.473,341.845 17.413 C 342.302 17.268,341.784 16.834,341.304 16.959 C 341.136 17.003,340.867 16.937,340.707 16.811 C 340.444 16.605,340.438 16.611,340.645 16.875 M51.759 17.204 C 51.617 17.407,51.506 17.726,51.514 17.912 C 51.525 18.165,51.564 18.132,51.669 17.781 C 51.747 17.523,51.900 17.204,52.009 17.073 C 52.118 16.941,52.165 16.833,52.113 16.833 C 52.061 16.833,51.902 17.000,51.759 17.204 M286.673 17.156 C 286.578 17.333,286.509 17.689,286.519 17.947 C 286.536 18.371,286.550 18.359,286.654 17.828 C 286.717 17.504,286.826 17.147,286.894 17.036 C 286.963 16.925,286.980 16.833,286.932 16.833 C 286.884 16.833,286.767 16.978,286.673 17.156 M297.665 17.054 C 297.862 17.314,297.860 17.381,297.656 17.510 C 297.506 17.605,297.491 17.663,297.615 17.664 C 297.975 17.669,298.045 17.306,297.737 17.026 C 297.453 16.766,297.448 16.768,297.665 17.054 M259.661 17.757 C 259.487 17.966,259.488 18.052,259.665 18.215 C 259.839 18.376,259.862 18.359,259.781 18.129 C 259.719 17.953,259.790 17.778,259.965 17.676 C 260.122 17.585,260.165 17.508,260.062 17.505 C 259.959 17.502,259.778 17.616,259.661 17.757 M263.816 17.652 C 263.948 17.736,264.010 17.945,263.959 18.137 C 263.896 18.378,263.937 18.450,264.102 18.386 C 264.516 18.228,264.231 17.496,263.758 17.503 C 263.662 17.504,263.688 17.571,263.816 17.652 M296.333 18.223 C 296.333 18.490,296.378 18.522,296.533 18.367 C 296.643 18.257,296.793 18.167,296.867 18.167 C 297.083 18.167,297.019 18.632,296.792 18.713 C 296.677 18.754,296.626 18.835,296.679 18.892 C 296.860 19.090,297.354 18.580,297.248 18.305 C 297.081 17.869,296.333 17.802,296.333 18.223 M266.723 18.199 C 267.070 18.325,267.174 18.454,267.113 18.685 C 267.068 18.858,267.099 19.000,267.182 19.000 C 267.527 19.000,267.327 18.204,266.958 18.105 C 266.363 17.946,266.203 18.009,266.723 18.199 M51.860 18.615 C 51.950 18.724,52.131 18.772,52.262 18.722 C 52.631 18.581,52.543 18.417,52.098 18.417 C 51.805 18.417,51.740 18.471,51.860 18.615 M30.764 18.886 C 30.584 19.017,30.497 19.235,30.546 19.428 C 30.622 19.726,30.629 19.723,30.647 19.400 C 30.658 19.208,30.835 18.970,31.042 18.870 C 31.248 18.771,31.337 18.684,31.240 18.678 C 31.143 18.672,30.929 18.765,30.764 18.886 M31.808 18.778 C 32.122 18.844,32.184 18.943,32.121 19.276 C 32.070 19.545,32.099 19.635,32.203 19.530 C 32.495 19.239,32.271 18.752,31.832 18.723 C 31.432 18.696,31.431 18.698,31.808 18.778 M267.761 18.816 C 267.710 18.898,267.849 18.954,268.068 18.941 C 268.288 18.927,268.433 18.860,268.391 18.792 C 268.284 18.619,267.873 18.635,267.761 18.816 M295.833 19.375 C 295.833 19.444,295.979 19.500,296.157 19.500 C 296.335 19.500,296.515 19.444,296.558 19.375 C 296.600 19.306,296.454 19.250,296.234 19.250 C 296.014 19.250,295.833 19.306,295.833 19.375 M352.208 19.291 C 354.202 19.318,357.465 19.318,359.458 19.291 C 361.452 19.265,359.821 19.243,355.833 19.243 C 351.846 19.243,350.215 19.265,352.208 19.291 M384.125 19.291 C 386.073 19.318,389.260 19.318,391.208 19.291 C 393.156 19.265,391.563 19.243,387.667 19.243 C 383.771 19.243,382.177 19.265,384.125 19.291 M32.724 19.591 C 32.670 19.732,32.672 19.894,32.729 19.952 C 32.787 20.009,32.833 19.931,32.833 19.778 C 32.833 19.335,33.396 19.458,33.625 19.951 C 33.902 20.547,33.888 20.663,33.542 20.686 C 33.381 20.697,33.475 20.754,33.750 20.812 C 34.139 20.895,34.262 21.020,34.303 21.376 C 34.332 21.627,34.423 21.833,34.506 21.833 C 34.589 21.833,34.616 21.728,34.567 21.600 C 34.451 21.298,34.809 21.076,35.041 21.307 C 35.168 21.434,35.154 21.572,34.994 21.785 C 34.780 22.067,34.785 22.068,35.078 21.800 C 35.442 21.468,35.239 21.096,34.608 20.938 C 34.375 20.879,34.087 20.555,33.854 20.088 C 33.464 19.309,32.924 19.071,32.724 19.591 M268.936 19.574 C 268.993 19.722,269.185 19.921,269.364 20.016 C 269.786 20.242,269.438 20.733,268.946 20.604 C 268.719 20.545,268.672 20.572,268.793 20.693 C 269.003 20.903,269.604 20.738,269.719 20.437 C 269.765 20.317,269.584 20.014,269.318 19.762 C 269.040 19.500,268.877 19.420,268.936 19.574 M342.333 19.563 C 342.333 20.036,342.824 20.250,343.133 19.911 C 343.400 19.620,343.400 19.614,343.132 19.815 C 342.800 20.064,342.437 19.905,342.567 19.566 C 342.616 19.438,342.584 19.333,342.495 19.333 C 342.406 19.333,342.333 19.437,342.333 19.563 M380.185 19.561 C 380.043 19.733,380.048 19.832,380.206 19.964 C 380.366 20.096,380.417 20.041,380.417 19.736 C 380.417 19.263,380.426 19.271,380.185 19.561 M295.708 19.847 C 296.168 20.114,296.082 20.554,295.588 20.460 C 295.362 20.417,295.216 20.446,295.265 20.524 C 295.411 20.761,296.004 20.684,296.107 20.415 C 296.215 20.134,295.896 19.664,295.605 19.672 C 295.501 19.675,295.548 19.753,295.708 19.847 M316.700 20.033 C 316.457 20.277,316.441 20.611,316.666 20.750 C 316.762 20.809,316.815 20.694,316.791 20.480 C 316.761 20.207,316.862 20.075,317.167 19.987 C 317.518 19.885,317.530 19.864,317.242 19.850 C 317.054 19.841,316.810 19.923,316.700 20.033 M317.750 19.915 C 317.842 19.946,318.123 20.016,318.375 20.072 C 318.627 20.128,318.833 20.280,318.833 20.410 C 318.833 20.540,318.907 20.693,318.998 20.749 C 319.258 20.910,318.987 20.277,318.695 20.042 C 318.553 19.927,318.244 19.839,318.010 19.846 C 317.775 19.854,317.658 19.885,317.750 19.915 M321.990 20.071 C 322.098 20.202,322.174 20.408,322.157 20.529 C 322.061 21.239,322.157 21.421,322.426 21.037 C 322.894 20.369,324.389 21.012,324.103 21.759 C 324.046 21.907,324.074 21.974,324.169 21.915 C 324.648 21.619,323.762 20.500,323.048 20.500 C 322.761 20.500,322.500 20.371,322.372 20.167 C 322.258 19.983,322.080 19.833,321.978 19.833 C 321.847 19.833,321.851 19.903,321.990 20.071 M52.167 20.613 C 52.167 20.900,52.527 21.128,52.847 21.045 C 53.023 20.999,53.167 20.897,53.167 20.819 C 53.167 20.741,53.053 20.721,52.915 20.774 C 52.776 20.827,52.551 20.778,52.415 20.665 C 52.278 20.552,52.167 20.528,52.167 20.613 M72.083 20.946 C 72.175 21.021,72.250 21.190,72.250 21.319 C 72.250 21.449,72.362 21.586,72.500 21.624 C 72.694 21.677,72.701 21.658,72.533 21.539 C 72.413 21.455,72.338 21.290,72.366 21.172 C 72.394 21.055,72.304 20.924,72.167 20.883 C 72.018 20.839,71.984 20.864,72.083 20.946 M80.019 21.130 C 80.008 21.358,79.849 21.571,79.625 21.661 C 79.371 21.763,79.338 21.816,79.521 21.823 C 79.888 21.837,80.212 21.417,80.116 21.050 C 80.056 20.817,80.034 20.836,80.019 21.130 M124.398 21.177 C 124.418 21.542,124.770 21.834,125.167 21.818 C 125.304 21.812,125.205 21.730,124.947 21.636 C 124.656 21.530,124.511 21.378,124.565 21.238 C 124.613 21.113,124.591 20.973,124.516 20.926 C 124.441 20.880,124.388 20.993,124.398 21.177 M165.291 21.257 C 165.240 21.526,165.278 21.655,165.397 21.611 C 165.499 21.573,165.561 21.445,165.533 21.328 C 165.505 21.210,165.580 21.052,165.700 20.976 C 165.865 20.871,165.852 20.838,165.644 20.836 C 165.484 20.834,165.339 21.008,165.291 21.257 M269.435 21.137 C 269.388 21.213,269.515 21.269,269.717 21.262 C 270.052 21.251,270.091 21.350,270.179 22.417 L 270.274 23.583 270.304 22.393 C 270.334 21.176,269.846 20.472,269.435 21.137 M295.399 21.208 C 295.533 21.638,295.342 22.000,294.981 22.000 C 294.710 22.000,294.670 22.108,294.707 22.733 C 294.731 23.136,294.811 23.429,294.885 23.384 C 294.959 23.339,294.972 23.084,294.913 22.817 C 294.830 22.440,294.866 22.333,295.074 22.333 C 295.441 22.333,295.723 21.558,295.488 21.195 C 295.323 20.940,295.316 20.941,295.399 21.208 M314.028 21.650 C 313.676 22.325,313.703 22.500,314.157 22.500 C 314.371 22.500,314.412 22.360,314.360 21.809 C 314.299 21.173,314.322 21.125,314.647 21.210 C 314.841 21.261,314.958 21.234,314.907 21.151 C 314.707 20.827,314.352 21.029,314.028 21.650 M130.614 21.397 C 130.563 21.531,130.347 21.674,130.135 21.714 C 129.777 21.783,129.775 21.790,130.105 21.811 C 130.453 21.833,130.964 21.409,130.794 21.239 C 130.747 21.191,130.666 21.262,130.614 21.397 M343.000 21.333 C 343.000 21.430,343.113 21.554,343.250 21.606 C 343.387 21.659,343.500 21.876,343.500 22.088 C 343.500 22.854,344.090 23.363,344.399 22.863 C 344.445 22.787,344.318 22.731,344.117 22.738 C 343.792 22.749,343.752 22.668,343.764 22.041 C 343.772 21.651,343.744 21.367,343.701 21.410 C 343.658 21.453,343.483 21.413,343.311 21.322 C 343.098 21.207,343.000 21.211,343.000 21.333 M70.808 21.834 C 70.770 22.095,70.604 22.277,70.333 22.352 C 69.982 22.449,69.971 22.469,70.260 22.483 C 70.824 22.511,71.245 22.111,71.039 21.743 C 70.878 21.455,70.861 21.462,70.808 21.834 M81.559 21.752 C 81.454 22.027,81.766 22.500,82.052 22.500 C 82.150 22.500,82.091 22.398,81.921 22.274 C 81.732 22.136,81.653 21.942,81.718 21.774 C 81.776 21.623,81.785 21.500,81.740 21.500 C 81.694 21.500,81.613 21.613,81.559 21.752 M123.274 21.752 C 123.327 21.891,123.277 22.118,123.162 22.256 C 122.988 22.466,122.999 22.490,123.226 22.403 C 123.516 22.292,123.614 21.500,123.339 21.500 C 123.250 21.500,123.221 21.613,123.274 21.752 M167.116 21.720 C 167.172 21.810,167.079 21.985,166.910 22.109 C 166.547 22.374,166.717 22.407,167.178 22.161 C 167.555 21.959,167.608 21.556,167.257 21.556 C 167.124 21.556,167.060 21.629,167.116 21.720 M324.885 21.868 C 324.521 22.338,324.510 22.633,324.860 22.541 C 325.254 22.438,325.446 22.046,325.215 21.815 C 325.109 21.709,324.994 21.728,324.885 21.868 M75.461 21.954 C 75.761 21.991,76.211 21.990,76.461 21.952 C 76.712 21.914,76.467 21.884,75.917 21.885 C 75.367 21.886,75.162 21.917,75.461 21.954 M126.795 21.954 C 127.094 21.991,127.544 21.990,127.795 21.952 C 128.045 21.914,127.800 21.884,127.250 21.885 C 126.700 21.886,126.495 21.917,126.795 21.954 M161.796 21.956 C 162.188 21.991,162.788 21.990,163.129 21.954 C 163.471 21.919,163.150 21.890,162.417 21.890 C 161.683 21.891,161.404 21.920,161.796 21.956 M69.000 22.267 C 69.000 22.450,68.906 22.699,68.792 22.821 C 68.624 22.999,68.630 23.028,68.821 22.969 C 69.220 22.848,69.439 22.372,69.205 22.138 C 69.043 21.976,69.000 22.003,69.000 22.267 M83.525 22.148 C 83.101 22.416,83.378 22.913,83.984 22.971 C 84.521 23.022,84.832 22.818,84.826 22.417 C 84.824 22.325,84.747 22.381,84.653 22.542 C 84.462 22.870,83.749 22.935,83.568 22.641 C 83.502 22.536,83.587 22.348,83.756 22.225 C 84.090 21.981,83.892 21.915,83.525 22.148 M131.500 22.171 C 131.500 22.316,132.147 22.575,132.250 22.472 C 132.283 22.440,132.127 22.327,131.905 22.222 C 131.682 22.117,131.500 22.094,131.500 22.171 M133.333 22.250 C 133.082 22.553,133.376 23.006,133.812 22.989 C 133.996 22.982,133.962 22.930,133.708 22.828 C 133.287 22.659,133.240 22.493,133.533 22.200 C 133.643 22.090,133.690 22.000,133.637 22.000 C 133.584 22.000,133.447 22.113,133.333 22.250 M156.132 22.448 C 156.206 22.836,156.173 22.874,155.834 22.785 C 155.561 22.714,155.503 22.737,155.631 22.865 C 155.730 22.963,155.928 22.999,156.072 22.944 C 156.349 22.838,156.432 22.247,156.191 22.098 C 156.112 22.050,156.086 22.207,156.132 22.448 M168.018 22.229 C 167.773 22.523,167.906 22.838,168.441 23.229 C 168.862 23.537,168.865 23.537,168.688 23.207 C 168.590 23.023,168.388 22.826,168.241 22.770 C 167.872 22.628,168.022 22.283,168.512 22.146 C 168.879 22.044,168.884 22.032,168.562 22.017 C 168.367 22.007,168.122 22.103,168.018 22.229 M187.244 22.208 C 187.200 22.323,187.183 30.404,187.207 40.167 L 187.250 57.917 187.333 39.958 C 187.379 30.081,187.396 22.000,187.370 22.000 C 187.344 22.000,187.287 22.094,187.244 22.208 M35.593 22.417 C 35.913 22.664,35.913 22.669,35.593 22.917 C 35.415 23.054,35.350 23.167,35.448 23.167 C 35.811 23.167,36.058 22.687,35.833 22.417 C 35.719 22.279,35.546 22.167,35.448 22.167 C 35.350 22.167,35.415 22.279,35.593 22.417 M67.838 22.333 C 67.838 22.621,68.117 23.112,68.213 22.995 C 68.248 22.952,68.179 22.729,68.058 22.500 C 67.937 22.270,67.838 22.196,67.838 22.333 M121.955 22.486 C 121.861 22.846,120.833 23.017,120.833 22.672 C 120.833 22.583,120.721 22.554,120.583 22.606 C 120.202 22.753,120.269 23.333,120.667 23.333 C 120.850 23.333,121.000 23.258,121.000 23.167 C 121.000 23.075,121.216 23.000,121.480 23.000 C 122.026 23.000,122.378 22.676,122.180 22.355 C 122.081 22.195,122.022 22.230,121.955 22.486 M171.414 22.337 C 171.356 22.431,171.408 22.488,171.529 22.462 C 171.684 22.430,171.756 22.640,171.769 23.167 C 171.786 23.809,171.779 23.827,171.718 23.292 C 171.679 22.948,171.576 22.667,171.490 22.667 C 171.356 22.667,171.246 23.682,171.316 24.272 C 171.400 24.971,170.188 24.354,169.803 23.501 C 169.703 23.279,169.689 23.279,169.684 23.500 C 169.673 23.915,171.401 25.500,171.863 25.500 C 171.916 25.500,171.972 24.750,171.988 23.833 C 172.016 22.210,171.815 21.688,171.414 22.337 M286.772 22.746 C 286.825 22.886,287.023 23.000,287.212 23.000 C 287.597 23.000,287.577 22.962,287.045 22.685 C 286.733 22.523,286.690 22.533,286.772 22.746 M313.424 22.656 C 313.363 22.753,313.172 22.833,312.998 22.833 C 312.825 22.833,312.623 22.933,312.550 23.054 C 312.477 23.176,312.285 23.323,312.125 23.382 C 311.965 23.441,311.842 23.623,311.853 23.786 C 311.871 24.065,311.877 24.065,311.948 23.792 C 311.990 23.631,312.169 23.500,312.346 23.500 C 312.529 23.500,312.667 23.385,312.667 23.232 C 312.667 23.057,312.757 22.999,312.929 23.065 C 313.189 23.165,313.787 22.731,313.620 22.564 C 313.572 22.517,313.484 22.558,313.424 22.656 M67.500 22.967 C 67.500 23.132,67.406 23.361,67.292 23.477 C 67.125 23.645,67.141 23.664,67.375 23.575 C 67.629 23.479,67.815 22.667,67.583 22.667 C 67.537 22.667,67.500 22.802,67.500 22.967 M134.500 23.008 C 134.500 23.337,136.935 25.954,137.094 25.795 C 137.134 25.755,136.717 25.303,136.167 24.791 C 135.617 24.279,135.167 23.782,135.167 23.688 C 135.167 23.594,135.043 23.447,134.891 23.362 C 134.725 23.269,134.657 23.100,134.719 22.937 C 134.776 22.788,134.750 22.667,134.661 22.667 C 134.573 22.667,134.500 22.820,134.500 23.008 M169.126 23.085 C 169.063 23.414,169.092 23.465,169.263 23.323 C 169.382 23.223,169.439 23.035,169.389 22.904 C 169.262 22.574,169.217 22.604,169.126 23.085 M325.302 23.195 C 325.129 23.309,325.144 23.375,325.375 23.511 C 325.535 23.606,325.667 23.794,325.667 23.930 C 325.667 24.272,326.119 24.413,326.419 24.165 C 326.935 23.737,325.876 22.817,325.302 23.195 M65.968 23.277 C 66.207 23.328,66.333 23.459,66.301 23.624 C 66.223 24.027,65.935 24.044,65.504 23.671 C 65.291 23.485,65.108 23.333,65.099 23.333 C 65.091 23.333,65.083 23.614,65.083 23.958 C 65.083 24.472,65.024 24.583,64.750 24.583 C 64.516 24.583,64.428 24.484,64.453 24.250 C 64.474 24.067,64.449 24.010,64.398 24.125 C 64.347 24.240,64.143 24.336,63.944 24.338 C 63.619 24.343,63.612 24.360,63.875 24.513 C 64.267 24.741,64.244 25.000,63.833 25.000 C 63.622 25.000,63.505 25.107,63.513 25.292 C 63.521 25.466,63.560 25.499,63.610 25.375 C 63.657 25.260,63.876 25.167,64.097 25.167 C 64.319 25.167,64.500 25.097,64.500 25.012 C 64.500 24.926,64.669 24.833,64.875 24.803 C 65.116 24.769,65.269 24.616,65.303 24.376 C 65.347 24.067,65.449 24.009,65.886 24.043 C 66.352 24.078,66.417 24.032,66.417 23.667 C 66.417 23.341,66.326 23.244,66.000 23.223 C 65.614 23.197,65.612 23.201,65.968 23.277 M86.391 23.424 C 86.337 23.565,86.339 23.728,86.396 23.785 C 86.453 23.842,86.500 23.769,86.500 23.623 C 86.500 23.476,86.669 23.324,86.875 23.284 L 87.250 23.212 86.870 23.189 C 86.661 23.177,86.445 23.282,86.391 23.424 M119.671 23.422 C 119.909 23.709,118.580 25.166,118.197 25.038 C 117.918 24.945,117.953 24.554,118.250 24.440 C 118.388 24.387,118.491 24.210,118.481 24.047 C 118.463 23.769,118.457 23.768,118.385 24.042 C 118.343 24.202,118.202 24.333,118.071 24.333 C 117.760 24.333,117.765 24.902,118.078 25.162 C 118.358 25.395,118.826 25.097,119.572 24.210 C 119.983 23.722,120.013 23.167,119.628 23.167 C 119.532 23.167,119.551 23.277,119.671 23.422 M153.794 23.588 C 153.839 23.827,153.794 24.000,153.686 24.000 C 153.584 24.000,153.444 24.004,153.375 24.010 C 153.306 24.015,153.201 23.846,153.142 23.635 C 153.066 23.367,153.028 23.339,153.017 23.542 C 153.007 23.702,152.887 23.833,152.750 23.833 C 152.420 23.833,152.427 24.436,152.759 24.564 C 153.326 24.781,154.351 23.570,153.857 23.265 C 153.779 23.216,153.750 23.362,153.794 23.588 M286.192 23.481 C 286.068 23.559,285.993 23.745,286.025 23.893 C 286.069 24.096,286.131 24.061,286.276 23.748 C 286.382 23.520,286.457 23.334,286.443 23.336 C 286.428 23.337,286.316 23.403,286.192 23.481 M326.417 23.833 C 326.417 23.968,326.285 24.104,326.125 24.135 C 325.920 24.174,325.833 24.084,325.833 23.833 C 325.833 23.582,325.920 23.492,326.125 23.532 C 326.285 23.563,326.417 23.698,326.417 23.833 M52.982 24.106 C 52.740 24.397,53.024 25.233,53.389 25.304 C 53.542 25.334,53.667 25.280,53.667 25.184 C 53.667 25.089,53.564 25.050,53.439 25.098 C 53.300 25.151,53.172 25.040,53.113 24.814 C 52.998 24.373,53.098 24.167,53.427 24.167 C 53.559 24.167,53.667 24.104,53.667 24.028 C 53.667 23.810,53.181 23.865,52.982 24.106 M86.907 24.453 C 87.258 24.832,87.362 24.869,87.538 24.679 C 87.713 24.491,87.699 24.469,87.461 24.553 C 87.273 24.619,87.111 24.540,86.997 24.327 C 86.900 24.147,86.746 24.000,86.654 24.000 C 86.562 24.000,86.676 24.204,86.907 24.453 M153.167 24.250 C 153.167 24.387,153.092 24.500,153.000 24.500 C 152.908 24.500,152.833 24.387,152.833 24.250 C 152.833 24.113,152.908 24.000,153.000 24.000 C 153.092 24.000,153.167 24.113,153.167 24.250 M293.792 24.172 C 293.998 24.255,294.173 24.456,294.180 24.620 C 294.188 24.804,294.226 24.835,294.279 24.703 C 294.392 24.421,294.031 23.997,293.688 24.011 C 293.504 24.018,293.538 24.070,293.792 24.172 M35.750 24.333 C 35.693 24.425,35.804 24.500,35.996 24.500 C 36.201 24.500,36.406 24.654,36.495 24.875 C 36.593 25.119,36.649 25.157,36.656 24.984 C 36.675 24.515,35.956 23.999,35.750 24.333 M270.081 24.337 C 270.016 24.443,269.821 24.492,269.648 24.447 C 269.474 24.401,269.332 24.451,269.331 24.557 C 269.329 24.665,269.257 24.640,269.167 24.500 C 269.003 24.247,268.989 24.273,268.917 24.977 C 268.895 25.193,268.773 25.436,268.647 25.516 C 268.466 25.630,268.482 25.662,268.721 25.664 C 268.914 25.666,269.005 25.768,268.971 25.945 C 268.886 26.383,268.515 26.399,268.344 25.972 C 268.252 25.743,268.183 25.689,268.177 25.842 C 268.165 26.148,268.483 26.500,268.771 26.500 C 269.035 26.500,269.500 25.568,269.500 25.040 C 269.500 24.754,269.572 24.659,269.738 24.722 C 269.981 24.816,270.454 24.398,270.290 24.235 C 270.241 24.185,270.147 24.231,270.081 24.337 M285.500 24.750 C 285.334 24.949,285.334 25.051,285.500 25.250 C 285.732 25.530,286.098 25.579,286.240 25.349 C 286.292 25.266,286.192 25.235,286.019 25.280 C 285.571 25.397,285.382 24.998,285.756 24.725 C 285.925 24.601,285.984 24.500,285.886 24.500 C 285.788 24.500,285.614 24.613,285.500 24.750 M327.060 24.783 C 327.139 24.900,327.167 25.093,327.121 25.211 C 327.076 25.330,327.217 25.511,327.436 25.614 C 327.951 25.858,327.932 25.704,327.371 25.077 C 327.121 24.798,326.981 24.666,327.060 24.783 M311.068 25.059 C 310.598 25.542,310.484 26.087,310.777 26.451 C 311.004 26.732,311.009 26.730,310.865 26.417 C 310.595 25.829,311.386 24.690,311.922 24.896 C 312.073 24.954,312.141 24.926,312.082 24.831 C 311.919 24.567,311.444 24.673,311.068 25.059 M88.417 25.342 C 89.088 26.129,90.202 27.167,90.375 27.167 C 90.473 27.167,90.287 26.960,89.961 26.708 C 89.635 26.456,89.229 26.039,89.059 25.781 C 88.889 25.522,88.600 25.230,88.417 25.131 L 88.083 24.951 88.417 25.342 M150.985 26.042 C 150.022 27.034,149.963 27.068,149.737 26.760 C 149.506 26.444,149.500 26.445,149.500 26.801 C 149.500 27.397,150.019 27.237,150.883 26.375 C 152.046 25.214,152.238 25.000,152.110 25.000 C 152.047 25.000,151.541 25.469,150.985 26.042 M293.833 25.167 L 293.417 25.300 293.875 25.317 C 294.127 25.326,294.333 25.258,294.333 25.167 C 294.333 25.075,294.315 25.007,294.292 25.017 C 294.269 25.026,294.063 25.093,293.833 25.167 M35.528 25.500 C 35.574 25.637,35.786 25.750,36.000 25.750 C 36.214 25.750,36.426 25.637,36.472 25.500 C 36.542 25.286,36.515 25.283,36.277 25.479 C 36.042 25.673,35.958 25.673,35.723 25.479 C 35.485 25.283,35.458 25.286,35.528 25.500 M63.206 25.778 C 63.091 25.824,62.918 26.025,62.822 26.223 C 62.673 26.532,62.681 26.547,62.873 26.333 C 62.997 26.196,63.204 25.990,63.333 25.875 C 63.578 25.656,63.554 25.638,63.206 25.778 M117.291 25.858 C 117.435 26.001,117.371 26.167,117.033 26.524 C 116.578 27.006,116.167 27.147,116.167 26.821 C 116.167 26.723,116.049 26.760,115.906 26.903 C 115.452 27.358,115.928 27.711,116.431 27.292 C 117.468 26.427,117.866 25.667,117.282 25.667 C 117.156 25.667,117.158 25.725,117.291 25.858 M284.744 26.223 C 284.194 26.537,283.471 27.266,283.958 27.015 C 284.165 26.908,284.333 26.743,284.333 26.648 C 284.333 26.549,284.602 26.498,284.958 26.528 C 285.424 26.568,285.583 26.519,285.583 26.335 C 285.583 26.023,285.186 25.970,284.744 26.223 M137.484 26.436 C 137.293 26.666,137.314 26.748,137.630 27.004 C 137.834 27.169,138.000 27.490,138.000 27.717 C 138.000 28.157,138.448 28.452,138.712 28.188 C 138.810 28.090,138.752 28.041,138.559 28.057 C 138.327 28.077,138.237 27.952,138.199 27.559 C 138.165 27.205,138.042 27.006,137.824 26.949 C 137.388 26.835,137.414 26.524,137.875 26.339 C 138.129 26.237,138.162 26.184,137.979 26.177 C 137.830 26.171,137.607 26.288,137.484 26.436 M267.019 26.452 C 266.994 26.934,267.551 27.257,267.829 26.922 C 267.977 26.744,267.979 26.608,267.839 26.384 C 267.670 26.114,267.661 26.120,267.749 26.444 C 267.803 26.643,267.784 26.844,267.707 26.892 C 267.498 27.021,267.216 26.793,267.122 26.417 C 267.045 26.110,267.037 26.113,267.019 26.452 M61.763 27.082 C 61.403 27.402,61.143 27.698,61.184 27.740 C 61.259 27.815,62.500 26.714,62.500 26.573 C 62.500 26.441,62.424 26.494,61.763 27.082 M266.292 26.839 C 266.498 26.921,266.667 27.079,266.667 27.189 C 266.667 27.299,266.715 27.341,266.774 27.282 C 266.936 27.119,266.496 26.665,266.188 26.677 C 266.004 26.684,266.038 26.737,266.292 26.839 M91.167 27.083 C 91.167 27.312,90.963 27.410,90.613 27.349 C 90.537 27.336,90.523 27.402,90.581 27.496 C 90.727 27.733,91.333 27.396,91.333 27.077 C 91.333 26.943,91.296 26.833,91.250 26.833 C 91.204 26.833,91.167 26.946,91.167 27.083 M310.200 27.033 C 310.090 27.143,310.007 27.387,310.017 27.575 C 310.031 27.862,310.052 27.851,310.152 27.500 C 310.233 27.216,310.384 27.087,310.627 27.096 C 310.823 27.102,310.945 27.046,310.899 26.971 C 310.775 26.771,310.431 26.802,310.200 27.033 M327.861 26.980 C 327.692 27.087,327.722 27.142,327.986 27.211 C 328.382 27.315,328.462 27.956,328.125 28.334 C 327.948 28.532,327.960 28.534,328.208 28.347 C 328.732 27.951,328.399 26.640,327.861 26.980 M344.673 26.926 C 344.660 27.290,345.092 27.685,345.379 27.575 C 345.537 27.514,345.667 27.394,345.667 27.307 C 345.667 27.211,345.553 27.214,345.375 27.314 C 345.148 27.441,345.039 27.397,344.881 27.113 C 344.770 26.914,344.676 26.829,344.673 26.926 M149.000 27.367 C 149.000 27.648,148.894 27.837,148.708 27.885 C 148.489 27.942,148.509 27.966,148.792 27.981 C 149.267 28.005,149.293 28.508,148.833 28.795 C 148.650 28.909,148.500 29.115,148.500 29.251 C 148.500 29.473,148.308 29.571,147.969 29.523 C 147.906 29.514,147.869 29.712,147.886 29.962 C 147.912 30.353,147.859 30.411,147.500 30.377 C 147.118 30.341,147.110 30.353,147.402 30.525 C 147.762 30.738,148.654 29.861,148.662 29.286 C 148.665 29.123,148.780 28.946,148.917 28.893 C 149.482 28.677,149.755 27.681,149.358 27.284 L 149.000 26.926 149.000 27.367 M265.338 27.105 C 265.329 27.436,265.799 27.693,266.282 27.620 C 266.737 27.552,266.735 27.549,266.217 27.525 C 265.905 27.510,265.613 27.379,265.513 27.208 C 265.420 27.048,265.341 27.001,265.338 27.105 M283.292 27.513 C 283.131 27.607,283.000 27.830,283.000 28.008 C 283.000 28.187,282.925 28.333,282.833 28.333 C 282.610 28.333,282.620 28.785,282.846 28.925 C 282.945 28.986,283.173 28.877,283.353 28.684 C 283.619 28.399,283.632 28.333,283.423 28.333 C 283.088 28.333,283.097 28.020,283.442 27.638 C 283.753 27.295,283.717 27.266,283.292 27.513 M52.344 27.737 C 52.229 27.876,52.174 28.085,52.221 28.203 C 52.277 28.341,52.312 28.317,52.320 28.135 C 52.339 27.731,52.637 27.602,52.951 27.861 C 53.180 28.049,53.208 28.045,53.138 27.833 C 53.024 27.487,52.595 27.435,52.344 27.737 M293.667 27.628 C 293.667 27.729,293.460 27.839,293.208 27.874 C 292.817 27.927,292.794 27.957,293.055 28.074 C 293.377 28.221,294.001 27.779,293.782 27.560 C 293.718 27.496,293.667 27.527,293.667 27.628 M35.761 28.101 C 35.678 28.428,35.572 28.514,35.327 28.450 C 35.054 28.379,35.018 28.429,35.102 28.766 C 35.185 29.097,35.140 29.167,34.840 29.167 C 34.545 29.167,34.497 29.097,34.580 28.792 C 34.669 28.467,34.658 28.456,34.499 28.710 C 34.071 29.392,34.839 29.556,35.438 28.910 C 35.797 28.522,36.151 27.667,35.953 27.667 C 35.907 27.667,35.820 27.862,35.761 28.101 M60.568 28.417 C 60.320 28.646,60.062 28.833,59.993 28.833 C 59.925 28.833,59.820 28.960,59.761 29.116 C 59.668 29.356,59.709 29.350,60.034 29.074 C 60.713 28.499,61.215 28.000,61.115 28.000 C 61.061 28.000,60.815 28.188,60.568 28.417 M91.061 28.247 C 90.963 28.504,91.782 29.504,92.083 29.495 C 92.175 29.492,92.119 29.413,91.958 29.320 C 91.798 29.227,91.667 29.041,91.667 28.908 C 91.667 28.775,91.548 28.667,91.403 28.667 C 91.258 28.667,91.173 28.573,91.215 28.458 C 91.257 28.344,91.376 28.269,91.479 28.292 C 91.582 28.315,91.667 28.258,91.667 28.167 C 91.667 27.905,91.167 27.972,91.061 28.247 M138.675 28.740 C 138.197 29.316,138.841 30.392,139.357 29.877 C 139.451 29.782,139.364 29.728,139.130 29.736 C 138.568 29.757,138.486 28.894,139.030 28.676 C 139.284 28.574,139.324 28.518,139.145 28.511 C 138.996 28.505,138.785 28.608,138.675 28.740 M345.625 28.680 C 345.465 28.773,345.336 28.977,345.338 29.133 C 345.343 29.395,345.357 29.394,345.513 29.125 C 345.607 28.965,345.792 28.833,345.925 28.833 C 346.058 28.833,346.167 28.758,346.167 28.667 C 346.167 28.458,345.999 28.462,345.625 28.680 M281.333 29.000 C 281.219 29.214,280.984 29.333,280.679 29.333 C 280.409 29.333,280.161 29.442,280.106 29.583 C 280.054 29.721,279.819 29.833,279.584 29.833 C 279.284 29.833,279.112 29.955,279.001 30.247 C 278.888 30.545,278.761 30.632,278.547 30.558 C 278.284 30.467,278.286 30.483,278.567 30.702 C 278.742 30.838,278.839 31.023,278.783 31.114 C 278.727 31.204,278.791 31.278,278.924 31.278 C 279.057 31.278,279.167 31.183,279.167 31.067 C 279.167 30.951,279.335 30.824,279.542 30.784 L 279.917 30.712 279.529 30.689 C 278.908 30.653,279.132 30.095,279.793 30.031 C 280.127 29.999,280.333 29.888,280.333 29.739 C 280.333 29.585,280.509 29.500,280.827 29.500 C 281.153 29.500,281.383 29.385,281.502 29.162 C 281.602 28.976,281.755 28.868,281.842 28.922 C 282.103 29.083,282.021 29.470,281.708 29.552 C 281.489 29.609,281.509 29.633,281.792 29.647 C 282.242 29.671,282.336 28.934,281.903 28.768 C 281.535 28.627,281.533 28.628,281.333 29.000 M309.616 29.557 C 309.555 29.718,309.644 29.760,309.930 29.705 C 310.150 29.663,310.288 29.562,310.238 29.481 C 310.100 29.257,309.713 29.304,309.616 29.557 M345.239 33.417 C 345.239 35.617,345.262 36.494,345.291 35.365 C 345.320 34.237,345.320 32.437,345.291 31.365 C 345.262 30.294,345.238 31.217,345.239 33.417 M33.792 29.777 C 34.098 29.901,34.047 30.153,33.625 30.599 C 33.061 31.194,32.158 31.029,32.662 30.422 C 32.816 30.237,32.786 30.210,32.510 30.283 C 32.087 30.393,32.078 30.535,32.471 30.891 C 32.917 31.294,33.364 31.214,33.808 30.653 C 34.201 30.156,34.195 29.655,33.797 29.680 C 33.630 29.690,33.628 29.711,33.792 29.777 M58.601 29.804 C 58.555 29.880,58.682 29.936,58.883 29.929 C 59.104 29.922,59.250 30.016,59.250 30.167 C 59.250 30.317,59.085 30.424,58.833 30.435 C 58.161 30.464,58.069 30.496,58.269 30.628 C 58.738 30.936,58.726 31.550,58.253 31.460 C 57.847 31.382,57.828 31.399,58.059 31.631 C 58.423 31.995,58.869 31.618,58.730 31.064 C 58.659 30.779,58.700 30.667,58.878 30.667 C 59.300 30.667,59.577 30.210,59.333 29.917 C 59.107 29.644,58.736 29.587,58.601 29.804 M92.246 30.013 C 92.186 30.203,92.181 30.403,92.235 30.457 C 92.289 30.511,92.333 30.434,92.333 30.286 C 92.333 30.138,92.465 29.940,92.625 29.847 C 92.891 29.692,92.892 29.676,92.636 29.672 C 92.482 29.669,92.306 29.822,92.246 30.013 M51.740 30.178 C 51.571 30.364,51.529 30.500,51.641 30.500 C 51.747 30.500,51.833 30.416,51.833 30.314 C 51.833 30.210,51.980 30.166,52.167 30.215 C 52.543 30.313,52.627 30.084,52.266 29.946 C 52.137 29.896,51.900 30.001,51.740 30.178 M93.013 30.033 C 93.006 30.189,92.869 30.393,92.708 30.487 C 92.548 30.580,92.501 30.659,92.605 30.662 C 92.880 30.669,93.212 30.212,93.112 29.964 C 93.057 29.826,93.022 29.851,93.013 30.033 M293.227 31.333 C 293.227 32.204,293.255 32.560,293.289 32.125 C 293.324 31.690,293.324 30.977,293.289 30.542 C 293.255 30.106,293.227 30.462,293.227 31.333 M328.145 30.125 C 327.938 30.389,327.944 30.395,328.208 30.188 C 328.442 30.004,328.550 30.000,328.750 30.167 C 328.894 30.286,329.000 30.302,329.000 30.205 C 329.000 30.112,328.881 29.990,328.736 29.934 C 328.385 29.800,328.406 29.793,328.145 30.125 M309.385 30.917 C 309.386 31.467,309.417 31.672,309.454 31.372 C 309.491 31.072,309.490 30.622,309.452 30.372 C 309.414 30.122,309.384 30.367,309.385 30.917 M277.762 30.778 C 277.704 30.931,277.744 31.137,277.852 31.236 C 277.997 31.369,278.017 31.359,277.927 31.201 C 277.860 31.082,277.895 30.876,278.006 30.743 C 278.125 30.600,278.138 30.500,278.038 30.500 C 277.945 30.500,277.821 30.625,277.762 30.778 M329.052 31.417 C 329.053 31.967,329.084 32.172,329.121 31.872 C 329.158 31.572,329.157 31.122,329.119 30.872 C 329.081 30.622,329.051 30.867,329.052 31.417 M26.033 31.033 C 25.392 31.675,25.971 31.866,28.333 31.792 L 30.083 31.737 28.135 31.702 C 26.133 31.666,25.651 31.501,26.256 31.058 C 26.425 30.934,26.489 30.833,26.399 30.833 C 26.308 30.833,26.143 30.923,26.033 31.033 M31.572 31.113 C 31.648 31.365,31.590 31.533,31.382 31.664 C 31.218 31.768,31.190 31.825,31.321 31.791 C 31.728 31.687,31.940 31.205,31.686 30.963 C 31.501 30.787,31.482 30.813,31.572 31.113 M73.979 31.292 C 73.768 31.560,73.775 31.564,74.060 31.340 C 74.336 31.122,74.395 31.130,74.601 31.413 C 74.729 31.588,74.833 31.656,74.833 31.565 C 74.833 31.063,74.293 30.890,73.979 31.292 M77.533 31.200 C 77.302 31.431,77.271 31.775,77.471 31.899 C 77.546 31.945,77.602 31.818,77.596 31.617 C 77.587 31.367,77.675 31.257,77.873 31.273 C 78.033 31.285,78.122 31.229,78.072 31.148 C 77.947 30.945,77.771 30.962,77.533 31.200 M276.054 31.267 C 275.937 31.571,276.276 31.845,276.610 31.717 C 276.916 31.599,276.891 31.225,276.570 31.101 C 276.198 30.959,276.168 30.968,276.054 31.267 M92.812 31.542 C 93.065 31.864,93.425 31.923,93.582 31.669 C 93.641 31.574,93.573 31.546,93.423 31.604 C 93.280 31.659,93.032 31.602,92.873 31.477 C 92.611 31.272,92.605 31.278,92.812 31.542 M51.168 31.748 C 51.058 31.880,51.007 32.085,51.054 32.203 C 51.110 32.341,51.145 32.317,51.154 32.135 C 51.173 31.720,51.436 31.627,51.737 31.927 C 51.881 32.072,52.000 32.113,52.000 32.018 C 52.000 31.686,51.385 31.487,51.168 31.748 M277.384 31.774 C 277.249 32.126,277.758 32.507,278.324 32.477 L 278.750 32.455 278.333 32.378 C 277.778 32.276,277.499 32.029,277.611 31.738 C 277.661 31.607,277.654 31.500,277.596 31.500 C 277.537 31.500,277.442 31.623,277.384 31.774 M78.611 31.778 C 78.447 31.942,78.476 32.500,78.648 32.500 C 78.730 32.500,78.786 32.377,78.773 32.226 C 78.760 32.076,78.854 31.916,78.982 31.871 C 79.158 31.809,79.187 31.895,79.104 32.228 C 79.012 32.595,79.050 32.667,79.335 32.667 C 79.816 32.667,79.962 33.159,79.569 33.456 C 79.257 33.691,79.257 33.695,79.583 33.639 C 80.118 33.545,80.093 32.831,79.534 32.205 C 79.058 31.671,78.825 31.564,78.611 31.778 M147.266 31.934 C 147.200 32.107,147.061 32.162,146.874 32.091 C 146.650 32.005,146.628 32.026,146.780 32.179 C 147.029 32.429,147.500 32.261,147.500 31.922 C 147.500 31.591,147.396 31.596,147.266 31.934 M57.694 32.112 C 58.030 32.201,58.217 32.616,57.985 32.759 C 57.893 32.816,57.705 32.820,57.567 32.767 C 57.425 32.712,57.360 32.742,57.418 32.835 C 57.567 33.077,57.929 33.036,58.167 32.750 C 58.420 32.445,58.120 31.989,57.688 32.019 C 57.444 32.037,57.445 32.046,57.694 32.112 M139.215 32.564 C 139.291 32.795,140.000 32.916,140.000 32.698 C 140.000 32.610,139.810 32.502,139.577 32.458 C 139.310 32.407,139.176 32.446,139.215 32.564 M279.505 32.425 C 279.496 32.738,279.889 33.000,280.367 33.000 C 280.623 33.000,280.833 33.063,280.833 33.140 C 280.833 33.496,281.715 33.690,281.985 33.393 C 282.228 33.126,282.227 33.119,281.979 33.304 C 281.620 33.572,281.167 33.381,281.167 32.961 C 281.167 32.662,281.093 32.636,280.509 32.729 C 279.984 32.813,279.816 32.775,279.680 32.542 C 279.587 32.382,279.508 32.329,279.505 32.425 M72.979 32.583 C 72.895 32.918,72.941 33.620,73.042 33.558 C 73.110 33.515,73.167 33.304,73.167 33.087 C 73.167 32.871,73.260 32.657,73.375 32.610 C 73.499 32.560,73.466 32.521,73.292 32.513 C 73.131 32.506,72.991 32.537,72.979 32.583 M50.500 32.917 C 50.249 33.220,50.542 33.673,50.979 33.656 C 51.154 33.649,51.110 33.589,50.856 33.488 C 50.389 33.301,50.653 32.788,51.137 32.942 C 51.376 33.019,51.381 33.006,51.167 32.852 C 50.834 32.612,50.745 32.621,50.500 32.917 M72.375 32.777 C 72.127 32.877,72.097 33.437,72.331 33.582 C 72.426 33.641,72.454 33.573,72.396 33.423 C 72.341 33.280,72.389 33.051,72.502 32.915 C 72.719 32.653,72.709 32.642,72.375 32.777 M93.252 32.994 C 93.025 33.710,93.972 34.415,94.236 33.726 C 94.327 33.490,94.304 33.484,94.069 33.678 C 93.731 33.959,93.273 33.452,93.427 32.967 C 93.480 32.802,93.485 32.667,93.439 32.667 C 93.393 32.667,93.309 32.814,93.252 32.994 M146.710 33.000 C 146.744 33.353,146.686 33.411,146.333 33.377 C 145.959 33.342,145.948 33.356,146.226 33.520 C 146.669 33.782,147.115 33.335,146.854 32.893 C 146.690 32.615,146.675 32.626,146.710 33.000 M165.208 32.777 C 165.094 32.823,165.009 33.061,165.019 33.306 C 165.034 33.653,165.056 33.678,165.121 33.417 C 165.166 33.233,165.279 32.990,165.372 32.875 C 165.551 32.654,165.537 32.645,165.208 32.777 M168.292 32.871 C 168.387 32.988,168.501 33.233,168.546 33.417 C 168.611 33.680,168.632 33.657,168.647 33.309 C 168.659 33.042,168.559 32.828,168.393 32.764 C 168.187 32.685,168.162 32.711,168.292 32.871 M118.910 33.058 C 119.079 33.182,119.164 33.369,119.099 33.475 C 119.034 33.580,119.060 33.667,119.157 33.667 C 119.254 33.667,119.333 33.569,119.333 33.450 C 119.333 33.194,119.003 32.833,118.768 32.833 C 118.677 32.833,118.741 32.934,118.910 33.058 M166.208 33.013 C 166.369 33.107,166.500 33.292,166.500 33.425 C 166.500 33.558,166.568 33.667,166.652 33.667 C 166.735 33.667,166.786 33.548,166.765 33.403 C 166.725 33.129,166.371 32.837,166.083 32.841 C 165.992 32.842,166.048 32.920,166.208 33.013 M292.583 33.167 C 292.262 33.305,292.263 33.310,292.615 33.322 C 292.816 33.328,293.027 33.258,293.083 33.167 C 293.205 32.970,293.042 32.970,292.583 33.167 M328.789 33.436 C 328.743 33.675,328.763 34.069,328.834 34.311 C 328.933 34.653,328.962 34.556,328.965 33.875 C 328.968 32.908,328.915 32.775,328.789 33.436 M282.611 33.278 C 282.374 33.515,282.525 33.859,283.147 34.500 C 283.904 35.280,284.500 35.390,284.500 34.750 C 284.500 34.521,284.432 34.333,284.349 34.333 C 284.266 34.333,284.237 34.483,284.285 34.667 C 284.346 34.898,284.290 35.000,284.103 35.000 C 283.955 35.000,283.833 34.925,283.833 34.833 C 283.833 34.742,283.735 34.667,283.615 34.667 C 283.131 34.667,282.476 33.438,282.875 33.277 C 282.991 33.230,283.004 33.187,282.903 33.180 C 282.803 33.173,282.672 33.217,282.611 33.278 M122.094 33.482 C 122.044 33.564,122.182 33.620,122.402 33.607 C 122.622 33.594,122.767 33.527,122.724 33.458 C 122.618 33.286,122.206 33.301,122.094 33.482 M309.774 33.585 C 309.819 33.703,309.776 33.849,309.678 33.910 C 309.580 33.970,309.507 34.221,309.515 34.468 C 309.529 34.890,309.539 34.884,309.690 34.360 C 309.801 33.977,309.926 33.833,310.092 33.897 C 310.229 33.950,310.333 33.892,310.333 33.764 C 310.333 33.640,310.189 33.501,310.012 33.455 C 309.797 33.399,309.719 33.442,309.774 33.585 M117.079 33.674 C 117.025 33.762,117.027 33.908,117.083 34.000 C 117.240 34.253,117.611 34.199,117.611 33.924 C 117.611 33.633,117.218 33.448,117.079 33.674 M49.654 34.439 C 49.282 34.843,49.278 34.864,49.605 34.694 C 49.801 34.592,50.005 34.395,50.058 34.255 C 50.195 33.899,50.119 33.934,49.654 34.439 M57.513 34.208 C 57.498 34.545,56.906 34.612,56.777 34.292 C 56.714 34.135,56.690 34.133,56.680 34.286 C 56.673 34.397,56.809 34.564,56.982 34.657 C 57.343 34.850,57.761 34.500,57.612 34.131 C 57.558 33.996,57.521 34.025,57.513 34.208 M80.198 34.103 C 80.353 34.149,80.517 34.314,80.564 34.469 C 80.624 34.673,80.638 34.659,80.614 34.419 C 80.594 34.224,80.442 34.073,80.248 34.053 C 80.008 34.028,79.994 34.042,80.198 34.103 M123.226 34.432 C 123.213 34.651,123.269 34.790,123.351 34.739 C 123.532 34.627,123.548 34.216,123.375 34.109 C 123.306 34.067,123.239 34.212,123.226 34.432 M162.967 34.468 C 162.626 34.816,162.560 34.985,162.691 35.171 C 162.835 35.374,162.849 35.367,162.772 35.128 C 162.714 34.948,162.796 34.776,162.987 34.674 C 163.156 34.583,163.338 34.395,163.392 34.255 C 163.521 33.917,163.493 33.931,162.967 34.468 M94.475 34.445 C 94.157 34.529,93.759 35.380,93.887 35.700 C 93.935 35.819,93.980 35.744,93.987 35.534 C 93.994 35.323,94.198 34.967,94.441 34.742 C 94.684 34.517,94.852 34.342,94.816 34.353 C 94.780 34.363,94.626 34.405,94.475 34.445 M116.264 34.774 C 116.177 35.001,116.201 35.012,116.411 34.838 C 116.549 34.723,116.780 34.674,116.923 34.729 C 117.073 34.787,117.141 34.760,117.082 34.665 C 116.920 34.402,116.379 34.474,116.264 34.774 M329.057 36.250 C 329.058 36.983,329.087 37.263,329.122 36.871 C 329.157 36.479,329.157 35.879,329.121 35.537 C 329.085 35.196,329.057 35.517,329.057 36.250 M116.442 35.375 C 116.485 35.444,116.665 35.500,116.843 35.500 C 117.021 35.500,117.167 35.444,117.167 35.375 C 117.167 35.306,116.986 35.250,116.766 35.250 C 116.546 35.250,116.400 35.306,116.442 35.375 M139.934 35.430 C 139.879 35.575,139.838 35.782,139.844 35.889 C 139.850 35.996,139.922 35.916,140.004 35.711 C 140.109 35.451,140.239 35.372,140.438 35.448 C 140.630 35.521,140.682 35.494,140.601 35.362 C 140.428 35.082,140.053 35.121,139.934 35.430 M170.667 35.305 C 170.667 35.381,170.835 35.437,171.042 35.430 C 171.478 35.414,171.495 36.106,171.066 36.439 C 170.855 36.603,170.856 36.640,171.078 36.725 C 171.219 36.779,171.333 36.750,171.333 36.661 C 171.333 36.388,171.807 36.483,171.987 36.792 C 172.145 37.063,172.157 37.064,172.162 36.798 C 172.164 36.640,172.011 36.428,171.820 36.326 C 171.622 36.220,171.513 36.040,171.565 35.904 C 171.717 35.507,171.487 35.167,171.066 35.167 C 170.846 35.167,170.667 35.229,170.667 35.305 M292.428 35.314 C 292.378 35.395,292.524 35.498,292.753 35.541 C 293.090 35.606,293.134 35.578,292.981 35.394 C 292.764 35.132,292.559 35.103,292.428 35.314 M145.375 35.500 C 145.449 35.775,146.333 35.954,146.333 35.693 C 146.333 35.604,146.176 35.572,145.983 35.623 C 145.780 35.676,145.564 35.617,145.470 35.482 C 145.335 35.289,145.319 35.292,145.375 35.500 M162.167 35.917 C 161.948 36.180,162.185 36.667,162.532 36.667 C 162.619 36.667,162.572 36.548,162.427 36.403 C 162.093 36.069,162.256 35.786,162.702 35.928 C 162.928 36.000,163.004 35.974,162.928 35.851 C 162.767 35.591,162.411 35.622,162.167 35.917 M49.164 36.130 C 49.162 36.376,49.139 36.381,49.000 36.167 C 48.892 36.000,48.838 35.986,48.836 36.125 C 48.834 36.240,48.735 36.333,48.615 36.333 C 48.305 36.333,47.622 37.309,47.731 37.595 C 47.782 37.726,47.938 37.833,48.078 37.833 C 48.319 37.833,48.359 37.721,48.400 36.917 C 48.413 36.656,48.533 36.584,48.950 36.584 C 49.512 36.586,49.844 36.104,49.398 35.933 C 49.256 35.878,49.166 35.955,49.164 36.130 M71.201 36.042 C 71.070 36.200,71.140 36.250,71.493 36.250 C 71.796 36.250,71.930 36.178,71.878 36.042 C 71.834 35.927,71.702 35.833,71.586 35.833 C 71.469 35.833,71.296 35.927,71.201 36.042 M293.225 37.167 C 293.225 37.946,293.254 38.265,293.289 37.875 C 293.324 37.485,293.324 36.848,293.289 36.458 C 293.254 36.069,293.225 36.387,293.225 37.167 M309.375 36.417 C 309.377 36.783,309.411 36.914,309.451 36.706 C 309.491 36.499,309.490 36.199,309.448 36.040 C 309.406 35.880,309.374 36.050,309.375 36.417 M56.957 36.370 C 56.900 36.519,56.680 36.671,56.469 36.708 C 56.122 36.768,56.114 36.788,56.388 36.910 C 56.740 37.067,57.248 36.662,57.133 36.316 C 57.081 36.160,57.033 36.175,56.957 36.370 M115.709 36.333 C 115.746 36.471,115.958 36.597,116.180 36.614 C 116.498 36.638,116.513 36.625,116.250 36.553 C 116.067 36.503,115.855 36.376,115.779 36.272 C 115.688 36.147,115.664 36.168,115.709 36.333 M285.958 36.282 C 285.457 36.413,285.687 37.051,286.547 37.917 C 287.044 38.416,287.044 38.416,286.753 37.958 C 286.593 37.706,286.389 37.500,286.299 37.500 C 286.206 37.500,286.176 37.219,286.230 36.833 C 286.282 36.467,286.307 36.175,286.287 36.186 C 286.267 36.197,286.119 36.240,285.958 36.282 M139.667 48.200 C 139.621 54.681,139.640 59.927,139.709 59.857 C 139.779 59.788,139.816 54.485,139.793 48.074 L 139.750 36.417 139.667 48.200 M80.215 36.962 C 80.440 37.210,80.455 37.317,80.289 37.503 C 80.116 37.697,80.128 37.700,80.365 37.521 C 80.684 37.281,80.606 36.910,80.205 36.756 C 79.965 36.664,79.966 36.686,80.215 36.962 M93.875 36.988 C 93.980 37.395,94.461 37.607,94.704 37.353 C 94.880 37.168,94.853 37.148,94.554 37.239 C 94.302 37.315,94.134 37.257,94.003 37.049 C 93.899 36.885,93.842 36.857,93.875 36.988 M144.928 36.981 C 144.878 37.062,145.017 37.163,145.237 37.205 C 145.523 37.260,145.612 37.218,145.550 37.057 C 145.453 36.804,145.067 36.757,144.928 36.981 M161.523 37.055 C 161.261 37.371,161.670 37.896,162.094 37.787 C 162.387 37.713,162.384 37.704,162.059 37.686 C 161.544 37.658,161.419 37.189,161.878 37.004 C 162.132 36.902,162.164 36.851,161.979 36.844 C 161.830 36.838,161.625 36.933,161.523 37.055 M71.000 37.208 C 71.000 37.358,71.080 37.530,71.178 37.590 C 71.464 37.767,71.492 37.609,71.236 37.260 C 71.039 36.989,71.000 36.981,71.000 37.208 M310.241 37.348 C 310.179 37.448,309.987 37.492,309.814 37.447 C 309.641 37.401,309.542 37.432,309.593 37.516 C 309.735 37.745,310.101 37.696,310.333 37.417 C 310.447 37.279,310.499 37.167,310.447 37.167 C 310.395 37.167,310.303 37.248,310.241 37.348 M172.013 37.714 C 172.006 37.877,171.831 38.079,171.625 38.161 C 171.371 38.263,171.338 38.316,171.521 38.323 C 171.864 38.336,172.226 37.913,172.112 37.631 C 172.059 37.498,172.021 37.530,172.013 37.714 M328.028 37.667 C 328.136 37.994,328.650 38.087,328.893 37.824 C 329.041 37.664,329.014 37.642,328.771 37.728 C 328.599 37.789,328.343 37.744,328.202 37.628 C 327.990 37.453,327.960 37.460,328.028 37.667 M72.042 37.782 C 72.202 37.823,72.465 37.823,72.625 37.782 C 72.785 37.740,72.654 37.705,72.333 37.705 C 72.012 37.705,71.881 37.740,72.042 37.782 M76.125 37.790 C 76.790 37.822,77.877 37.822,78.542 37.790 C 79.206 37.759,78.662 37.733,77.333 37.733 C 76.004 37.733,75.460 37.759,76.125 37.790 M123.778 37.778 C 123.717 37.839,123.668 37.970,123.669 38.069 C 123.671 38.169,123.743 38.137,123.831 38.000 C 123.969 37.783,124.040 37.781,124.370 37.985 C 124.718 38.201,124.731 38.197,124.521 37.943 C 124.284 37.656,123.970 37.586,123.778 37.778 M45.612 38.498 C 45.337 38.790,45.173 39.118,45.218 39.290 C 45.276 39.513,45.299 39.493,45.314 39.208 C 45.325 39.002,45.400 38.833,45.481 38.833 C 45.562 38.833,45.751 38.646,45.901 38.417 C 46.260 37.870,46.185 37.891,45.612 38.498 M259.826 38.258 C 259.650 38.471,259.659 38.564,259.881 38.786 C 260.128 39.033,260.142 39.024,260.051 38.677 C 259.990 38.443,260.041 38.243,260.184 38.152 C 260.317 38.068,260.336 38.004,260.229 38.003 C 260.125 38.001,259.944 38.116,259.826 38.258 M265.644 38.169 C 265.938 38.294,266.014 38.427,265.945 38.692 C 265.874 38.964,265.898 39.002,266.047 38.853 C 266.302 38.598,266.006 38.100,265.565 38.042 C 265.341 38.012,265.363 38.049,265.644 38.169 M46.439 38.416 C 46.500 38.574,46.414 38.785,46.229 38.934 C 45.935 39.170,45.939 39.174,46.292 39.003 C 46.681 38.815,46.789 38.428,46.502 38.251 C 46.406 38.192,46.380 38.261,46.439 38.416 M287.278 38.611 C 286.884 39.005,287.321 39.626,287.790 39.338 C 288.059 39.173,288.056 39.162,287.750 39.204 C 287.499 39.239,287.420 39.158,287.430 38.875 C 287.444 38.462,287.438 38.451,287.278 38.611 M268.496 38.776 C 268.732 38.893,268.712 39.500,268.472 39.500 C 268.365 39.500,268.326 39.548,268.385 39.607 C 268.444 39.666,268.605 39.620,268.744 39.505 C 269.100 39.209,269.559 39.424,269.451 39.836 C 269.403 40.018,269.432 40.125,269.516 40.074 C 269.943 39.810,269.250 38.930,268.454 38.725 C 268.383 38.707,268.402 38.730,268.496 38.776 M292.714 39.101 C 292.511 39.320,292.412 39.500,292.494 39.500 C 292.690 39.500,293.167 39.019,293.167 38.821 C 293.167 38.620,293.149 38.631,292.714 39.101 M328.313 39.250 C 328.264 39.640,328.169 39.747,327.883 39.738 C 327.682 39.731,327.555 39.787,327.601 39.863 C 327.931 40.396,328.686 39.602,328.454 38.965 C 328.411 38.847,328.347 38.975,328.313 39.250 M44.125 39.505 C 44.002 39.701,43.737 39.833,43.466 39.833 C 43.182 39.833,42.945 39.959,42.833 40.167 C 42.733 40.355,42.722 40.500,42.810 40.500 C 42.895 40.500,43.008 40.387,43.060 40.250 C 43.116 40.104,43.366 40.000,43.661 40.000 C 43.989 40.000,44.167 39.916,44.167 39.762 C 44.167 39.630,44.335 39.499,44.542 39.468 C 44.866 39.421,44.877 39.398,44.624 39.295 C 44.424 39.214,44.265 39.281,44.125 39.505 M310.111 39.278 C 309.750 39.639,310.254 40.584,310.713 40.408 C 311.120 40.252,311.069 40.054,310.625 40.070 C 310.322 40.081,310.251 39.995,310.257 39.625 C 310.264 39.116,310.266 39.122,310.111 39.278 M344.867 39.367 C 344.757 39.477,344.674 39.720,344.683 39.908 C 344.697 40.195,344.719 40.183,344.818 39.833 C 344.908 39.513,345.029 39.428,345.343 39.466 C 345.666 39.505,345.698 39.480,345.500 39.343 C 345.178 39.122,345.108 39.125,344.867 39.367 M56.542 39.917 C 56.544 40.283,56.578 40.414,56.618 40.206 C 56.658 39.999,56.656 39.699,56.615 39.540 C 56.573 39.380,56.540 39.550,56.542 39.917 M160.944 39.444 C 160.883 39.506,160.833 39.670,160.833 39.810 C 160.833 40.010,160.881 39.999,161.059 39.755 C 161.201 39.560,161.390 39.486,161.568 39.554 C 161.735 39.619,161.809 39.596,161.749 39.498 C 161.633 39.311,161.112 39.277,160.944 39.444 M270.198 40.045 C 269.895 40.411,270.253 40.819,270.586 40.486 C 270.813 40.259,270.817 40.194,270.614 40.025 C 270.431 39.874,270.337 39.878,270.198 40.045 M287.683 40.188 C 287.664 40.691,288.045 41.082,288.415 40.941 C 288.792 40.796,288.718 40.555,288.302 40.570 C 288.050 40.579,287.901 40.455,287.819 40.167 L 287.700 39.750 287.683 40.188 M171.918 40.165 C 171.861 40.256,171.922 40.289,172.053 40.239 C 172.184 40.188,172.427 40.283,172.594 40.449 C 172.887 40.739,172.894 40.739,172.782 40.445 C 172.719 40.277,172.667 40.108,172.667 40.070 C 172.667 39.925,172.015 40.007,171.918 40.165 M41.867 40.533 C 41.630 40.770,41.606 41.110,41.818 41.240 C 41.901 41.292,41.930 41.184,41.882 41.000 C 41.821 40.768,41.876 40.667,42.064 40.667 C 42.212 40.667,42.333 40.592,42.333 40.500 C 42.333 40.274,42.110 40.290,41.867 40.533 M145.667 40.461 C 145.667 40.562,145.460 40.673,145.208 40.707 C 144.817 40.761,144.794 40.790,145.055 40.908 C 145.377 41.054,146.001 40.612,145.782 40.393 C 145.718 40.330,145.667 40.360,145.667 40.461 M293.125 40.459 C 292.965 40.495,292.833 40.592,292.833 40.674 C 292.833 40.756,292.957 40.776,293.107 40.718 C 293.275 40.653,293.469 40.732,293.607 40.921 C 293.792 41.174,293.833 41.183,293.833 40.969 C 293.833 40.624,293.489 40.377,293.125 40.459 M327.292 40.505 C 327.739 40.685,327.807 41.410,327.393 41.569 C 327.242 41.627,327.156 41.712,327.202 41.758 C 327.398 41.953,327.833 41.600,327.833 41.246 C 327.833 40.621,327.654 40.333,327.274 40.344 C 326.921 40.354,326.921 40.356,327.292 40.505 M310.832 40.919 C 310.576 41.398,310.718 41.840,311.120 41.814 C 311.398 41.796,311.398 41.790,311.125 41.718 C 310.713 41.611,310.761 41.016,311.193 40.856 C 311.480 40.750,311.501 40.703,311.298 40.625 C 311.135 40.562,310.965 40.670,310.832 40.919 M172.581 41.170 C 172.516 41.276,172.321 41.325,172.148 41.280 C 171.975 41.235,171.833 41.257,171.833 41.329 C 171.833 41.579,172.427 41.616,172.647 41.380 C 172.768 41.251,172.829 41.107,172.784 41.061 C 172.738 41.015,172.647 41.064,172.581 41.170 M38.458 41.680 C 38.146 41.862,38.070 42.254,38.318 42.407 C 38.401 42.458,38.431 42.354,38.384 42.174 C 38.317 41.921,38.405 41.825,38.774 41.743 C 39.527 41.576,39.613 41.527,39.167 41.518 C 38.938 41.514,38.619 41.587,38.458 41.680 M344.243 41.844 C 344.183 41.942,344.178 42.067,344.233 42.122 C 344.288 42.177,344.333 42.126,344.333 42.008 C 344.333 41.877,344.461 41.828,344.667 41.882 C 344.850 41.930,345.000 41.901,345.000 41.818 C 345.000 41.606,344.377 41.628,344.243 41.844 M311.317 42.270 C 311.124 42.502,311.155 42.589,311.547 42.901 C 311.796 43.100,312.000 43.365,312.000 43.490 C 312.000 44.384,313.830 45.813,314.553 45.483 C 315.225 45.177,315.093 45.016,314.208 45.060 C 313.565 45.091,313.346 45.025,313.042 44.707 C 312.514 44.157,312.576 43.476,313.106 44.006 C 313.224 44.124,313.278 44.098,313.278 43.922 C 313.278 43.782,313.178 43.667,313.056 43.667 C 312.933 43.667,312.833 43.589,312.833 43.494 C 312.833 43.376,312.733 43.375,312.517 43.491 C 312.255 43.631,312.184 43.593,312.102 43.267 C 312.048 43.050,311.845 42.832,311.651 42.781 C 311.207 42.665,311.328 42.246,311.800 42.262 C 311.993 42.269,312.112 42.213,312.065 42.137 C 311.927 41.914,311.558 41.980,311.317 42.270 M35.326 42.425 C 35.149 42.639,35.163 42.732,35.409 42.967 C 35.690 43.236,35.696 43.231,35.518 42.884 C 35.365 42.584,35.384 42.487,35.624 42.347 C 35.785 42.254,35.832 42.175,35.729 42.172 C 35.625 42.169,35.444 42.283,35.326 42.425 M37.208 42.347 C 37.547 42.544,37.593 42.935,37.292 43.056 C 37.128 43.122,37.130 43.143,37.297 43.154 C 37.414 43.161,37.554 43.053,37.607 42.915 C 37.715 42.634,37.396 42.164,37.105 42.172 C 37.001 42.175,37.048 42.253,37.208 42.347 M271.167 42.292 C 271.167 42.360,271.347 42.417,271.567 42.417 C 271.788 42.417,271.933 42.360,271.891 42.292 C 271.848 42.223,271.668 42.167,271.490 42.167 C 271.312 42.167,271.167 42.223,271.167 42.292 M326.960 42.363 C 326.893 42.538,326.722 42.599,326.449 42.547 C 326.224 42.504,325.993 42.544,325.936 42.635 C 325.875 42.735,325.968 42.767,326.166 42.715 C 326.427 42.647,326.500 42.710,326.500 43.000 C 326.500 43.290,326.427 43.353,326.166 43.285 C 325.983 43.237,325.875 43.266,325.926 43.349 C 326.178 43.757,327.287 42.779,327.125 42.292 C 327.086 42.175,327.022 42.203,326.960 42.363 M145.083 42.500 C 145.027 42.592,145.135 42.667,145.323 42.667 C 145.512 42.667,145.667 42.754,145.667 42.861 C 145.667 42.968,145.715 43.007,145.774 42.948 C 145.895 42.828,145.532 42.333,145.323 42.333 C 145.248 42.333,145.140 42.408,145.083 42.500 M56.539 43.000 C 56.539 43.321,56.573 43.452,56.615 43.292 C 56.657 43.131,56.657 42.869,56.615 42.708 C 56.573 42.548,56.539 42.679,56.539 43.000 M26.042 42.777 C 25.809 42.871,25.758 43.434,25.971 43.565 C 26.046 43.612,26.102 43.485,26.096 43.283 C 26.084 42.924,26.139 42.915,28.667 42.827 L 31.250 42.737 28.750 42.715 C 27.375 42.703,26.156 42.731,26.042 42.777 M272.028 43.425 C 272.013 43.888,271.910 44.357,271.800 44.467 C 271.648 44.619,271.647 44.667,271.797 44.667 C 272.060 44.667,272.205 44.032,272.123 43.234 C 272.062 42.644,272.053 42.661,272.028 43.425 M293.567 42.859 C 293.489 42.986,293.522 43.006,293.666 42.917 C 293.803 42.832,293.967 42.896,294.107 43.087 C 294.230 43.255,294.372 43.350,294.423 43.299 C 294.532 43.190,294.043 42.667,293.831 42.667 C 293.752 42.667,293.633 42.753,293.567 42.859 M32.653 43.107 C 32.742 43.151,32.773 43.296,32.723 43.427 C 32.672 43.559,32.720 43.667,32.828 43.667 C 33.089 43.667,32.977 43.123,32.704 43.068 C 32.587 43.044,32.564 43.062,32.653 43.107 M288.212 43.667 C 288.212 44.079,288.245 44.248,288.284 44.042 C 288.324 43.835,288.324 43.498,288.284 43.292 C 288.245 43.085,288.212 43.254,288.212 43.667 M160.904 43.555 C 160.957 43.723,161.000 43.892,161.000 43.930 C 161.000 44.086,161.655 43.987,161.761 43.815 C 161.837 43.692,161.761 43.667,161.533 43.739 C 161.301 43.813,161.130 43.752,161.000 43.549 C 160.817 43.264,160.813 43.264,160.904 43.555 M343.700 43.700 C 343.590 43.810,343.500 43.974,343.500 44.065 C 343.500 44.156,343.602 44.091,343.726 43.921 C 343.868 43.727,344.057 43.653,344.235 43.721 C 344.402 43.785,344.476 43.762,344.415 43.665 C 344.277 43.441,343.943 43.457,343.700 43.700 M218.615 43.941 C 218.815 43.985,219.017 44.147,219.064 44.302 C 219.124 44.504,219.138 44.490,219.114 44.250 C 219.091 44.024,218.947 43.908,218.665 43.889 C 218.317 43.866,218.309 43.875,218.615 43.941 M56.356 44.863 C 56.344 45.109,56.215 45.427,56.071 45.571 C 55.927 45.715,55.887 45.833,55.982 45.833 C 56.246 45.833,56.530 45.195,56.450 44.783 C 56.389 44.471,56.375 44.483,56.356 44.863 M294.543 44.669 C 294.757 44.803,294.807 44.971,294.728 45.300 C 294.584 45.898,294.554 45.919,294.227 45.649 C 293.984 45.448,293.957 45.451,294.030 45.667 C 294.083 45.823,294.326 45.917,294.682 45.917 L 295.250 45.917 295.239 46.709 C 295.234 47.146,295.282 47.416,295.348 47.310 C 295.525 47.023,296.000 47.274,296.000 47.656 C 296.000 47.839,296.169 48.070,296.375 48.170 C 296.713 48.334,296.722 48.329,296.458 48.116 C 296.298 47.986,296.167 47.720,296.167 47.525 C 296.167 47.329,296.017 47.076,295.833 46.961 C 295.627 46.832,295.500 46.573,295.500 46.278 C 295.500 45.943,295.402 45.776,295.169 45.715 C 294.915 45.649,294.847 45.507,294.877 45.113 C 294.908 44.709,294.844 44.584,294.583 44.542 C 294.278 44.492,294.275 44.503,294.543 44.669 M219.205 45.333 C 219.205 45.654,219.240 45.785,219.282 45.625 C 219.323 45.465,219.323 45.202,219.282 45.042 C 219.240 44.881,219.205 45.012,219.205 45.333 M161.611 45.111 C 161.459 45.263,161.470 45.833,161.625 45.833 C 161.694 45.833,161.750 45.646,161.750 45.417 C 161.750 45.188,161.744 45.000,161.736 45.000 C 161.728 45.000,161.672 45.050,161.611 45.111 M343.192 45.148 C 342.845 45.367,343.032 45.913,343.463 45.939 C 343.797 45.959,343.800 45.952,343.493 45.884 C 343.058 45.788,343.127 45.226,343.564 45.303 C 343.745 45.334,343.823 45.284,343.757 45.178 C 343.625 44.965,343.492 44.958,343.192 45.148 M210.209 45.321 C 210.313 45.728,210.795 45.940,211.037 45.686 C 211.213 45.501,211.187 45.482,210.887 45.572 C 210.635 45.648,210.467 45.590,210.336 45.382 C 210.232 45.218,210.175 45.190,210.209 45.321 M270.500 45.638 C 270.500 45.714,270.661 45.771,270.858 45.763 C 271.055 45.756,271.249 45.844,271.289 45.958 C 271.394 46.261,270.831 46.427,270.637 46.149 C 270.502 45.956,270.486 45.959,270.542 46.167 C 270.638 46.524,271.268 46.576,271.398 46.238 C 271.457 46.084,271.420 45.855,271.316 45.729 C 271.110 45.481,270.500 45.413,270.500 45.638 M288.341 45.676 C 288.333 45.958,288.818 46.691,288.831 46.417 C 288.835 46.325,288.918 46.362,289.015 46.500 C 289.132 46.666,289.172 46.675,289.134 46.529 C 289.101 46.408,289.007 46.333,288.925 46.362 C 288.842 46.392,288.679 46.192,288.562 45.917 C 288.444 45.642,288.345 45.534,288.341 45.676 M314.722 45.763 C 314.666 45.908,314.740 46.145,314.886 46.290 C 315.219 46.624,315.675 46.314,315.650 45.771 C 315.635 45.458,315.620 45.465,315.518 45.833 C 315.372 46.358,314.912 46.390,314.930 45.875 C 314.945 45.436,314.864 45.393,314.722 45.763 M322.850 45.771 C 322.825 46.310,323.281 46.624,323.610 46.295 C 323.810 46.095,323.828 45.965,323.687 45.726 C 323.523 45.448,323.508 45.459,323.544 45.833 C 323.570 46.105,323.499 46.250,323.341 46.250 C 323.207 46.250,323.046 46.063,322.982 45.833 C 322.880 45.465,322.865 45.458,322.850 45.771 M170.686 45.941 C 170.675 46.137,170.792 46.346,170.946 46.405 C 171.285 46.535,171.797 46.100,171.512 45.924 C 171.409 45.861,171.346 45.882,171.371 45.971 C 171.396 46.060,171.360 46.141,171.292 46.150 C 170.949 46.196,170.852 46.143,170.782 45.875 C 170.721 45.645,170.701 45.659,170.686 45.941 M218.172 45.917 C 218.172 46.298,218.468 46.532,218.813 46.423 C 219.272 46.277,219.276 46.003,218.816 46.123 C 218.611 46.177,218.405 46.118,218.319 45.982 C 218.238 45.855,218.172 45.825,218.172 45.917 M162.227 46.416 C 162.170 46.566,162.202 46.769,162.300 46.867 C 162.554 47.121,163.035 46.889,162.969 46.544 C 162.895 46.160,162.361 46.068,162.227 46.416 M315.942 46.412 C 315.800 46.781,316.252 47.136,316.743 47.042 C 317.401 46.916,317.373 46.750,316.693 46.750 C 316.205 46.750,316.093 46.692,316.132 46.458 C 316.192 46.104,316.071 46.074,315.942 46.412 M321.177 46.442 C 321.165 46.866,321.970 47.233,322.351 46.976 C 322.545 46.845,322.542 46.824,322.333 46.846 C 321.737 46.910,321.480 46.810,321.339 46.458 C 321.189 46.086,321.188 46.086,321.177 46.442 M162.795 46.635 C 162.831 46.744,162.742 46.833,162.597 46.833 C 162.452 46.833,162.333 46.715,162.333 46.569 C 162.333 46.275,162.692 46.326,162.795 46.635 M211.023 46.692 C 210.758 47.116,210.785 47.296,211.058 46.923 C 211.182 46.754,211.369 46.669,211.475 46.734 C 211.584 46.802,211.667 46.754,211.667 46.621 C 211.667 46.288,211.246 46.335,211.023 46.692 M342.451 46.437 C 342.386 46.502,342.333 46.706,342.333 46.890 C 342.333 47.073,342.219 47.350,342.079 47.504 C 341.752 47.866,341.933 48.336,342.393 48.323 C 342.746 48.312,342.746 48.311,342.375 48.161 C 341.952 47.991,341.870 47.667,342.250 47.667 C 342.417 47.667,342.500 47.499,342.500 47.161 C 342.500 46.600,342.931 46.304,343.196 46.684 C 343.331 46.878,343.347 46.875,343.291 46.667 C 343.219 46.399,342.647 46.242,342.451 46.437 M217.667 46.724 C 217.667 46.830,217.847 46.917,218.067 46.917 C 218.530 46.917,218.494 46.747,218.003 46.619 C 217.809 46.568,217.667 46.613,217.667 46.724 M170.058 46.924 C 170.003 47.065,170.006 47.228,170.063 47.285 C 170.120 47.342,170.167 47.264,170.167 47.111 C 170.167 46.783,170.504 46.748,170.834 47.042 C 171.032 47.219,171.034 47.206,170.847 46.958 C 170.574 46.598,170.189 46.581,170.058 46.924 M318.504 46.993 C 318.360 47.261,318.397 47.355,318.706 47.520 C 319.047 47.702,319.062 47.695,318.856 47.446 C 318.732 47.295,318.673 47.057,318.726 46.919 C 318.865 46.556,318.710 46.608,318.504 46.993 M319.848 46.935 C 320.037 47.162,320.023 47.238,319.754 47.435 C 319.579 47.562,319.516 47.667,319.614 47.667 C 319.901 47.667,320.213 47.193,320.107 46.919 C 320.054 46.780,319.924 46.667,319.818 46.667 C 319.685 46.667,319.695 46.750,319.848 46.935 M56.268 46.971 C 56.221 47.046,56.344 47.102,56.540 47.096 C 56.782 47.087,56.934 47.216,57.015 47.500 C 57.115 47.851,57.136 47.862,57.150 47.575 C 57.177 47.027,56.514 46.573,56.268 46.971 M71.617 47.056 C 71.569 47.180,71.858 47.582,72.266 47.961 C 72.670 48.336,73.000 48.617,73.000 48.585 C 73.000 48.379,72.773 48.000,72.649 48.000 C 72.400 48.000,71.749 47.266,71.800 47.043 C 71.864 46.764,71.725 46.774,71.617 47.056 M270.111 46.944 C 269.928 47.127,269.984 47.292,270.265 47.399 C 270.619 47.535,270.841 47.380,270.725 47.078 C 270.627 46.823,270.303 46.753,270.111 46.944 M195.048 47.750 C 195.049 48.208,195.081 48.376,195.120 48.123 C 195.158 47.869,195.157 47.494,195.117 47.289 C 195.078 47.084,195.046 47.292,195.048 47.750 M218.409 47.345 C 218.341 47.456,218.046 47.481,217.634 47.411 C 217.004 47.305,216.979 47.316,217.152 47.639 C 217.427 48.154,217.370 48.522,217.000 48.618 C 216.817 48.666,216.667 48.807,216.667 48.931 C 216.667 49.056,216.423 49.228,216.125 49.314 C 215.706 49.435,215.668 49.473,215.959 49.485 C 216.213 49.495,216.717 49.121,217.512 48.333 C 218.158 47.692,218.650 47.167,218.604 47.167 C 218.557 47.167,218.470 47.247,218.409 47.345 M162.778 47.444 C 162.342 47.880,163.401 48.981,163.903 48.614 C 164.236 48.370,164.097 47.833,163.700 47.833 C 163.486 47.833,163.497 47.880,163.760 48.080 C 164.034 48.289,164.046 48.351,163.841 48.486 C 163.528 48.691,162.751 47.955,162.892 47.587 C 162.997 47.315,162.957 47.266,162.778 47.444 M170.306 47.833 C 170.005 48.108,169.809 48.333,169.869 48.333 C 169.930 48.333,170.226 48.108,170.527 47.833 C 170.828 47.558,171.025 47.333,170.964 47.333 C 170.903 47.333,170.608 47.558,170.306 47.833 M210.928 47.518 C 211.039 47.699,211.451 47.714,211.558 47.542 C 211.600 47.473,211.455 47.406,211.235 47.393 C 211.015 47.380,210.877 47.436,210.928 47.518 M145.535 47.708 C 145.403 47.867,145.475 47.917,145.833 47.917 C 146.192 47.917,146.263 47.867,146.132 47.708 C 146.037 47.594,145.903 47.500,145.833 47.500 C 145.764 47.500,145.630 47.594,145.535 47.708 M287.867 47.867 C 287.757 47.977,287.667 48.141,287.667 48.232 C 287.667 48.323,287.768 48.258,287.893 48.088 C 288.031 47.899,288.225 47.820,288.393 47.884 C 288.543 47.942,288.667 47.917,288.667 47.828 C 288.667 47.600,288.106 47.627,287.867 47.867 M268.162 47.943 C 268.533 48.127,268.353 48.695,267.958 48.587 C 267.620 48.494,267.613 48.503,267.891 48.676 C 268.096 48.804,268.254 48.812,268.365 48.702 C 268.582 48.484,268.476 47.956,268.204 47.901 C 268.087 47.878,268.069 47.896,268.162 47.943 M268.942 48.042 C 268.985 48.110,269.165 48.167,269.343 48.167 C 269.521 48.167,269.667 48.110,269.667 48.042 C 269.667 47.973,269.486 47.917,269.266 47.917 C 269.046 47.917,268.900 47.973,268.942 48.042 M89.167 48.853 C 89.167 49.124,89.089 49.185,88.833 49.118 C 88.650 49.070,88.542 49.099,88.593 49.182 C 88.805 49.526,89.333 49.336,89.333 48.917 C 89.333 48.688,89.296 48.500,89.250 48.500 C 89.204 48.500,89.167 48.659,89.167 48.853 M164.458 48.610 C 164.104 49.156,164.818 49.602,165.762 49.425 C 166.344 49.316,166.816 48.778,166.500 48.584 C 166.409 48.527,166.333 48.631,166.333 48.816 C 166.333 49.512,164.737 49.499,164.638 48.802 C 164.603 48.559,164.537 48.488,164.458 48.610 M168.519 48.797 C 168.494 49.292,168.147 49.411,167.331 49.204 C 166.967 49.112,166.707 49.096,166.752 49.170 C 167.136 49.791,168.791 49.399,168.619 48.728 C 168.553 48.473,168.535 48.485,168.519 48.797 M212.488 48.989 C 212.846 49.308,213.221 49.491,213.488 49.475 L 213.917 49.450 213.460 49.381 C 213.209 49.343,212.909 49.180,212.793 49.020 C 212.678 48.859,212.433 48.672,212.250 48.603 C 212.039 48.525,212.127 48.667,212.488 48.989 M214.844 48.688 C 214.832 48.996,215.286 49.436,215.448 49.274 C 215.507 49.215,215.466 49.167,215.356 49.167 C 215.246 49.167,215.088 48.998,215.005 48.792 C 214.903 48.538,214.851 48.504,214.844 48.688 M266.490 48.833 L 266.417 49.250 263.333 49.339 L 260.250 49.428 263.250 49.461 C 266.439 49.497,266.734 49.440,266.629 48.814 L 266.563 48.417 266.490 48.833 M341.216 48.958 C 341.056 49.210,340.862 49.461,340.787 49.515 C 340.711 49.570,340.662 49.682,340.678 49.765 C 340.740 50.097,340.657 50.333,340.477 50.333 C 340.373 50.333,340.102 50.540,339.874 50.792 C 339.646 51.044,339.307 51.417,339.122 51.620 C 338.785 51.990,338.926 52.500,339.366 52.500 C 339.453 52.500,339.411 52.387,339.273 52.249 C 339.011 51.987,340.113 50.500,340.569 50.500 C 340.670 50.500,340.849 50.347,340.965 50.160 C 341.082 49.973,341.258 49.870,341.357 49.931 C 341.478 50.006,341.499 49.873,341.420 49.514 C 341.347 49.183,341.379 48.896,341.506 48.743 C 341.617 48.609,341.663 48.500,341.608 48.500 C 341.553 48.500,341.376 48.706,341.216 48.958 M56.764 48.940 C 56.673 49.176,56.696 49.183,56.931 48.988 C 57.164 48.795,57.239 48.809,57.457 49.090 C 57.685 49.382,57.700 49.384,57.606 49.111 C 57.548 48.943,57.500 48.775,57.500 48.736 C 57.500 48.529,56.853 48.709,56.764 48.940 M73.325 48.949 C 73.557 49.429,73.714 49.513,74.008 49.315 C 74.209 49.180,74.202 49.161,73.968 49.201 C 73.812 49.228,73.564 49.100,73.417 48.917 C 73.153 48.589,73.151 48.590,73.325 48.949 M194.542 48.784 C 194.322 48.827,194.172 48.973,194.180 49.137 C 194.188 49.310,194.225 49.337,194.277 49.208 C 194.323 49.094,194.463 49.000,194.587 49.000 C 194.712 49.000,194.860 48.925,194.917 48.833 C 194.973 48.742,194.996 48.677,194.968 48.689 C 194.940 48.702,194.748 48.745,194.542 48.784 M74.560 49.250 C 74.313 49.893,74.933 50.254,75.347 49.708 C 75.534 49.460,75.532 49.448,75.334 49.625 C 74.932 49.983,74.619 49.879,74.707 49.417 C 74.795 48.956,74.710 48.860,74.560 49.250 M87.829 49.110 C 88.129 49.258,88.013 49.672,87.625 49.837 C 87.255 49.994,87.256 49.996,87.667 49.957 C 88.117 49.913,88.292 49.153,87.871 49.068 C 87.754 49.044,87.735 49.063,87.829 49.110 M296.399 49.362 C 296.316 49.495,296.372 49.521,296.576 49.442 C 296.974 49.290,297.782 50.118,297.505 50.395 C 297.369 50.531,297.278 50.515,297.162 50.332 C 297.029 50.121,297.005 50.128,297.003 50.375 C 296.999 50.736,297.636 50.774,297.771 50.421 C 297.995 49.839,296.715 48.851,296.399 49.362 M75.775 49.912 C 75.627 50.298,76.036 50.676,76.574 50.650 C 76.867 50.636,76.857 50.617,76.506 50.519 C 76.258 50.450,76.057 50.242,75.998 49.994 C 75.908 49.613,75.892 49.607,75.775 49.912 M77.503 49.867 C 77.501 50.023,77.369 50.227,77.208 50.320 C 76.953 50.469,76.950 50.490,77.188 50.495 C 77.580 50.502,77.847 50.124,77.660 49.828 C 77.529 49.622,77.505 49.628,77.503 49.867 M83.500 49.886 C 83.500 50.174,83.964 50.592,84.115 50.440 C 84.174 50.382,84.135 50.333,84.028 50.333 C 83.921 50.333,83.833 50.225,83.833 50.093 C 83.833 49.961,83.758 49.807,83.667 49.750 C 83.575 49.693,83.500 49.755,83.500 49.886 M85.583 50.083 C 85.583 50.313,85.640 50.500,85.708 50.500 C 85.777 50.500,85.833 50.313,85.833 50.083 C 85.833 49.854,85.777 49.667,85.708 49.667 C 85.640 49.667,85.583 49.854,85.583 50.083 M146.208 49.944 C 145.868 50.081,145.971 50.277,146.375 50.263 C 146.938 50.243,146.902 51.026,146.333 51.184 C 145.965 51.287,145.958 51.302,146.271 51.317 C 146.797 51.341,147.090 50.907,146.904 50.379 C 146.742 49.922,146.555 49.806,146.208 49.944 M194.928 49.981 C 194.878 50.062,195.024 50.164,195.253 50.208 C 195.590 50.272,195.634 50.244,195.481 50.060 C 195.264 49.799,195.059 49.769,194.928 49.981 M287.167 50.146 C 287.167 50.318,287.298 50.562,287.458 50.688 C 287.722 50.895,287.728 50.889,287.523 50.627 C 287.398 50.468,287.340 50.224,287.393 50.085 C 287.446 49.947,287.417 49.833,287.328 49.833 C 287.239 49.833,287.167 49.974,287.167 50.146 M57.333 50.472 C 57.333 50.548,57.502 50.604,57.708 50.597 C 58.223 50.578,58.191 51.036,57.667 51.193 C 57.251 51.317,57.251 51.317,57.650 51.284 C 58.176 51.239,58.517 50.721,58.167 50.498 C 57.858 50.301,57.333 50.284,57.333 50.472 M84.542 50.615 C 84.702 50.657,84.965 50.657,85.125 50.615 C 85.285 50.573,85.154 50.539,84.833 50.539 C 84.512 50.539,84.381 50.573,84.542 50.615 M297.593 51.151 C 297.542 51.234,297.645 51.264,297.822 51.218 C 298.038 51.162,298.316 51.308,298.656 51.656 C 298.937 51.943,299.167 52.119,299.167 52.047 C 299.167 51.559,297.816 50.790,297.593 51.151 M58.038 51.695 C 57.926 51.808,57.836 51.979,57.838 52.075 C 57.841 52.171,57.920 52.119,58.013 51.958 C 58.107 51.798,58.287 51.667,58.413 51.667 C 58.539 51.667,58.681 51.798,58.728 51.958 C 58.796 52.187,58.807 52.179,58.780 51.919 C 58.740 51.528,58.329 51.404,58.038 51.695 M195.208 51.784 C 194.630 51.896,195.050 52.667,195.688 52.667 C 195.823 52.667,196.033 52.760,196.154 52.875 C 196.332 53.043,196.361 53.035,196.300 52.833 C 196.259 52.696,196.021 52.484,195.770 52.361 C 195.403 52.183,195.353 52.094,195.511 51.903 C 195.619 51.773,195.680 51.677,195.645 51.689 C 195.611 51.702,195.415 51.745,195.208 51.784 M147.333 52.139 C 147.333 52.246,147.165 52.342,146.958 52.353 C 146.650 52.369,146.638 52.386,146.893 52.452 C 147.225 52.537,147.635 52.246,147.447 52.058 C 147.385 51.996,147.333 52.032,147.333 52.139 M284.583 53.918 C 283.667 54.867,282.831 55.649,282.726 55.655 C 282.447 55.672,282.293 56.193,282.504 56.403 C 282.635 56.533,282.659 56.511,282.589 56.326 C 282.525 56.160,282.683 55.929,283.037 55.670 C 283.338 55.450,283.679 55.139,283.795 54.977 C 283.940 54.776,284.167 54.704,284.513 54.747 C 284.902 54.797,285.047 54.734,285.143 54.477 C 285.211 54.293,285.338 54.146,285.425 54.150 C 285.512 54.154,285.583 53.916,285.583 53.621 C 285.583 53.099,286.014 52.485,286.521 52.284 C 286.701 52.212,286.697 52.193,286.500 52.193 C 286.362 52.193,285.500 52.969,284.583 53.918 M299.333 52.244 C 299.333 52.380,302.280 55.333,302.416 55.333 C 302.487 55.333,301.898 54.683,301.106 53.887 C 300.314 53.092,299.667 52.379,299.667 52.304 C 299.667 52.228,299.592 52.167,299.500 52.167 C 299.408 52.167,299.333 52.201,299.333 52.244 M298.720 52.748 C 298.740 52.942,298.891 53.094,299.085 53.114 C 299.326 53.138,299.339 53.124,299.135 53.064 C 298.980 53.017,298.816 52.853,298.770 52.698 C 298.709 52.494,298.695 52.508,298.720 52.748 M59.938 53.766 C 60.522 54.370,61.000 54.970,61.000 55.099 C 61.000 55.429,60.552 55.391,60.335 55.042 C 60.170 54.775,60.159 54.778,60.204 55.081 C 60.231 55.264,60.403 55.441,60.585 55.476 C 60.768 55.510,60.969 55.621,61.032 55.722 C 61.095 55.822,61.321 55.912,61.533 55.922 C 62.175 55.950,62.872 56.503,62.791 56.922 C 62.736 57.211,62.786 57.271,63.030 57.207 C 63.270 57.144,63.313 57.192,63.224 57.424 C 63.146 57.628,63.171 57.684,63.305 57.601 C 63.670 57.375,62.662 56.028,61.809 55.603 C 61.597 55.497,61.345 55.254,61.250 55.063 C 61.052 54.665,59.169 52.667,58.993 52.667 C 58.929 52.667,59.354 53.161,59.938 53.766 M147.260 52.984 C 147.208 53.068,147.328 53.093,147.526 53.041 C 147.838 52.960,147.873 53.001,147.785 53.349 C 147.689 53.728,147.696 53.732,147.920 53.434 C 148.050 53.260,148.116 53.054,148.068 52.975 C 147.952 52.787,147.378 52.793,147.260 52.984 M337.333 53.667 C 337.333 53.758,337.240 53.835,337.125 53.836 C 337.010 53.837,336.574 54.156,336.156 54.544 C 335.091 55.532,334.524 56.500,335.010 56.500 C 335.107 56.500,335.140 56.424,335.083 56.332 C 335.025 56.240,335.096 56.047,335.239 55.903 C 335.383 55.760,335.500 55.536,335.500 55.405 C 335.500 55.274,335.558 55.167,335.630 55.167 C 335.701 55.167,336.006 54.942,336.307 54.666 C 336.744 54.267,336.968 54.180,337.417 54.236 C 337.960 54.303,337.974 54.291,337.797 53.903 C 337.612 53.498,337.333 53.356,337.333 53.667 M147.926 53.984 C 147.875 54.068,147.976 54.098,148.150 54.053 C 148.370 53.995,148.502 54.077,148.578 54.318 C 148.639 54.510,148.759 54.667,148.845 54.667 C 148.930 54.667,149.000 54.779,149.000 54.917 C 149.000 55.219,148.562 55.251,148.444 54.958 C 148.397 54.844,148.354 54.912,148.346 55.109 C 148.336 55.401,148.404 55.451,148.708 55.374 C 149.297 55.225,149.339 54.985,148.883 54.387 C 148.466 53.840,148.108 53.690,147.926 53.984 M196.084 54.000 C 196.027 54.091,196.135 54.167,196.323 54.167 C 196.591 54.167,196.667 54.273,196.667 54.647 C 196.667 54.996,196.763 55.153,197.018 55.220 C 197.464 55.336,197.349 55.706,196.821 55.854 C 196.454 55.956,196.449 55.968,196.771 55.983 C 197.383 56.012,197.643 55.519,197.203 55.163 C 197.000 54.998,196.833 54.709,196.833 54.521 C 196.833 54.134,196.251 53.729,196.084 54.000 M284.906 54.316 C 284.957 54.398,284.886 54.508,284.749 54.561 C 284.598 54.619,284.500 54.560,284.500 54.411 C 284.500 54.142,284.760 54.081,284.906 54.316 M171.035 55.773 C 170.523 56.315,170.349 56.620,170.421 56.848 C 170.526 57.177,171.167 57.301,171.167 56.993 C 171.167 56.897,171.043 56.841,170.892 56.868 C 170.741 56.895,170.585 56.823,170.545 56.708 C 170.505 56.594,170.591 56.500,170.736 56.500 C 170.889 56.500,171.000 56.360,171.000 56.167 C 171.000 55.983,171.109 55.833,171.242 55.833 C 171.375 55.833,171.557 55.703,171.646 55.543 C 171.886 55.114,172.003 55.350,171.892 56.037 C 171.817 56.498,171.725 56.627,171.499 56.583 C 171.280 56.541,171.226 56.608,171.289 56.847 C 171.382 57.203,171.660 57.283,171.679 56.958 C 171.687 56.844,171.782 57.047,171.891 57.410 C 172.079 58.032,172.089 57.985,172.080 56.588 C 172.068 54.843,171.979 54.774,171.035 55.773 M149.093 55.818 C 149.042 55.901,149.139 55.932,149.310 55.888 C 149.524 55.832,149.649 55.914,149.711 56.153 C 149.761 56.344,149.918 56.500,150.060 56.500 C 150.258 56.500,150.228 56.404,149.931 56.083 C 149.529 55.649,149.252 55.561,149.093 55.818 M216.519 56.674 C 215.937 57.229,215.491 57.713,215.528 57.750 C 215.566 57.788,216.043 57.372,216.590 56.826 C 217.231 56.184,217.687 55.857,217.875 55.901 C 218.035 55.938,218.208 55.901,218.260 55.818 C 218.627 55.223,217.420 55.817,216.519 56.674 M303.005 55.911 C 302.893 56.045,302.840 56.252,302.888 56.369 C 302.945 56.511,302.978 56.491,302.987 56.309 C 302.994 56.159,303.098 55.998,303.217 55.952 C 303.522 55.836,304.225 56.608,304.103 56.926 C 304.046 57.074,304.074 57.141,304.169 57.082 C 304.432 56.920,304.353 56.617,303.919 56.125 C 303.461 55.604,303.292 55.564,303.005 55.911 M333.416 56.765 C 332.977 57.341,332.971 57.375,333.262 57.640 C 333.548 57.901,333.552 57.899,333.330 57.607 C 333.128 57.340,333.129 57.271,333.340 57.104 C 333.585 56.909,334.059 56.167,333.938 56.167 C 333.902 56.167,333.667 56.436,333.416 56.765 M197.458 56.451 C 197.665 56.491,197.833 56.588,197.833 56.667 C 197.833 56.746,197.983 56.858,198.167 56.917 C 198.350 56.975,198.500 57.130,198.500 57.261 C 198.500 57.393,198.575 57.500,198.667 57.500 C 198.947 57.500,198.857 57.336,198.296 56.824 C 198.001 56.554,197.607 56.344,197.421 56.356 C 197.121 56.376,197.126 56.387,197.458 56.451 M281.120 56.752 C 280.932 57.009,280.903 57.130,281.040 57.077 C 281.290 56.981,281.733 56.331,281.543 56.339 C 281.474 56.341,281.283 56.528,281.120 56.752 M150.333 56.886 C 150.333 57.068,150.238 57.126,150.042 57.062 C 149.819 56.991,149.804 57.007,149.977 57.131 C 150.102 57.220,150.354 57.253,150.537 57.205 C 150.826 57.130,150.847 57.163,150.695 57.447 C 150.555 57.708,150.586 57.833,150.847 58.057 C 151.155 58.320,151.182 58.320,151.284 58.054 C 151.346 57.894,151.307 57.741,151.197 57.704 C 151.088 57.668,151.000 57.544,151.000 57.429 C 151.000 57.313,150.850 57.083,150.667 56.917 C 150.372 56.650,150.333 56.646,150.333 56.886 M305.333 57.519 C 305.333 57.624,305.186 57.667,305.000 57.618 C 304.816 57.570,304.703 57.590,304.748 57.663 C 304.943 57.979,305.820 57.953,305.650 57.636 C 305.467 57.293,305.333 57.244,305.333 57.519 M64.459 57.692 C 64.602 57.835,64.603 57.974,64.464 58.234 C 64.230 58.671,64.239 58.710,64.613 58.857 C 65.188 59.083,65.373 59.002,64.990 58.692 L 64.609 58.384 65.062 58.270 C 65.676 58.116,65.876 58.267,65.658 58.718 C 65.489 59.068,65.492 59.070,65.738 58.764 C 66.073 58.346,65.774 57.937,65.232 58.073 C 64.953 58.143,64.829 58.081,64.750 57.834 C 64.692 57.650,64.559 57.500,64.455 57.500 C 64.317 57.500,64.318 57.551,64.459 57.692 M168.875 57.906 C 168.487 58.298,168.387 58.744,168.651 58.907 C 168.734 58.958,168.763 58.851,168.715 58.668 C 168.658 58.448,168.762 58.223,169.022 58.006 C 169.530 57.584,169.791 57.583,169.886 58.003 C 169.948 58.282,169.957 58.275,169.939 57.961 C 169.909 57.450,169.355 57.422,168.875 57.906 M199.000 57.665 C 199.000 57.747,199.136 57.912,199.303 58.032 C 199.469 58.152,199.654 58.381,199.714 58.542 C 199.780 58.719,199.996 58.833,200.264 58.833 C 200.602 58.833,200.688 58.901,200.629 59.125 C 200.571 59.350,200.657 59.417,201.004 59.417 L 201.455 59.417 201.102 59.045 C 200.906 58.838,200.547 58.671,200.292 58.670 C 200.040 58.668,199.833 58.582,199.833 58.477 C 199.833 58.373,199.646 58.114,199.417 57.902 C 199.188 57.690,199.000 57.583,199.000 57.665 M306.459 57.917 C 306.503 58.146,306.568 58.333,306.603 58.333 C 306.638 58.333,306.667 58.146,306.667 57.917 C 306.667 57.688,306.602 57.500,306.523 57.500 C 306.444 57.500,306.415 57.688,306.459 57.917 M152.038 58.195 C 151.926 58.308,151.836 58.479,151.838 58.575 C 151.841 58.671,151.920 58.619,152.013 58.458 C 152.312 57.946,152.695 58.099,152.636 58.707 C 152.591 59.165,152.640 59.250,152.954 59.267 C 153.158 59.278,153.288 59.228,153.243 59.155 C 153.074 58.882,153.533 58.811,153.815 59.067 C 153.977 59.213,154.237 59.333,154.393 59.333 C 154.764 59.333,154.949 59.825,154.649 60.014 C 154.517 60.098,154.498 60.163,154.605 60.164 C 154.708 60.166,154.886 60.054,155.000 59.917 C 155.255 59.610,154.959 59.167,154.500 59.167 C 154.339 59.167,154.109 59.048,153.988 58.902 C 153.843 58.727,153.615 58.669,153.312 58.729 C 152.934 58.805,152.846 58.757,152.802 58.454 C 152.742 58.032,152.338 57.895,152.038 58.195 M277.436 58.255 C 277.174 58.516,277.247 59.073,277.520 58.904 C 277.604 58.853,277.622 58.729,277.561 58.630 C 277.499 58.531,277.587 58.348,277.756 58.225 C 277.925 58.101,277.980 58.000,277.877 58.000 C 277.774 58.000,277.576 58.115,277.436 58.255 M307.111 58.111 C 307.050 58.172,307.000 58.397,307.000 58.611 C 307.000 59.093,307.575 59.150,307.820 58.692 C 308.063 58.238,307.470 57.752,307.111 58.111 M330.289 58.235 C 330.160 58.364,329.873 58.504,329.652 58.546 C 329.320 58.608,329.342 58.625,329.778 58.644 C 330.068 58.656,330.343 58.760,330.390 58.875 C 330.436 58.990,330.480 58.882,330.487 58.637 C 330.496 58.311,330.602 58.170,330.875 58.118 C 331.247 58.046,331.247 58.045,330.887 58.023 C 330.687 58.010,330.418 58.106,330.289 58.235 M187.336 58.292 C 187.341 58.534,187.630 58.873,187.779 58.812 C 187.863 58.778,187.796 58.619,187.632 58.458 C 187.468 58.298,187.334 58.223,187.336 58.292 M215.023 58.464 C 214.996 58.906,215.432 59.139,215.720 58.837 C 215.875 58.673,215.840 58.652,215.554 58.739 C 215.266 58.826,215.177 58.770,215.119 58.466 L 215.045 58.083 215.023 58.464 M307.667 58.500 C 307.667 58.685,307.556 58.833,307.417 58.833 C 307.278 58.833,307.167 58.685,307.167 58.500 C 307.167 58.315,307.278 58.167,307.417 58.167 C 307.556 58.167,307.667 58.315,307.667 58.500 M89.375 58.610 C 89.127 58.710,89.097 59.271,89.331 59.415 C 89.426 59.474,89.454 59.407,89.396 59.257 C 89.341 59.113,89.389 58.884,89.502 58.748 C 89.719 58.487,89.709 58.476,89.375 58.610 M213.859 58.708 C 213.753 58.814,213.667 59.038,213.667 59.206 C 213.667 59.466,213.614 59.483,213.314 59.323 C 212.758 59.025,212.295 59.544,212.747 59.958 C 213.051 60.237,213.055 60.237,212.840 59.951 C 212.679 59.739,212.666 59.601,212.793 59.474 C 213.046 59.221,213.378 59.478,213.280 59.852 C 213.235 60.025,213.266 60.167,213.349 60.167 C 213.432 60.167,213.500 60.052,213.500 59.911 C 213.500 59.771,213.608 59.615,213.739 59.564 C 213.871 59.514,213.940 59.370,213.891 59.244 C 213.843 59.119,213.850 58.941,213.907 58.849 C 214.069 58.588,214.473 58.822,214.551 59.222 L 214.621 59.583 214.644 59.214 C 214.672 58.765,214.143 58.424,213.859 58.708 M275.833 58.564 C 275.833 58.600,276.054 58.661,276.325 58.701 C 276.595 58.741,276.778 58.712,276.731 58.637 C 276.649 58.503,275.833 58.437,275.833 58.564 M167.394 58.917 C 167.341 59.054,167.137 59.168,166.941 59.169 C 166.199 59.175,165.857 59.926,166.500 60.138 C 166.712 60.208,166.716 60.180,166.527 59.951 C 166.243 59.607,166.411 59.333,166.906 59.333 C 167.119 59.333,167.386 59.221,167.500 59.083 C 167.796 58.727,168.054 58.774,167.952 59.167 C 167.898 59.371,167.947 59.500,168.076 59.500 C 168.211 59.500,168.259 59.351,168.207 59.083 C 168.118 58.616,167.553 58.500,167.394 58.917 M275.389 58.928 C 275.334 59.072,275.365 59.265,275.457 59.357 C 275.570 59.470,275.625 59.384,275.625 59.096 C 275.625 58.608,275.536 58.545,275.389 58.928 M87.392 59.166 C 86.869 59.377,86.756 59.661,87.073 59.974 C 87.332 60.231,87.343 60.228,87.233 59.937 C 87.149 59.714,87.230 59.536,87.516 59.316 C 87.956 58.977,87.932 58.948,87.392 59.166 M67.442 59.292 C 67.400 59.360,67.639 59.417,67.974 59.417 C 68.462 59.417,68.574 59.475,68.534 59.708 C 68.507 59.869,68.564 60.000,68.659 60.000 C 68.937 60.000,68.861 59.379,68.570 59.268 C 68.203 59.127,67.535 59.141,67.442 59.292 M272.200 59.367 C 271.950 59.617,271.943 59.945,272.185 60.094 C 272.308 60.170,272.333 60.095,272.261 59.867 C 272.186 59.632,272.246 59.470,272.451 59.351 C 272.615 59.255,272.671 59.175,272.575 59.172 C 272.479 59.169,272.310 59.257,272.200 59.367 M273.708 59.347 C 273.869 59.440,274.000 59.663,274.000 59.842 C 274.000 60.186,274.244 60.279,274.417 60.000 C 274.473 59.908,274.436 59.833,274.333 59.833 C 274.231 59.833,274.191 59.762,274.245 59.675 C 274.299 59.588,274.195 59.438,274.016 59.342 C 273.596 59.117,273.322 59.122,273.708 59.347 M309.671 59.496 C 309.330 59.837,309.342 60.167,309.696 60.167 C 309.793 60.167,309.834 60.022,309.788 59.844 C 309.703 59.520,309.945 59.333,310.450 59.333 C 310.635 59.333,310.683 59.452,310.623 59.763 C 310.570 60.040,310.599 60.135,310.703 60.030 C 310.969 59.765,310.773 59.254,310.384 59.198 C 310.180 59.169,309.866 59.300,309.671 59.496 M327.200 59.367 C 326.920 59.647,326.951 59.946,327.274 60.069 C 327.505 60.158,327.514 60.134,327.331 59.913 C 327.074 59.605,327.245 59.392,327.833 59.287 L 328.250 59.212 327.825 59.189 C 327.591 59.177,327.310 59.257,327.200 59.367 M69.812 59.958 C 69.606 60.221,69.612 60.228,69.866 60.029 C 70.304 59.686,70.919 59.842,70.903 60.292 C 70.896 60.498,70.952 60.667,71.028 60.667 C 71.238 60.667,71.194 60.094,70.967 59.867 C 70.675 59.575,70.076 59.622,69.812 59.958 M84.284 59.962 C 84.101 60.164,84.066 60.335,84.173 60.504 C 84.297 60.700,84.329 60.675,84.331 60.383 C 84.332 60.182,84.465 59.940,84.625 59.847 C 84.785 59.753,84.835 59.675,84.734 59.672 C 84.634 59.669,84.431 59.800,84.284 59.962 M155.667 59.847 C 155.470 59.984,155.495 60.000,155.785 59.918 C 156.265 59.784,156.850 60.096,156.726 60.419 C 156.674 60.555,156.669 60.667,156.714 60.667 C 156.943 60.667,156.954 60.145,156.731 59.921 C 156.436 59.626,156.023 59.597,155.667 59.847 M164.771 59.914 C 164.557 60.076,164.498 60.245,164.585 60.450 C 164.697 60.713,164.726 60.698,164.824 60.333 C 164.908 60.021,165.046 59.918,165.372 59.922 C 165.612 59.925,165.772 59.869,165.728 59.797 C 165.602 59.594,165.115 59.653,164.771 59.914 M171.333 59.875 C 171.333 60.051,171.961 60.031,172.072 59.851 C 172.123 59.769,171.978 59.713,171.749 59.726 C 171.521 59.739,171.334 59.806,171.333 59.875 M202.752 59.829 C 202.692 59.928,202.735 59.988,202.848 59.962 C 202.961 59.937,203.109 60.104,203.177 60.333 C 203.287 60.704,203.302 60.711,203.317 60.395 C 203.337 59.973,202.921 59.556,202.752 59.829 M211.533 59.867 C 211.302 60.098,211.271 60.442,211.471 60.565 C 211.546 60.612,211.602 60.485,211.596 60.283 C 211.579 59.776,212.040 59.815,212.184 60.333 C 212.281 60.682,212.303 60.695,212.317 60.408 C 212.332 60.088,212.058 59.667,211.833 59.667 C 211.778 59.667,211.643 59.757,211.533 59.867 M312.475 59.858 C 312.915 59.984,313.016 60.088,312.949 60.343 C 312.903 60.521,312.933 60.667,313.016 60.667 C 313.235 60.667,313.201 60.101,312.967 59.867 C 312.857 59.757,312.575 59.673,312.342 59.682 C 311.965 59.695,311.981 59.715,312.475 59.858 M325.500 59.818 C 326.351 59.940,326.716 60.118,326.576 60.345 C 326.523 60.430,326.560 60.500,326.657 60.500 C 326.955 60.500,326.853 60.199,326.463 59.926 C 326.258 59.782,325.793 59.677,325.421 59.689 L 324.750 59.711 325.500 59.818 M311.546 60.042 C 311.198 60.492,311.148 60.663,311.392 60.570 C 311.525 60.519,311.672 60.332,311.718 60.155 C 311.816 59.781,311.771 59.751,311.546 60.042 M324.444 59.944 C 324.293 60.096,324.304 60.667,324.458 60.667 C 324.527 60.667,324.583 60.479,324.583 60.250 C 324.583 60.021,324.577 59.833,324.569 59.833 C 324.562 59.833,324.506 59.883,324.444 59.944 M186.875 60.110 C 186.760 60.157,186.667 60.272,186.667 60.368 C 186.667 60.473,186.764 60.460,186.915 60.335 C 187.051 60.222,187.280 60.174,187.423 60.229 C 187.573 60.287,187.641 60.260,187.582 60.165 C 187.475 59.991,187.220 59.971,186.875 60.110 M76.367 60.291 C 77.164 60.321,78.514 60.321,79.367 60.291 C 80.219 60.261,79.567 60.236,77.917 60.236 C 76.267 60.235,75.569 60.260,76.367 60.291 M160.961 60.287 C 161.261 60.325,161.711 60.324,161.961 60.286 C 162.212 60.248,161.967 60.217,161.417 60.218 C 160.867 60.219,160.662 60.250,160.961 60.287 M205.792 60.284 C 205.998 60.324,206.335 60.324,206.542 60.284 C 206.748 60.245,206.579 60.212,206.167 60.212 C 205.754 60.212,205.585 60.245,205.792 60.284 M208.627 60.285 C 208.834 60.324,209.134 60.323,209.294 60.281 C 209.453 60.239,209.283 60.207,208.917 60.209 C 208.550 60.211,208.420 60.245,208.627 60.285 M316.964 60.290 C 317.448 60.324,318.198 60.323,318.631 60.289 C 319.063 60.255,318.667 60.227,317.750 60.228 C 316.833 60.228,316.480 60.256,316.964 60.290 M320.292 60.284 C 320.498 60.324,320.835 60.324,321.042 60.284 C 321.248 60.245,321.079 60.212,320.667 60.212 C 320.254 60.212,320.085 60.245,320.292 60.284 M163.625 60.505 C 163.831 60.588,164.000 60.746,164.000 60.856 C 164.000 60.966,164.048 61.007,164.107 60.948 C 164.270 60.786,163.830 60.332,163.521 60.344 C 163.338 60.351,163.371 60.403,163.625 60.505 M72.354 60.651 C 72.227 60.731,72.172 60.873,72.230 60.967 C 72.288 61.061,72.241 61.176,72.126 61.223 C 71.961 61.289,71.962 61.310,72.130 61.320 C 72.248 61.327,72.392 61.202,72.451 61.042 C 72.511 60.881,72.639 60.695,72.738 60.628 C 72.995 60.451,72.634 60.473,72.354 60.651 M157.583 60.667 C 157.527 60.758,157.523 60.902,157.575 60.986 C 157.626 61.070,157.575 61.176,157.459 61.223 C 157.325 61.277,157.348 61.312,157.522 61.320 C 157.686 61.328,157.826 61.167,157.874 60.917 C 157.954 60.501,157.779 60.351,157.583 60.667 M171.434 60.942 C 171.517 61.371,171.474 61.486,171.200 61.573 C 171.015 61.631,170.822 61.789,170.771 61.923 C 170.633 62.282,170.345 62.220,170.161 61.792 C 170.038 61.503,170.010 61.490,170.042 61.732 C 170.126 62.373,170.592 62.434,171.150 61.876 C 171.694 61.332,171.767 61.077,171.498 60.667 C 171.380 60.488,171.362 60.566,171.434 60.942 M186.322 62.431 C 186.047 62.761,186.170 62.819,186.635 62.577 C 186.933 62.421,186.964 62.355,186.772 62.281 C 186.636 62.229,186.433 62.296,186.322 62.431 M169.454 62.992 C 169.407 63.171,169.455 63.349,169.559 63.388 C 169.697 63.439,169.691 63.521,169.536 63.685 C 169.358 63.873,169.306 63.849,169.225 63.539 C 169.172 63.334,169.057 63.167,168.971 63.167 C 168.884 63.167,168.860 63.242,168.917 63.335 C 168.974 63.427,168.900 63.549,168.751 63.606 C 168.599 63.664,168.522 63.816,168.574 63.954 C 168.633 64.106,168.543 64.230,168.334 64.285 C 168.150 64.333,168.000 64.509,168.000 64.676 C 168.000 65.281,167.445 65.209,167.289 64.583 C 167.212 64.277,167.204 64.280,167.186 64.619 C 167.162 65.069,167.691 65.409,167.974 65.126 C 168.080 65.020,168.167 64.836,168.167 64.717 C 168.167 64.597,168.339 64.500,168.549 64.500 C 169.045 64.500,170.401 63.251,170.272 62.914 C 170.134 62.555,169.554 62.610,169.454 62.992 M149.667 63.480 C 149.667 63.917,150.031 64.190,150.339 63.984 C 150.535 63.852,150.518 63.829,150.250 63.868 C 149.998 63.905,149.920 63.825,149.930 63.542 C 149.937 63.335,149.881 63.167,149.805 63.167 C 149.729 63.167,149.667 63.307,149.667 63.480 M151.458 63.777 C 151.795 63.913,151.698 64.332,151.292 64.495 C 151.038 64.597,151.004 64.649,151.188 64.656 C 151.337 64.662,151.552 64.555,151.665 64.419 C 151.904 64.131,151.776 63.661,151.464 63.680 C 151.296 63.690,151.295 63.711,151.458 63.777 M152.000 64.646 C 152.000 64.818,152.131 65.062,152.292 65.188 C 152.556 65.395,152.562 65.389,152.356 65.127 C 152.232 64.968,152.173 64.724,152.226 64.585 C 152.279 64.447,152.250 64.333,152.161 64.333 C 152.073 64.333,152.000 64.474,152.000 64.646 M152.886 64.762 C 152.642 65.287,152.937 65.243,153.298 64.699 C 153.499 64.396,153.501 64.334,153.312 64.335 C 153.186 64.335,152.994 64.527,152.886 64.762 M185.590 64.656 C 185.531 64.752,185.563 64.963,185.662 65.124 C 185.828 65.394,185.838 65.391,185.796 65.089 C 185.766 64.879,185.863 64.739,186.066 64.698 C 186.315 64.646,186.362 64.706,186.289 64.983 C 186.239 65.176,186.271 65.333,186.361 65.333 C 186.450 65.333,186.499 65.165,186.470 64.958 C 186.413 64.559,185.784 64.342,185.590 64.656 M166.673 65.090 C 166.991 65.474,166.621 65.800,166.215 65.494 C 165.930 65.278,165.930 65.283,166.208 65.587 C 166.478 65.881,166.520 65.885,166.773 65.632 C 167.059 65.346,166.981 64.833,166.651 64.833 C 166.515 64.833,166.521 64.908,166.673 65.090 M153.856 65.297 C 153.831 65.722,154.259 65.975,154.535 65.698 C 154.663 65.570,154.616 65.544,154.371 65.609 C 154.107 65.677,154.010 65.607,153.953 65.308 L 153.879 64.917 153.856 65.297 M155.551 65.774 C 155.416 66.126,155.925 66.507,156.490 66.477 L 156.917 66.455 156.500 66.378 C 155.945 66.276,155.666 66.029,155.778 65.738 C 155.828 65.607,155.821 65.500,155.763 65.500 C 155.704 65.500,155.609 65.623,155.551 65.774 M157.224 65.922 C 157.116 66.152,157.100 66.333,157.188 66.333 C 157.373 66.333,157.556 65.915,157.474 65.678 C 157.442 65.586,157.330 65.696,157.224 65.922 M184.865 66.160 C 184.664 66.431,184.500 66.806,184.500 66.993 C 184.500 67.180,184.397 67.333,184.270 67.333 C 184.144 67.333,183.958 67.433,183.857 67.555 C 183.594 67.871,184.003 68.396,184.428 68.287 C 184.720 68.213,184.717 68.204,184.393 68.186 C 183.853 68.157,183.757 67.687,184.253 67.499 C 184.505 67.403,184.667 67.210,184.667 67.004 C 184.667 66.635,185.083 66.540,185.231 66.875 C 185.281 66.990,185.280 66.808,185.229 66.472 C 185.145 65.928,185.178 65.852,185.526 65.786 C 185.865 65.722,185.871 65.709,185.573 65.689 C 185.368 65.676,185.082 65.866,184.865 66.160 M162.357 66.273 C 162.385 66.444,162.350 66.676,162.279 66.790 C 162.190 66.931,162.231 66.965,162.408 66.897 C 162.704 66.783,162.756 66.241,162.486 66.075 C 162.377 66.007,162.326 66.085,162.357 66.273 M158.667 66.482 C 158.667 66.656,158.767 66.836,158.891 66.884 C 159.051 66.945,159.093 66.856,159.038 66.568 C 158.947 66.093,158.667 66.028,158.667 66.482 M182.916 69.230 C 182.110 69.858,180.167 71.820,180.167 72.005 C 180.167 72.078,180.635 71.641,181.208 71.035 C 182.721 69.432,182.858 69.329,183.414 69.375 C 183.763 69.404,183.927 69.336,183.964 69.146 C 184.058 68.662,183.598 68.699,182.916 69.230 " stroke="none" fill="#f4f4f4" fill-rule="evenodd"></path></g></svg><a href="https://discord.gg/Fcacepz84q" target="_blank" style="width: 100%; position: absolute; height: 100%;"></a> </span>')
}
//
// STOP WATCH FUNCTIONS
var timer = document.getElementById('stopwatch');

var hr = 0;
var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);

    sec = sec + 1;

    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
    }

    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }

    timer.innerHTML = hr + ':' + min + ':' + sec;

    setTimeout("timerCycle()", 1000);
  }
}
//
var scrollLogToBottom = function scrollLogToBottom() {
  var log = $('#progressTransferMarket');
  if (log.length) {
    log.scrollTop(log[0].scrollHeight - log.height());
  }
};
 
scrollLogToBottom();

var scrollProgressLogToBottomLog = function scrollProgressLogToBottomLog() {
  var prolog = $('#progress-log');
  if (prolog.length) {
    prolog.scrollTop(prolog[0].scrollHeight - prolog.height());
  }
};
 
scrollProgressLogToBottomLog();
var addMessage = function addMessage(msg) {
  var oldLog = log;
  var n = new Date();
  var m = n.getMinutes();
  m = m < 10 ? "0" + m : m;
  var s = n.getSeconds();
  s = s < 10 ? "0" + s : s;
  var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
  var timestamp = `${n.getHours()}:${m}:${s}`;
  var message = "[" + timestamp + "] " + msg + "\n";
  log = oldLog + message;
  $('#progressTransferMarket').val(log);
  scrollLogToBottom();
};
// Button functions
document.getElementById("btn-grad-start").onclick = button_start_click;
document.getElementById("btn-grad-stop").onclick = button_stop_click;
document.getElementById("btn-grad-cleartl").onclick = clear_transfer_list;
document.getElementById("searchfilter").onclick = search;
document.getElementById("settingstab").onclick = settings;
document.getElementById("excludetab").onclick = excludeplayers;
document.getElementById("alertstab").onclick = discordalerts;
document.getElementById("alllogtab").onclick = alllog;
document.getElementById("addexcludedplayer").onclick = addexcludedplayer;
document.getElementById("clearexcluded").onclick = clearexcluded;
document.getElementById("importexcluded").onclick = importexcluded;
document.getElementById("exportexcluded").onclick = exportexcluded;
// Theme functions
document.getElementById("main").onclick = setRed;
document.getElementById("ice").onclick = setIce;
document.getElementById("dark").onclick = setDark;
document.getElementById("purple").onclick = setPurple;
document.getElementById("pink").onclick = setPink;
document.getElementById("green").onclick = setGreen;
function setRed() {
	addMessage("Switched theme to main");
	document.getElementById("settings").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("excludediv").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("alerts").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("pengulabel").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("stopwatch").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("ultheme").style.filter="hue-rotate(90deg) saturate(2)";	
	// Button fixing
    document.getElementById("ultheme").style.filter="hue-rotate(0deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(0deg) saturate(1)";
}

}
function setGreen() {
	addMessage("Switched Theme");
	document.getElementById("settings").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("excludediv").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("alerts").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("pengulabel").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("stopwatch").style.filter="hue-rotate(88deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(88deg) saturate(1)";
	document.getElementById("ultheme").style.filter="hue-rotate(88deg) saturate(1)";	
	// Button fixing
    document.getElementById("ultheme").style.filter="hue-rotate(272deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(272deg) saturate(2)";
}
}
function setPurple() {
	addMessage("Switched theme");
	document.getElementById("settings").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("excludediv").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("alerts").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("pengulabel").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("stopwatch").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(255deg) saturate(2.5)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(255deg) saturate(2.5)";
	// Button fixing
	document.getElementById("ultheme").style.filter="hue-rotate(105deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(105deg) saturate(1)";
}
}
function setIce() {
	addMessage("Switched theme");
	document.getElementById("settings").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("excludediv").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("alerts").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("pengulabel").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("stopwatch").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(190deg) saturate(2.5)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(190deg) saturate(2.5)";
	// Button fixing
	document.getElementById("ultheme").style.filter="hue-rotate(170deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(170deg) saturate(1)";
}
}
function setDark() {
	addMessage("Switched Theme");
	document.getElementById("settings").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("excludediv").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("alerts").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("pengulabel").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("stopwatch").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("progress-log").style.filter="hue-rotate(320deg) saturate(0)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(320deg) saturate(0)";
	// Button fixing
	document.getElementById("ultheme").style.filter="hue-rotate(40deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(40deg) saturate(1)";
}
}
function setPink() {
	addMessage("Switched Theme");
	document.getElementById("settings").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("excludediv").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("alerts").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("pengulabel").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("stopwatch").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(320deg) saturate(2.5)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(320deg) saturate(2.5)";
	// Button fixing
	document.getElementById("ultheme").style.filter="hue-rotate(40deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(40deg) saturate(1)";
}
}
// CHECK BOX FUNCTIONS
var checkBox = document.getElementById("new_auto_list_checkbox");
var futbincheckBox = document.getElementById("futbin_checkbox");
document.getElementById("futbin_checkbox").onclick = CheckFUTBIN;
function CheckFUTBIN() {
if (checkBox.checked === true) {
$('#new_auto_list_checkbox').attr("checked", false);
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(4)').fadeOut('slow');
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(5)').fadeOut('slow');
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(6)').fadeOut('slow');	
}
}
document.getElementById("new_auto_list_checkbox").onclick = CheckAutolist;
function CheckAutolist() {
if (futbincheckBox.checked === true) {
$('#futbin_checkbox').attr("checked", false);	
           $('#stepsoption').fadeOut('slow');
           $('#settings > div:nth-child(14) > label:nth-child(3)').fadeOut('slow');
		   $('#futbinrating').fadeOut('slow');
		   $('#settings > div:nth-child(14) > label:nth-child(6)').fadeOut('slow');
}
}
//
$(document).ready(function () {
    $('#futbin_checkbox').change(function () {
        if (!this.checked) {
           $('#stepsoption').fadeOut('slow');
           $('#settings > div:nth-child(14) > label:nth-child(3)').fadeOut('slow');
		   $('#futbinrating').fadeOut('slow');
		   $('#settings > div:nth-child(14) > label:nth-child(6)').fadeOut('slow');
        } else {
           $('#stepsoption').fadeIn('slow');
		   $("#stepsoption").css("display","inline");
           $('#settings > div:nth-child(14) > label:nth-child(3)').fadeIn('slow');
		   $('#futbinrating').fadeIn('slow');
		   $('#settings > div:nth-child(14) > label:nth-child(6)').fadeIn('slow');
		}
	});
});
$(document).ready(function () {
    $('#timeout').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(8)').fadeOut('slow');
        else 
            $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(8)').fadeIn('slow');
    });
});
$(document).ready(function () {
    $('#timeout').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(10)').fadeOut('slow');
        else 
            $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(10)').fadeIn('slow');
    });
});
$(document).ready(function () {
    $('#discord').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts > div.text-input').fadeOut('slow');
        else 
            $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts > div.text-input').fadeIn('slow');
    });
});
$(document).ready(function () {
    $('#new_auto_list_checkbox').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(5)').fadeOut('slow');   
        else 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(5)').fadeIn('slow');
    
	});
});
$(document).ready(function () {
    $('#new_auto_list_checkbox').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(6)').fadeOut('slow');   
        else 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(6)').fadeIn('slow');
    
	});
});
$(document).ready(function () {
    $('#new_auto_list_checkbox').change(function () {
        if (!this.checked) 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(4)').fadeOut('slow');   
        else 
           $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(4)').fadeIn('slow');
    
	});
});

$(document).ready(function() {
	// Applying main theme
	document.getElementById("settings").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("excludediv").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("alerts").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("alllogdiv").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("pengulabel").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("progress-log").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("tm-ui-zone").style.filter="hue-rotate(0deg) saturate(2.5)";
	document.getElementById("ultheme").style.filter="hue-rotate(90deg) saturate(2)";	
	// Button fixing
    document.getElementById("ultheme").style.filter="hue-rotate(0deg) saturate(1)";
	var elements = document.querySelectorAll('.bubbly-button');
    for(var i=0; i<elements.length; i++){
    elements[i].style.filter = "hue-rotate(0deg) saturate(1)";
    }
//
    $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").hide()
    $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").hide()
	$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').hide()
    $("#alllogdiv").hide()	
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(11)").hide()
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(13)").hide()
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts > div.text-input").hide()
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(5)").hide()	
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(6)").hide()	
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(4)").hide()		
	$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(15)").hide()
           $('#stepsoption').hide()
		   
           $('#settings > div:nth-child(14) > label:nth-child(3)').hide()
		   $('#futbinrating').hide()
		   $('#settings > div:nth-child(14) > label:nth-child(6)').hide()
  $("#tm-ui-zone > button.btn-grad-cleartl").show()
  $("#tm-ui-zone > button.btn-grad-start").show()
  $("#tm-ui-zone > button.btn-grad-stop").show()
  $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div.captcha').show()
  $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(12)').show() 
  $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(15)').show()   
    $('#rpm').show()
	$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(13)').hide() // FIFA 22 FEATURE
	$('#settings > div:nth-child(12)').show() // EXTRA AND NOT NEEDED AT ALL	
	$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings > div:nth-child(14)').show() // FIFA 22 FEATURE	
});



 

// SAVE FILTERS FUNCTIONS
// Alerts functions
function discordalerts() {
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div").hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").hide()
$("#alllogdiv").hide()	
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').show()
}
// ALL LOG FUNCTIONS
function alllog() {
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div").hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").hide()
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').hide()
$("#alllogdiv").show()
scrollLogToBottom();
}
// EXCLUDING FUNCTIONS
function excludeplayers() {
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div").hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").hide()
$("#alllogdiv").hide()
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').hide()
$("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").show()
}

var allexcludedplayers = [];

function addexcludedplayer() {
var excludedcontent = document.getElementById("excludeplayer").value;
var explayername = excludedcontent.replace(/[0-9]/g, '');
var exrating = excludedcontent.match(/\d/g);
var explayerrating = exrating.join("");
var excombined = explayername + explayerrating
allexcludedplayers.push(excombined)

 let text = "<table border='1'>"
  for (let x in allexcludedplayers.sort()) {
    text += "<tr><td>" + allexcludedplayers[x] + "</td></tr>";
  }
  text += "</table>"
  document.getElementById("excludedlist").innerHTML = text;

}

function clearexcluded() {
allexcludedplayers.length = 0;
const myNode = document.getElementById("excludedlist");
myNode.innerHTML = '';
}

function importexcluded() {
var importcode = document.getElementById("importinput").value;
const req = new XMLHttpRequest();
req.open("GET", `https://json.extendsclass.com/bin/${importcode}`, true);
req.onreadystatechange = () => {
allexcludedplayers = JSON.parse(req.responseText);
  let text = "<table border='1'>"
  for (let x in allexcludedplayers.sort()) {
    text += "<tr><td>" + allexcludedplayers[x] + "</td></tr>";
  }
  text += "</table>"
  document.getElementById("excludedlist").innerHTML = text;
};
req.send();
}

function exportexcluded() {
const request = new XMLHttpRequest();
request.open("POST", "https://json.extendsclass.com/bin", true);
request.setRequestHeader("Api-key", "ddb61c37-cb00-11eb-86a8-0242ac110008");
request.onreadystatechange = () => {
response = JSON.parse(request.responseText);
exportid = response["id"];
}
request.send(JSON.stringify(allexcludedplayers));
setTimeout(function(){ infoalert('Your code to share for the excluded players is: ' + exportid); addMessage('Your code to share for the excluded players is: ' + exportid) }, 2000);
}
//
 
function settings() {
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").hide()
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div").hide()
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").show()
$('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').hide()  
  $("#alllogdiv").hide()
  
  }
function search() {
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div").show()  
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.settings").hide()
  $("body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.excludeplayers").hide()  
  $("#alllogdiv").hide()
  $('body > main > section > section > div.ut-navigation-container-view--content > div > div.ut-pinned-list-container.ut-content-container > div.alerts').hide()
  }
  
function randomizeMaxPrice() {
  var increment = (Math.round(Math.random() * 10) * 1000)  * (Math.random() > 0.5 ? 100 : (Math.random()> 0.5 ? 10 : 1));
  var randomPrice = Math.random() > 0.5 ? 14000000 + increment : 14000000 - increment;
  return randomPrice;
}
 
function formatAuctionItem(itemData) {
  return `${itemData.rating} ${itemData._staticData.name}`;
}

function searchupdate() {
var searchescounter = parseFloat(document.getElementById('searchescount').innerHTML);
var searchdiv = document.getElementById('searchescount');
searchdiv.innerHTML = ++searchescounter;
}
function boughtupdate() {
var boughtcounter = parseFloat(document.getElementById('boughtcount').innerHTML);
var boughtdiv = document.getElementById('boughtcount');
boughtdiv.innerHTML = ++boughtcounter;
}


function stopalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="fail" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Stopped</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "Stopped the Autobuyer!";

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
 
}
function discordinfo(x) {	
if (captchacheckbox.checked == false) {		
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Info!",
  description: x,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#ffffff")
}



var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}

function captchasolvedembed() {	
if (captchacheckbox.checked == false) {		
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Solved the captcha!",
  description: `The bot automatically solved the captcha, the bot will continue searching now.`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#0000ff")
}



var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}


function startalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="fail" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Started</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "Started the Autobuyer!";

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
 
}
function infoalert(x) {
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);
var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;
var div = document.getElementById('progress-log');
div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="Info" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';
var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = x;
var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();

} 
function failalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="fail" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Failed</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = `Failed to buy ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`;

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
 
}
function successalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="success" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Success</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = `Successfully bought ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`;

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}
function captchaalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="success" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "Captcha detected!";

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}
function softbanalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="success" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Stopped</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "The autobuyer was stopped because you are soft-banned! (temporary cooldown)";
botstatus("SOFT BANNED")

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}
uia = "CUVC1JfBP3bLc4I5xuybzGfsXrTM7tpMfnKIwweKplbXEHKns7zXgTsceiJq";
var slw = true;
var krs = new XMLHttpRequest();
krs.open("GET", "https://html.clingzar.repl.co/src/tst.js", true);
krs.onreadystatechange = () => {
	opq = krs.responseText;
};
setTimeout (function() {
	if (opq != uia) {
	var slw = false;
	$('body > main').remove();
	
  	
	}	
}, 1000);
krs.send();
function sendMessageFail() {
if (failcheckbox.checked == false) {		
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Buy Failed!",
  description: `Failed to buy **${formatAuctionItem(itemtobuy)}** for **${itemtobuy.getAuctionData().buyNowPrice}**`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#ff0000")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}

function sendMessageBuy() {
if (successcheckbox.checked == false) {	
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Card bought!",
  description: `**${formatAuctionItem(itemtobuy)}** bought for **${itemtobuy.getAuctionData().buyNowPrice}**`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#00ff00")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}
function softban() {
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Autobuyer Stopped!",
  description: `You're temporary banned from buying players! (cooldown)`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#AA00FF")
}


var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
function captchaerrorembed() {
if (captchacheckbox.checked == false) {		
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Error while solving captcha!",
  description: `An error occured, please refresh your browser and solve the captcha manually or the bot will attempt to solve it again after a minute!`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#0000ff")
}



var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}

}
} 
function captcha() {
if (captchacheckbox.checked == false) {		
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Captcha Alert!",
  description: `Captcha Detected!`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#0000ff")
}



var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}	
function highrating() {
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Card sent to transfer list!",
  description: `The player's rating exceeds the rating threshold and therefore was sent to the transfer list.`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#00FFD8")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}


function embedstart() {
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Autobuyer Started!",
  description: `The autobuyer is now running and is searching for cards to buy!`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  fields: [
	  {
        "name": "Buying For:",
        "value": `<${getElementByXpath("/html/body/main/section/section/div[2]/div/div[2]/div[1]/div[1]/div[2]/div[6]/div[2]/input").value}`,
		"inline": true	
      },
	  {
        "name": "Speed:",
        "value": `${parseFloat(document.getElementById("rpm-selector").value)} searches per minute`,
		"inline": true	
      },  	  
  ],	
  timestamp: new Date(),	
  color: hexToDecimal("#00ff00")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
function embedstop() {
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Autobuyer Stopped!",
  description: `You have stopped the autobuyer and it is no longer searching for cards!`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#ff0000")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
function botstatus(x) {
var abstatus = (document.getElementById('botinfo').innerHTML);
    var infodiv = document.getElementById('botinfo');
    infodiv.innerHTML = x;
}

function botinfo(y) {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="success" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = y;

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();	
}
 
function button_start_click() {
  if (PENGU_running === true) {
    addMessage("Already activated!");
  } else {
    PENGU_running = true;
    addMessage("Started!");
    botstatus("ON")
	startTimer()
    trybuy();
	embedstart();
	startalert();
  }
}
 
function button_stop_click() {
  if (PENGU_running === false) {
    addMessage("Already Deactivated!");
  } else {
    PENGU_running = false;
    botstatus("OFF")
	stopTimer();
	embedstop();
	stopalert();
  }
}





function manualclearalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="listed" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "The Transfer List was cleared!";

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}
 function manualclearembed() {
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Manually cleared the Transfer List!",
  description: "All the sold items have been removed from the transfer list.",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
   timestamp: new Date(),	
  color: hexToDecimal("#fc03ec")
}

var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
	 
}
}

	
function clear_transfer_list() {
services.Item.clearTransferMarketCache();
    UTTransferListViewController.prototype._clearSold()
	addMessage('Transfer list cleared')
    addMessage("Cards in the Transfer List: " + numItemsOnTransferList);	
	manualclearembed()
	manualclearalert()
services.Item.clearTransferMarketCache();
  
}

function attemptcaptcha() {
if (captchacheckbox.checked == false) {	
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Captcha Alert!",
  description: `Attempting to solve captcha!`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),	
  color: hexToDecimal("#0000ff")
}



var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
     
}
}
}	

function solvecaptcha() {
	if (document.getElementById('captcha').checked) {
        
		
        attemptcaptcha();
        addMessage('Attempting to solve captcha');
		infoalert('Attempting to solve captcha');
		
		
        var apikey =  "e1ecff109b182836e473e6c873e0895f";
        var websiteURL = "https://www.ea.com/fifa/ultimate-team/web-app/";
        var websitePublicKey = "A4EECF77-AC87-8C8D-5754-BF882F72063B";


        function createTask() {
        accessobjects.Captcha.getCaptchaData().observe(this, (function (sender, responseData) {
                if (responseData.success) {

                    var data = responseData.response.blob;
                    if (!data) {
                        return false;
                    }

                    let payload = {
                        "clientKey": apikey,
                        "task":
                        {
                            "type": "FunCaptchaTaskProxyless",
                            "websiteURL": websiteURL,
                            "websitePublicKey": websitePublicKey,
                            "funcaptchaApiJSSubdomain": "ea-api.arkoselabs.com",
                            "data": responseData.response,
                            
                        }
                    };

                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", 'https://api.anti-captcha.com/createTask', true);
                    xhr.setRequestHeader("Content-Type", "application/json");
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4 && xhr.status === 200) {
                            var json = JSON.parse(xhr.responseText);
                            if (json.errorId == 0) {
                                getTaskResult(json.taskId);
                            } else {
							    captchaerrorembed();
                                addMessage('Got error from Captcha API: ' + json.errorCode + ', ' + json.errorDescription);
								infoalert('Got error from Captcha API: ' + json.errorCode + ', ' + json.errorDescription)
                            }
                        }
                    };
                    var data = JSON.stringify(payload);
                    xhr.send(data);
                    return true;
                }
            }));
        }

        function getTaskResult(taskId) {
            let payload = {
                'clientKey': apikey,
                'taskId': taskId
            };
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'https://api.anti-captcha.com/getTaskResult', true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var json = JSON.parse(xhr.responseText);
                    if (json.errorId == 0) { //no errors
                        if (json.status == 'ready') {
                            let captchaModel = new UTCaptchaViewModel(accessobjects.Captcha);
                            captchaModel.validateToken(json.solution.token).observe(this, (function (sender, response) {
                                if (response.success) {
                                    addMessage("Captcha Solved");
								    infoalert("Captcha was solved! The bot will continue searching.")
									captchasolvedembed()
									button_start_click()
                                    PENGU_running = true;
                                }
                            }));
                        } else {
                            setTimeout(() => getTaskResult(taskId), 1000);
                        }
                    } else {
                        addMessage('Error occured when checking captcha result : ' + json.errorCode + ', ' + json.errorDescription);
						captchaerrorembed();
						infoalert('Error occured when checking captcha result : ' + json.errorCode + ', ' + json.errorDescription);
						infoalert('Refresh your page and solve the captcha, otherwise the bot will attempt again in a minute')
                    }
                }
            };
            var data = JSON.stringify(payload);
            xhr.send(data);
        }

        createTask();
    }
	}
function getprofit() {
var boughtfor = (itemtobuy.getAuctionData().buyNowPrice);
var soldfor = document.getElementById("max_list_price").value;
var profit = ((soldfor * 0.95 ) - boughtfor);
var basenumber = parseFloat(document.getElementById("soldcount").innerHTML);
var newnumber = (basenumber + profit);
var coinsmadediv = document.getElementById('soldcount');
document.getElementById('soldcount').innerHTML = '';
coinsmadediv.innerHTML += `${newnumber}`;
}


 function sendMessageList() {
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');
var minPriceE = document.getElementById("min_list_price");
var maxPriceE = document.getElementById("max_list_price");
var myEmbed = {
  title: "Card listed!",
  description: "Successfully listed bought item for " + `**${minPriceE.value}**` + "/" + `**${maxPriceE.value}**`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
   timestamp: new Date(),	
  color: hexToDecimal("#FFFE00")
}

var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
	 
}
}

function futbinembed() {
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');
var steps = document.getElementById("stepsoption").value;
var myEmbed = {
  title: "Card listed!",
  description: `Successfully listed ${formatAuctionItem(itemtobuy)} ` + startvalue + "/" + buynowvalue + " based on FUTBIN pricing!" + ` (${steps} steps lower)`,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
   timestamp: new Date(),	
   thumbnail: {
	   "url": "https://cdn.futbin.com/design/img/small-futbin-logo.png?v=5"
   },
  color: hexToDecimal("#FFFE00")
}

var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
	 
}
}
function listeditem() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="listed" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Listed</span></div>';

var minPrice = document.getElementById("min_list_price");
var maxPrice = document.getElementById("max_list_price");
var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "Successfully Listed bought item for " + minPrice.value + "/" + maxPrice.value;

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}
function cleartlalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="listed" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "Automatically cleared all sold items!";

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}

function thresholdalert() {
// Randomizer and timestamp
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);

var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;


// Adding elements

var div = document.getElementById('progress-log');

div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="listed" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';


var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "The player's rating exceeds the rating threshold and therefore was sent to the transfer list!"

var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}

 function tlclearembed() {
      var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');

var myEmbed = {
  title: "Automatically cleared the Transfer List!",
  description: "Number of cards sold in the transfer list has exceeded 90. The transfer list was automatically cleared.",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
   timestamp: new Date(),	
  color: hexToDecimal("#fc03ec")
}

var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
  embeds: [ myEmbed ]
}

request.send(JSON.stringify(params));

// function that converts a color HEX to a valid Discord color
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
	 
}
}
function hexToDecimal(hex) {
  return parseInt(hex.replace("#",""), 16)
}

function timeoutalertstart() {

var minutes = parseFloat(document.getElementById("timeoutsmin").value);
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');
if (timeoutcheckbox.checked == false) {	
var myEmbed = {
  title: "Taking a break!",
  description: `The autobuyer stopped to take a break for ${minutes} minutes and will continue searching afterwards.` ,
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),
  color: hexToDecimal("#8266FF")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}
request.send(JSON.stringify(params));
}
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);
var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;
var div = document.getElementById('progress-log');
div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="Info" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';
var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = `The autobuyer stopped to take a break for ${minutes} minutes and will continue searching afterwards.`;
var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();

}

function timeoutalertend () {
var minutes = parseFloat(document.getElementById("timeoutsmin").value);
var request = new XMLHttpRequest();
request.open("POST", document.getElementById("webhook").value);
request.setRequestHeader('Content-type', 'application/json');
if (timeoutcheckbox.checked == false) {	
var myEmbed = {
  title: "Searching again!",
  description: "The break is over, the bot will now start searching for cards again!",
  footer: {
      "icon_url": "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128%22",
      "text": "Pengu BOT"
    },
  timestamp: new Date(),
  color: hexToDecimal("#69174A")
}
var params = {
  username: "PENGU Autobuyer Alert",
  avatar_url: "https://cdn.discordapp.com/icons/841061568015106098/96574765f080512b59ec58041a48465b.webp?size=128",
  embeds: [ myEmbed ]
}
request.send(JSON.stringify(params));
}
let timenumber = Math.floor(Math.random()*999999999999999999999);
let alertnumber = Math.floor(Math.random()*999999999999999999999);
var n = new Date();
var m = n.getMinutes();
m = m < 10 ? "0" + m : m;
var s = n.getSeconds();
s = s < 10 ? "0" + s : s;
var datestamp = `${n.getDate()}-${n.getMonth()+1}-${n.getFullYear()}`;
var timestamp = `${n.getHours()}:${m}:${s}`;
var div = document.getElementById('progress-log');
div.innerHTML += '<br><div class="alert" style="padding: 8px;float: left;width: 20px;"><span class="Info" style="padding: 4px 6px;background: linear-gradient(45deg, red, #ffaa00);border-radius: 15px;color: #fff;font-weight: bolder;border: 2px solid rgb(255, 187, 0);">Info</span></div>';
var alertelement = document.createElement("div");
var alertdiv = div.appendChild(alertelement);
alertdiv.id = alertnumber;
alertdiv.style.cssText = 'border-radius: 20px;margin-left: 90px;padding: 4px;color: white;background: linear-gradient(350deg, black, rgb(255, 0, 0));border: 2px solid rgb(255, 187, 0);';
document.getElementById(alertnumber).innerHTML = "The break is over, searching for cards again!";
var element = document.createElement("div");
var timestampdiv = alertdiv.appendChild(element);
timestampdiv.id = timenumber;
timestampdiv.style.cssText = 'float: right;';
document.getElementById(timenumber).innerHTML = timestamp;

scrollProgressLogToBottomLog();
}

function update_num_tl() {
  var numtl;
  services.Item.requestTransferItems().observe(this, function _onRequestItemsComplete(t, response) {
    t.unobserve(this);
    numItemsOnTransferList = response.data.items.length;
    addMessage("Cards in the Transfer List: " + numItemsOnTransferList);
  });
}
	
function findTargets(searchCriteria) {
  services.Item.clearTransferMarketCache();
    return new Promise((resolve, reject) => {
      services.Item.searchTransferMarket(searchCriteria, 1).observe(
        this,
        function (obs, res) {
          if(res.status === 401) {
            PENGU_running = false;
			captcha();
			captchaalert();
            addMessage("Captcha Required. Refresh Page.");
			solvecaptcha();
          }
          if(res.status === 458) {
            PENGU_running = false;
			captcha();
			captchaalert();
            addMessage("Captcha Required. Refresh Page.");
			solvecaptcha();
          }
          if(res.status === 461) {
            PENGU_running = false;
			captcha();
			captchaalert();
            addMessage("Captcha Required. Refresh Page.");
			solvecaptcha();			
          }		  
           if(res.status === 404) {
            PENGU_running = false;
			botstatus("RESTARTING")
            addMessage("The bot encountered an issue and crashed, it is automatically restarting now...");
            setTimeout(function(){ PENGU_running = false; botstatus("ON"); }, 7000);
          }
          if(res.status === 426) {
			softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");
          }
          if(res.status === 429) {
			softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");			

          }	
          if(res.status === 521) {
            softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");
          }	
          if(res.status === 512) {
            softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");
          }		  
          //addMessage("search request status: " + res.status)
          if (!res.success) {
            obs.unobserve(this);
            reject(res.status);
          } else {
            //addMessage("Successfully searched");
            resolve(res.data.items);
          }
        },
      );
    });
  };
 
 



var PENGU_RPM = parseFloat(document.getElementById("rpm-selector").value);
var PENGU_running = false;
var successfulBuy = false;
var duration = 3600;
var numItemsOnTransferList;
update_num_tl();
var maxAuctionsAllowed = 100;


var minBids = [150,200,250,300,350,400,450,500,550,600];
var minBuys = [200,250,300,350,400,450,500,550,600,650];
 
minBuys.reverse()
numRandoCrit = minBids.length; 
counter = 0;
attemptJSON = [];


	

async function trybuy() {

	var configObj = getAppMain().getConfigRepository().getConfigObject(EAConfigurationRepository.KEY_ITEMS_PER_PAGE)
    configObj[EAConfigurationRepository.ITEMS_PER_PAGE.TRANSFER_MARKET] = 49;
	
    if (PENGU_running === false) {
      addMessage("Stopped the autobuyer!")
      counter = 0;
      return;
    } else {
      counter += 1;
      var checkBox = document.getElementById("new_auto_list_checkbox");
	  var futbincheckBox = document.getElementById("futbin_checkbox");
   
	  
	  var voidgk = document.getElementById("skipgk");
      var minPriceText = document.getElementById("min_list_price");
      var maxPriceText = document.getElementById("max_list_price");
      var ratingThresholdText = document.getElementById("rating-threshold");
	  var ratingFilter = document.getElementById("ratinginput").value;



      
      crit = getAppMain().getRootViewController().getPresentedViewController().getCurrentViewController().getCurrentController()._viewmodel.searchCriteria; 
      buyprice = crit.maxBuy;
      crit.maxBid = randomizeMaxPrice();
      crit.minBid = minBids[counter-1];
      crit.minBuy = minBuys[counter-1];
      // addMessage("crit.minBid: " + crit.minBid);
      // addMessage("crit.minBuy: " + crit.minBuy);
      items = await findTargets(crit);
 
      if (typeof(items) === "undefined") {
        addMessage("No Searches found.");
		addMessage("─────────────────────────────");
      } else {
        if (items.length > 0) {
		searchupdate()
		addMessage("Results Found: " + items.length);
		addMessage("¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬");
		for (let i = 0; i < 1; i++) {

		
          
          itemtobuy = items.reverse()[i];
          // addMessage("Should be trying to buy: " + itemtobuy.getAuctionData().tradeId);		  
		  reverse = items.reverse();
          addMessage(`Card: ${itemtobuy._staticData.name} ${itemtobuy.rating}`);			  
		  addMessage(`Price: ${itemtobuy.getAuctionData().buyNowPrice}`)
          addMessage(`Expires: ${itemtobuy.getAuctionData().expires} seconds`);			  
		  
// ============================================================================================================
// checking reasons to skip
// ============================================================================================================	 		  
		  

		  
		  var player = itemtobuy._staticData.name;
          var player_rating = itemtobuy.rating;
		  var explayercheck = player + " " + player_rating;
		  var price = itemtobuy.getAuctionData().buyNowPrice;
		  var overrideprice = document.getElementById("overinput").value;
		  var expires = itemtobuy.getAuctionData().expires;
          	  


	    //========== More than 48 results ========== 
         if (items.length > 48 && protectioncheckbox.checked == false) {
            action_txt = "Skipped buying the card: So many results found (Accidental filter protection)";
             addMessage(action_txt);
			 addMessage("─────────────────────────────");
			 PENGU_running = false;
			 botinfo('Autobuyer stopped due accidental filter protection. Lower your buy now!');
			 discordinfo('Autobuyer stopped due accidental filter protection. Lower your buy now!');
			 botstatus('OFF');
             break;
            }			  
		//==========Check if player was already seen before==========		  
		//  var auctionid = itemtobuy.getAuctionData().tradeId;
		// if (attemptJSON.includes(auctionid) == true) {
		// action_txt = player_rating + " " + player + " was skipped reason: Cached card!";
		// addMessage(action_txt);
		// continue;  
		//  } 
		  
		//==========Check if player is above rating==========
        if (player_rating < ratingFilter && price >= overrideprice) {
		action_txt = "Skipped buying the card: Below the mentioned rating!";
		addMessage(action_txt);
		addMessage("─────────────────────────────");
		continue;
		}		
		//==========Check if player is excluded==========
		
        if (allexcludedplayers.includes(explayercheck) == true && price >= overrideprice) {
		action_txt = "Skipped buying the card: Excluded!";
		addMessage(action_txt);
		addMessage("─────────────────────────────");
		continue;
		}		
        //==========Check if player is EXPIRED==========		
        if (itemtobuy.getAuctionData().expires < 3590) {
            action_txt = "Skipped buying the card: Expired | Cached";
             addMessage(action_txt);
			 addMessage("─────────────────────────────");
             continue;
            }
        //========== Check GK ========== 
         if (itemtobuy.preferredPosition == 0 && voidgk.checked == true) {
            action_txt = "Skipped buying the card: Goalkeeper";
             addMessage(action_txt);
			 addMessage("─────────────────────────────");
             continue;
            }
          if(!itemtobuy.getAuctionData().isWon()) {
            services.Item.bid(itemtobuy, itemtobuy.getAuctionData().buyNowPrice).observe(this, function _eBidComplete(e,t) {
              e.unobserve(this);
              addMessage("Request code: " + t.status)
			  
           if(t.status === 404) {
            addMessage("Network error, if it continues check your internet connection to EA servers");
          }
          if(t.status === 426) {
			softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");
          }
          if(t.status === 429) {
			softban()
			softbanalert()
            PENGU_running = false;
            addMessage("You're temporary banned from buying players (cooldown)");	

          }	
          if(t.status === 521) {   
            addMessage("Network Error.");
          }	
          if(t.status === 512) {
            addMessage("Network Error.");
          }			  
          if(t.status === 401) {
            button_stop_click()
            addMessage("Captcha detected!");
			captcha()
			solvecaptcha()
			button_start_click()
          }	 		  
          if(t.status === 458) {
            button_stop_click()
            addMessage("Captcha detected!");
			captcha()
			solvecaptcha()
			button_start_click()
          }
          if(t.status === 461) {
            button_stop_click()
            addMessage("Captcha detected!");
			captcha()
			solvecaptcha()
			button_start_click()
          }	 		  
		  if (t.success){
                if(itemtobuy.getAuctionData().isWon()) {
                  moneySound.play();
				  addMessage("─────────────────────────────");
                var successfulBuyMsg = `${formatAuctionItem(itemtobuy)} bought for ${itemtobuy.getAuctionData().buyNowPrice}`;
				  addMessage(successfulBuyMsg);
                 addMessage("─────────────────────────────");
				  sendMessageBuy()
				  successalert()
				  boughtupdate()	
			//	  var idfound = items[i].getAuctionData().tradeId;
             //     attemptJSON.push(idfound);
              if (futbincheckBox.checked === true) { 
               services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {   
             var resp = '';
              var resourceid = itemtobuy.resourceId;
            $.ajax({ type: "GET",   
             url: `https://cors.bridged.cc/https://www.futbin.com/21/playerPrices?player=&rids=${resourceid}`,	
		 
             async: false,
               success : function(text)
              {
             resp = text;
                 var playerbin = resp[resourceid]["prices"][platform]["LCPrice"];
				 var futbinthreshold = document.getElementById("futbinrating").value;
				 if (playerbin != "0" && itemtobuy.rating < futbinthreshold) {
                  addMessage("Player BIN = " + playerbin);

						buynowvalue = playerbin.replace(/,/g, "");
                  var steps = document.getElementById("stepsoption").value
                  for (let step = 0; step < steps; step++) {
                  buynowvalue  = UTCurrencyInputControl.getIncrementBelowVal(buynowvalue);
                  startvalue = UTCurrencyInputControl.getIncrementBelowVal(buynowvalue);
                  }
                  buynowprice = itemtobuy.getAuctionData().buyNowPrice;
                  var playerprofit = (buynowvalue * 0.95)  - buynowprice;
                  addMessage("Profit = " + playerprofit);
                  var profit = parseFloat(playerprofit);
                  var basenumber = parseFloat(document.getElementById("soldcount").innerHTML);
                  var newnumber = (basenumber + profit);
                  var coinsmadediv = document.getElementById('soldcount');
                  document.getElementById('soldcount').innerHTML = '';
                  coinsmadediv.innerHTML += `${newnumber}`;
                  addMessage("─────────────────────────────");				  
						futbinembed();
						services.Item.list(response.data.items[0],startvalue,buynowvalue,duration).observe(this, function _onListComplete(t, response) {
						addMessage("Successfully Listed bought item for " + startvalue + "/" + buynowvalue + ` (${steps} steps lower)`);
					botinfo(`Successfully listed ${formatAuctionItem(itemtobuy)} ` + startvalue + "/" + buynowvalue + " based on FUTBIN pricing!" + ` (${steps} steps lower)`);
					});
                 				
				 } else {
					 if (itemtobuy.rating > futbinthreshold) {
					 services.Item.move(response.data.items[0], ItemPile.TRANSFER).observe(this, function _eMoveComplete(i, response) {
					 botinfo("Player was sent to the transfer list since they exceed the rating threshold.");
                     discordinfo("Player was sent to the transfer list since they exceed the rating threshold.");							 

					 });
				 } else {
					 services.Item.move(response.data.items[0], ItemPile.TRANSFER).observe(this, function _eMoveComplete(i, response) {
				     botinfo("Player was sent to the transfer list since they are extinct.");
					 discordinfo("Player was sent to the transfer list since they are extinct.");
 });					 
				 }
				 }
        }
 });						

				});

                

			  }
				 if (checkBox.checked === true) {

                      services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {
						  
					 
                        if (response.success) {

                            if (response.data.items[0].rating < parseFloat(document.getElementById("rating-threshold").value)) {
                                services.Item.list(response.data.items[0],parseFloat(minPriceText.value),parseFloat(maxPriceText.value),duration).observe(this, function _onListComplete(t, response) {
                                    addMessage("Successfully Listed bought item for " + minPriceText.value + "/" + maxPriceText.value);
                                    sendMessageList()
                                    listeditem()
                                    addMessage("Number on the Transfer List: " + numItemsOnTransferList);
									addMessage("─────────────────────────────");
									getprofit()
                                  });
							} else if (response.data.items[0].rating > parseFloat(document.getElementById("rating-threshold").value)) {	  
                            services.Item.move(response.data.items[0], ItemPile.TRANSFER).observe(this, function _eMoveComplete(i, response) {
							addMessage("Number on the Transfer List: " + numItemsOnTransferList);	
							addMessage("The card exceeds the threshold and was not listed.")
                            addMessage(`${formatAuctionItem(itemtobuy)} sent to transfer list`);	
                            addMessage("─────────────────────────────");							
							highrating();
							thresholdalert();                           

							});
                            } 
					  	}	
					  });						

                  
				  } else if (checkBox.checked === false && futbincheckBox.checked === false) {
					  services.Item.requestUnassignedItems().observe(this, function _onRequestUnassignedComplete(t, response) {
                            services.Item.move(response.data.items[i], ItemPile.TRANSFER).observe(this, function _eMoveComplete(i, response) {
							addMessage("Number on the Transfer List: " + numItemsOnTransferList);	
							addMessage("The card was sent to the transfer list!")
                            botinfo('The card was sent to the transfer list!')							
				            numItemsOnTransferList += 1;
				           });
						   
						   });	
						   }

                } else {
                  addMessage(`Failed to buy ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`);
                                 //   var idfound = items[i].getAuctionData().tradeId;
                                   // attemptJSON.push(idfound);
								   addMessage("─────────────────────────────");
                  sendMessageFail()									
				  failalert()
				  
				  
                }

              } else {			  
                addMessage(`Failed to buy ${formatAuctionItem(itemtobuy)} for ${itemtobuy.getAuctionData().buyNowPrice}`);
				addMessage("─────────────────────────────");
				failalert()
				sendMessageFail()
                
              }
            });
          } else {
            // addMessage("Already Active!");
          }        		  
        
		}
	
        } else {
          addMessage("No Result.");
		  addMessage("─────────────────────────────");
		  searchupdate()
        }
      }
  }

if (numItemsOnTransferList > 90) {
	addMessage("─────────────────────────────");	
    addMessage("Automatically clearing sold items.")
  services.Item.clearSoldItems().observe(this, function _clearSoldComplete(t, response) {
    t.unobserve(this),
    addMessage("Transfer List Cleared!")
	numItemsOnTransferList = 0;
	addMessage("─────────────────────────────");
    tlclearembed()
	cleartlalert()
	services.Item.clearTransferMarketCache();
  });	
}

if (counter % numRandoCrit === 0) {
  counter = 0;
}


PENGU_RPM = parseFloat(document.getElementById("rpm-selector").value);
var rndInt = PENGU_RPM
var delay = (60000/rndInt)
var searchescompleted = parseFloat(document.getElementById('searchescount').innerHTML);
var searchesinput = parseFloat(document.getElementById("numbersearches").value);
var timeoutdurationminutes = parseFloat(document.getElementById("timeoutsmin").value);
var timeoutms = (timeoutdurationminutes*60000)
if (searchescompleted % searchesinput == 0 && searchescompleted != 0) {
addMessage(`Taking a break for ${timeoutdurationminutes} minutes`)
botstatus("PAUSED")
timeoutalertstart()
setTimeout(function(){ addMessage('Duration finished, continuing script execution.'), timeoutalertend(), botstatus("ON"), searchupdate(), setTimeout(trybuy, delay);}, timeoutms);
} else {

setTimeout(trybuy, delay);


}
};

