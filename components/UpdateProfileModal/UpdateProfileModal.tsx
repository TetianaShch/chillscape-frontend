"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-hot-toast";
import styles from "./UpdateProfileModal.module.css";
import { useAuthStore } from "@/store/authStore";
import { User } from "@/types/user";

export default function UpdateProfileModal() {
  const router = useRouter();
  const { user, setUser } = useAuthStore();

  const [name, setName] = useState(user?.name || "");
  const [avatarUrl, setAvatarUrl] = useState(
    user?.avatar || "https://ac.goit.global/fullstack/react/default-avatar.jpg"
  );
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    if (!isLoading) router.back();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setAvatarUrl(objectUrl);
  };

  const handleConfirm = async () => {
    if (!user) return;
    setIsLoading(true);
    try {
      const updatedUser: User = {
        id: user.id,
        email: user.email,
        name,
        avatar: avatarUrl,
      };
      setUser(updatedUser);
      toast.success("Профіль оновлено!");
      router.back();
    } catch (error) {
      console.error(error);
      toast.error("Сталася помилка. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isLoading]);

  return (
    <div className={styles.backdrop} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          disabled={isLoading}
        >
          ✕
        </button>

        <h2 className={styles.title}>Редагувати профіль</h2>

        {/* Avatar */}
        <div className={styles.avatarSection}>
          <span className={styles.label}>Аватар</span>
          <div className={styles.avatarRow}>
            <Image
              src={avatarUrl}
              alt="avatar preview"
              width={117}
              height={117}
              className={styles.avatarPreview}
            />
            <button
              className={styles.uploadBtn}
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              type="button"
            >
              Завантажити фото
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className={styles.hiddenInput}
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Name */}
        <div className={styles.nameSection}>
          <label className={styles.label} htmlFor="profile-name">
            Ім'я
          </label>
          <input
            id="profile-name"
            type="text"
            placeholder="Введіть нове ім'я"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading}
            className={styles.input}
          />
        </div>

        <div className={styles.actions}>
          <button
            className={styles.cancelBtn}
            onClick={handleClose}
            disabled={isLoading}
          >
            Відмінити
          </button>
          <button
            className={styles.confirmBtn}
            onClick={handleConfirm}
            disabled={isLoading || !name.trim()}
          >
            {isLoading ? "Завантаження..." : "Зберегти"}
          </button>
        </div>
      </div>
    </div>
  );
}