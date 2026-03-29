"use client";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";
import { toast } from "react-hot-toast"; // приклад для пуш-повідомлень

export default function LogoutModal() {
  const handleLogout = async () => {
    try {
      // Імітація запиту до сервера
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1500); 
        // reject(new Error("Помилка мережі")); // Розкоментуйте для тесту помилки
      });
      
      console.log("Вихід виконано");
    } catch (error) {
      toast.error("Не вдалося вийти. Спробуйте пізніше.");
      throw error; // Викидаємо помилку далі в Modal для зупинки лоадера
    }
  };

  return (
    <ConfirmationModal
      title="Ви точно хочете вийти?"
      description="Ми будемо сумувати за вами!"
      confirmButtonText="Вийти"
      cancelButtonText="Відмінити"
      onConfirm={handleLogout}
    />
  );
}