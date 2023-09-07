CREATE PROCEDURE `postshascategories_manage`(
	IN iIdPost INT,
	IN iAddTypes text,
    IN iDeleteTypes text,
	IN iToken VARCHAR(45),
    IN iUser VARCHAR(45)
)
BEGIN
	-- Declaramos variables a usar
	DECLARE vValid INT;
    DECLARE vValidCategory INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
    DECLARE EXIT HANDLER FOR SQLEXCEPTION
    BEGIN
        ROLLBACK;
        SET oRes = 0;
        SET oMessage = 'Error ';
		SELECT oRes as success, oMessage as message;
    END;
	IF iAddTypes != '' THEN
		SET @myArrayOfCategories = iAddTypes;
		WHILE (LOCATE(',', @myArrayOfCategories) > 0)
		DO
			SET @value = CONVERT(ELT(1, @myArrayOfCategories), SIGNED INTEGER);
			SET @myArrayOfCategories = SUBSTRING(@myArrayOfCategories, LOCATE(',',@myArrayOfCategories) + 1);

			SELECT COUNT(*)
			INTO vValidCategory 
			FROM categories c
			WHERE c.idCategories = @value;
			
			IF vValidCategory > 0 THEN
				INSERT INTO `postshascategories`
				(
				`Posts_idPosts`,
				`Categories_idCategories`)
				VALUES
				(
				iIdPost,
				@value);
			ELSE 
				SET oRes = 0;
				SET oMessage = 'Invalid region Id';
			END IF;
		END WHILE;
	END IF;
    
    IF iDeleteTypes != '' THEN
		DELETE FROM postshascategories 
		WHERE FIND_IN_SET(CONVERT(Categories_idCategories, CHAR), iDeleteTypes) AND Posts_idPosts = iIdPost;
    END IF;
    
	SET oRes = 1;
	SET oMessage = 'Record added successfully';
	
    SELECT oRes as success, oMessage as message;
    
END