import { Text, SectionList, View, Image } from "react-native";
import styles from "./style";

export default function App() {
  const sections = [
    {
      id: "0",
      title: "Basic Components",
      data: [
        { id: "0", text: "View", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgyxHpBycdaMZ2ew1m1m3wdMWgARVxM1A4Zw&s" },
        { id: "1", text: "Text", image: "https://www.shutterstock.com/image-vector/text-icon-vector-symbol-education-260nw-1204430134.jpg" },
        { id: "2", text: "Image", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjT63XcSgPOt1sQH_t1tomzh3xMXMdCZG5wQ&s" },
      ],
    },
    {
      id: "1",
      title: "List Components",
      data: [
        { id: "3", text: "ScrollView", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGUHFyZUtLOAk7SzIKVuQpyHg1AaRrLkHHQg&s" },
        { id: "4", text: "ListView", image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUNtWH///8juGgAsVXK7doAslj5/fv0/Pgoum0RuWit38AAtF4As1sAsFPl9u3Z8uSx5Mjo9+9ZxYiQ2K+65s6g3Lljy5M3v3jR79+W2rOB06Xc8+dFwn5Nw4JtzJbC59B2z5xpypOF1KiR2LCl375NdXYVAAAEtUlEQVR4nO2dbXejIBBGRUuVgiYmVdPYdNOX//8btzndbhUloQeJPmTu1z05eBcUR2amEQudaO4L8A4Z4kOG+JAhPmSIDxniQ4b4kCE+ZIgPGeJzu4a7qm6yGIWsqavdbwzTSuRcSSQUz8VTamv4EXEZ4SF59GFlmB4SRL8TMjkMp3FgWMRq7gt1QInikmEpUCfwCynKC4YN8gyeUM15wz2f+wqd4ftzhqtk7uubgGR1xrBGX6MnVG02LEIQ/HzaFEbDJ/y78AR/MhpusHeKb+TGZJiKua9tIkRqMCzzuS9tIvLSYBjEXnGit190De+CMbwjQ3TIEB8yxIcM8SFDfMgQHzLEhwzxIUN8yBAfMsSHDPEhQ3ymMJRKyeUexTkbSi6fX46bWC31yNjVkDfrr/O51VEZ5tFD4toVDZP9/f9f7OLhyCqXwgcyt14yboZJ75C8zDRFmexX935ot6YlM6mhOrIebX9QlelJV1OSPttNo9sc6sl/227+hsxGUzyno7GaRRdDtdXHTLuG/E7/54lp7R4VDob5Sh+zm6IiD54FGXuxWacuhslwzOpnEvupOl5Y2yQ1ORhKcXbM5I9vQbt8EWhDqxuRVunZ3wb/pBnZLbpDet8tCqvsSZ87fgy/40fqpT/kqr9qpGg9+pVXeWvjF9681X5Vpl5ot5FldOEYPXVz4Xcj1RmKi8wHMbfOYHaOgLP1V4TYvhjqozwEwL8KgSf4isEPx/2rsA9Jr8xEX6Jsw9EZoK+J+JAhPmSIDxniQ4b4kCE+ZIgPGeLjbihVoj4D/aWG+O6GSbPdtW27fl1qMoajoeTr71SFYjP2i8/Z9YL9f6eboeyd1L8PvvApuXl68EFVS1tHJ0MZ91MRtppicvSXqpC+WX4xdTLkj9qwz71PbslYp6bpeLR7UrgYymd90N6P9N4wk2PXucPp/FCfQsY6Jxfej556o/kxzIcKbz/3v55O5AGrSXRapcMxHzqn3GvfgpaZaf4yFXwfAV8hUyH4ORy7D/dh3YfhP0uH+SSh7YcX32kqr4KPdl2QHN9L+60Xw3sv1WILXTCA2OIG4sPoJ8avA43xoxv4TrN4yBAfMsSHDPEhQ3zIEB8yxIcM8SFDGwLP1f9Xb5EFW28RfM3M5bqn2E/dk7pS3dOl2jX5Bl67dqH+UGWDv0Y0IdepP9RPl97D7xpx1Trg1n8uRvC13MHX44ffU2F+Q999McJfpTfQn2b2HkOzd43A3/Ev9fqSXt/artPrS+vXprekkzl6v7Yb6Ll3ioAfwu6beAO9L08E3r908ZAhPmSIDxniQ4b4kCE+ZIgPGeJDhviQIT5kiA8Z4kOG+JAhPkZDqzwHBHp5TV3D0q7affnkpcEwFXNf2kSI1GDYTRxBRm6YydCu68Ti4ZXRsFjqoe7vkIXRkNUhKKqamQ2D2C+0HNi+Idvj34n8jZ0zZA36OlUNO29YjlRQICGF3h9HN2RFjDyLKh7k1Q0MWXpIUKdRJodhbuTQkLGPyFDPtGwkF2OdN8cMWVqJnCsPyWn+UDwX1Why66jhJ7uqbrIYhaypq53BxGQYDmSIDxniQ4b4kCE+ZIgPGeJDhviQIT5kiA8Z4vMXFIu0gZbVxqMAAAAASUVORK5CYII=" },
      ],
    },
  ];

  return (
    <SectionList
      style={styles.container}
      sections={sections}
      keyExtractor={(item) => item.id}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.headerStyle}>{title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.itemStyle}>{item.text}</Text>
        </View>
      )}
      SectionSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}
