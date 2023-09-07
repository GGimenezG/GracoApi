CREATE PROCEDURE `business_get_web`(
	IN iId INT
)
BEGIN
	DECLARE vValid INT;
    DECLARE oRes INT;
    DECLARE oMessage VARCHAR(255);
		IF iId != 0 THEN
			SELECT b.idBusiness as id, b.name, b.address, b.email, b.mission, b.vision, b.phone, b.aboutUs
			FROM business b 
			WHERE b.idBusiness = iId;
			SET oRes = 1;
			SET oMessage = 'Get data successfully';
		ELSE
			SET oRes = 0;
			SET oMessage = 'Record doesn`t exist';
		END IF;
    SELECT oRes as success, oMessage as message;
END